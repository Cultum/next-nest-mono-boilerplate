import { css } from "styled-components"

import { fonts, pagResolutions } from "../theme"

const commonTypography = {
  subtitle1: css`
    font-family: ${fonts.roboto};
    font-weight: 400;
    font-size: 18px;
    line-height: 175%;
  `,
  subtitle2: css`
    font-family: ${fonts.roboto};
    font-weight: 500;
    font-size: 14px;
    line-height: 157%;
  `,
  subtitle3: css`
    font-family: ${fonts.inter};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  `,
  body1: css`
    font-family: ${fonts.roboto};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.15px;
  `,
  body2: css`
    font-family: ${fonts.roboto};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.17px;
  `,
  body3: css`
    font-family: ${fonts.roboto};
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.17px;
  `,
  h1: css`
    font-family: ${fonts.roboto};
    font-weight: 300;
    font-size: 96px;
    line-height: 116.7%;
    letter-spacing: -0.5px;
  `,
  h2: css`
    font-family: ${fonts.roboto};
    font-weight: 700;
    font-size: 55px;
    line-height: 120%;
    letter-spacing: -0.5px;
  `,
  h3: css`
    font-family: ${fonts.roboto};
    font-weight: 400;
    font-size: 48px;
    line-height: 116.7%;
  `,
  h4: css`
    font-family: ${fonts.roboto};
    font-weight: 400;
    font-size: 32px;
    line-height: 123.5%;
    letter-spacing: 0.25px;
  `,
  h5: css`
    font-family: ${fonts.roboto};
    font-weight: 400;
    font-size: 26px;
    line-height: 133.4%;
  `,
  h6: css`
    font-family: ${fonts.roboto};
    font-weight: 400;
    font-size: 23px;
    line-height: 160%;
    letter-spacing: 0.15px;
  `,
  h7: css`
    font-family: ${fonts.roboto};
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 0.15px;
  `,
  inputText: css`
    font-family: ${fonts.roboto};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.15px;
  `,
  chip: css`
    font-family: ${fonts.roboto};
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
  `,
  overline: css`
    font-family: ${fonts.roboto};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 32px;
    letter-spacing: 1px;
  `,
  poppins: {
    h1: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 56px;
      line-height: 84px;
    `,
    h2: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 72px;
    `,
    h3: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 42px;
      line-height: 63px;
    `,
    h4: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 48px;
    `,
    h5: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 26px;
      line-height: 39px;
    `,
    h6: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 23px;
      line-height: 34px;
    `,
    h7: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
    `,
    body1: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    `,
    body2: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    `,
    subtitle: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    `,
    caption: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.15px;
    `,
    fieldText: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    `
  }
}

const mobileTypography = {
  h1: css`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 160%;
    letter-spacing: 0.15px;
  `,
  h2: css`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 0.15px;
  `,
  h3: css`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0.15px;
  `,
  h4: css`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.15px;
  `,
  h5: css`
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 150%;
    letter-spacing: 0.15px;
  `,
  body1: css`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.15px;
  `,
  body2: css`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.15px;
  `,
  body3: css`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 150%;
    letter-spacing: 0.15px;
  `,
  inputLabel: css`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0.15px;
  `,
  bold: css`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.15px;
  `,
  roboto: {
    helperText: css`
      font-family: ${fonts.roboto};
      font-style: normal;
      font-weight: 400;
      font-size: 8px;
      line-height: 9px;
      display: flex;
      align-items: center;
      letter-spacing: 0.4px;
    `
  },
  poppins: {
    body1: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    `,
    body2: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
    `,
    body3: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 19px;
    `,
    h1: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
    `,
    h2: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
    `,
    h3: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
    `,
    h4: css`
      font-family: ${fonts.poppins};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    `
  }
}

export const templates = {
  // content
  content: {
    absolute: css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    `,
    content_center: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `
  },
  // typography
  typography: {
    common: commonTypography,
    mobile: mobileTypography,
    extended: {
      h1: css`
        ${commonTypography.h1};
        @media (max-width: ${pagResolutions.small_screen.max}px) {
          ${mobileTypography.h1};
        }
      `,
      h2: css`
        ${commonTypography.h2};
        @media (max-width: ${pagResolutions.small_screen.max}px) {
          ${mobileTypography.h2};
        }
      `,
      h3: css`
        ${commonTypography.h3};
        @media (max-width: ${pagResolutions.small_screen.max}px) {
          ${mobileTypography.h3};
        }
      `
    },
    components: {
      inputText: css`
        font-family: ${fonts.roboto};
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.15px;
      `,
      inputTextSmall: css`
        font-family: ${fonts.roboto};
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.0046em;
      `,
      buttonLarge: css`
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        letter-spacing: 0.46px;
        text-transform: uppercase;
      `,
      buttonMedium: css`
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.4px;
        text-transform: uppercase;
      `,
      buttonSmall: css`
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.46px;
        text-transform: uppercase;
      `
    },
    text_ellipsis: css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `
  }
}
