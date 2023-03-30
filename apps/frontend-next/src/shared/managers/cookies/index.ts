import * as NS from "nookies";
// types
import { NextPageContext } from "next";
import { CookieSerializeOptions } from "cookie";
// constants
const COOKIES_OPTIONS: CookieSerializeOptions = {
  maxAge: 30 * 24 * 60 * 60,
  path: "/",
};

const cookiesManager = (ctx?: NextPageContext) => ({
  // TOKEN
  getToken: (): string | undefined => {
    const { token } = NS.parseCookies(ctx);

    return token;
  },
  setToken: (token: string, options?: CookieSerializeOptions): void => {
    const AUTH_TOKEN_FIELD = process.env.NEXT_PUBLIC_AUTH_TOKEN_FIELD;

    if (AUTH_TOKEN_FIELD) {
      NS.setCookie(ctx, AUTH_TOKEN_FIELD, token, {
        ...COOKIES_OPTIONS,
        ...options,
      });
    }
  },
  removeToken: (): void => {
    const AUTH_TOKEN_FIELD = process.env.NEXT_PUBLIC_AUTH_TOKEN_FIELD;

    if (AUTH_TOKEN_FIELD) {
      NS.destroyCookie(ctx, AUTH_TOKEN_FIELD);
    }
  },
});

export { cookiesManager };
