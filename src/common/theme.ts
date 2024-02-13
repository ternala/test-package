import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
import { Theme as ThemeBase, ThemeOptions as ThemeOptionsBase} from '@mui/material/styles/createTheme';

export interface CustomTheme extends ThemeBase {
  status: {
    danger: string;
  };
}

export interface CustomThemeOption extends ThemeOptionsBase {
  status?: {
    danger?: string;
  };
}

export const baseThemeOption: CustomThemeOption = {
  status: {
    danger: orange[500]
  }
}

export const customTheme = createTheme(baseThemeOption) as CustomTheme;
