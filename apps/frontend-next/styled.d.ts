import 'styled-components';

import type { Theme } from "@ig/shared/theme/styled/theme"

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

