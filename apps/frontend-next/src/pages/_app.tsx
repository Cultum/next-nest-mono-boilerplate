import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@sk/lib/apolloClient";
import { cookiesManager } from "@sk/shared/managers/cookies";
import { ProvideStyledTheme } from "@sk/shared/theme/styled/provider";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const { getToken } = cookiesManager();

  const token: string | undefined = pageProps.serverToken ?? getToken();
  const apolloClient = useApollo(pageProps.initialApolloState, token);

  return (
    <ApolloProvider client={apolloClient}>
      <ProvideStyledTheme>
        <Head>
          <title>Cultum Starter</title>

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta charSet="utf-8" />
        </Head>

        <Component {...pageProps} />
      </ProvideStyledTheme>
    </ApolloProvider>
  );
}
