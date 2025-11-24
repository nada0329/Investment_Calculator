import { createTheme } from '@mui/material/styles';

// Define our waterfall color palette
const waterfallColors = {
  deepPool: '#1e3a8a',      // Deep navy blue for depth
  flowingWater: '#0ea5e9',  // Bright flowing blue
  turquoise: '#06b6d4',     // Clear turquoise water
  waterFoam: '#f0f9ff',     // Very light blue for foam
  forestGreen: '#15803d',   // Surrounding nature
  white: '#ffffff'          // Pure white
};


const waterfallTheme = createTheme({
  palette: {
    primary: {
      main: waterfallColors.deepPool,      // Use deep blue as primary
      light: waterfallColors.flowingWater, // Lighter blue for hover states
      dark: '#1e40af',                     // Even darker blue for active states
      contrastText: waterfallColors.white  // White text on blue buttons
    },
    secondary: {
      main: waterfallColors.turquoise,     // Turquoise as secondary color
      light: '#67e8f9',                    // Lighter turquoise
      dark: '#0e7490',                     // Darker turquoise
      contrastText: waterfallColors.white  // White text on turquoise
    },
    background: {
      default: waterfallColors.waterFoam,  // Light blue background
      paper: waterfallColors.white         // White containers/cards
    },
    text: {
      primary: '#1e293b',                  // Dark blue-gray for readability
      secondary: '#475569'                 // Medium gray for secondary text
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 600,
      color: waterfallColors.deepPool      // Use deep blue for main headings
    },
    h6: {
      fontWeight: 500,
      color: waterfallColors.deepPool      // Deep blue for section headings
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          border: `1px solid #e2e8f0`      // Subtle border for paper elements
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,                 // Slightly rounded buttons
          textTransform: 'none',           // Keep text normal case
          fontWeight: 500
        }
      }
    }
  }
});

export default waterfallTheme;