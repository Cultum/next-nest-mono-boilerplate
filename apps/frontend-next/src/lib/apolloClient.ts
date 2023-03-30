import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { AppProps } from "next/app";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";

// constants
export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<Record<string, unknown>>;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

function createApolloClient(token?: string) {
  const isServer = typeof window === "undefined";

  return new ApolloClient({
    ssrMode: isServer,

    link: from([
      errorLink,
      new HttpLink({
        uri: isServer ? process.env.GQL_REMOTE_API_URL : process.env.API_PREFIX, // Server URL (must be absolute)
        credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
        headers: {
          ...(Boolean(token) &&
            Boolean(process.env.NEXT_PUBLIC_AUTH_TOKEN_FIELD) && {
              [process.env.NEXT_PUBLIC_AUTH_TOKEN_FIELD as string]:
                token as string,
            }),
        },
      })
    ]),
    cache: new InMemoryCache({}),
  });
}

export function initializeApollo(
  initialState: Record<string, unknown> | null = null,
  token?: string
) {
  const _apolloClient = apolloClient ?? createApolloClient(token);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(
  client: ApolloClient<Record<string, unknown>>,
  pageProps: AppProps["pageProps"]
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(
  initialState: Record<string, unknown>,
  token?: string
) {
  return useMemo(
    () => initializeApollo(initialState, token),
    [initialState, token]
  );
}
