import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Divider' {
  interface DividerPropsVariantOverrides {
    faded: true;
    thick: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#6b5701', // This color is based on the original website's color scheme
    },
    secondary: {
      main: '#f50057',
    },
  },
  
  typography: {
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
    h5: {
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '1rem 0',
          borderColor: 'rgba(0, 0, 0, 0.12)', // default color
        },
      },
      variants: [
        {
          props: { variant: 'fullWidth' },
          style: {
            margin: '1rem 0',
            borderColor: 'rgba(0, 0, 0, 0.12)',
          },
        },
        {
          props: { variant: 'inset' },
          style: {
            margin: '1rem 0 1rem 72px',
            borderColor: 'rgba(0, 0, 0, 0.12)',
          },
        },
        {
          props: { variant: 'middle' },
          style: {
            marginLeft: '1rem',
            marginRight: '1rem',
            borderColor: 'rgba(0, 0, 0, 0.12)',
          },
        },
        {
          props: { variant: 'faded' as 'fullWidth' | 'inset' | 'middle' | 'faded' }, // Update the type of variant to include 'faded'
          style: {
            margin: '1rem 0',
            height: '1px',
            background: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0))',
          },
        },
        {
          props: { variant: 'thick' },
          style: {
            margin: '1rem 0',
            borderBottomWidth: '2px',
          },
        },
      ],
    },
  },
});

export default theme;