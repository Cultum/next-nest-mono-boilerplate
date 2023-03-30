import {
  dimensions,
  fonts,
  fontSizes,
  pagResolutions,
  palette
} from "../theme"
import { templates } from "./templates"

export interface Theme {
  palette: typeof palette
  templates: typeof templates
  dimensions: typeof dimensions
  fontSizes: typeof fontSizes
  fonts: typeof fonts
  pagResolutions: typeof pagResolutions
}

export const theme: Theme = {
  palette,
  templates,
  dimensions,
  fontSizes,
  pagResolutions,
  fonts
}
