import codeHighlightStyle from 'react-syntax-highlighter/styles/prism/atom-dark';
import prismTypescript from 'react-syntax-highlighter/languages/prism/typescript';
import prismTsx from 'react-syntax-highlighter/languages/prism/tsx';

export default {
  font: '"ITC Avant Garde Gothic Std Bold", "Helvetica", "Arial", sans-serif',
  prism: {
    style: codeHighlightStyle,
    fontSize: '10px',
    languages: {
      typescript: prismTypescript,
      tsx: prismTsx,
    },
  },
  token: {
    fontSize: '32px',
  },
  p: {
    fontSize: '32px',
    textAlign: 'center',
  },
  h1: {
    textAlign: 'center',
    fontSize: '62px',
  },
  h2: {
    textAlign: 'center',
    fontSize: '52px',
  },
  h3: {
    textAlign: 'center',
    fontSize: '42px',
  },
  h4: {
    textAlign: 'center',
    fontSize: '32px',
  },
  h5: {
    textAlign: 'center',
    fontSize: '22px',
  },
  h6: {
    textAlign: 'center',
    fontSize: '12px',
  },

  span: {
    fontSize: '10px',
  },
  code: {
    fontSize: '10px',
  },
  pre: {
    fontSize: '10px',
  },
  colors: {
    text: '#FFFFFF',
    background: '#265F69',
    link: '#0ff',
  },
};

// const customTheme = {
//   // add a custom font
//   font: '"ITC Avant Garde Gothic Std Bold", "Helvetica", "Arial", sans-serif',
//   // custom colors
//   colors: {
//     text: '#FFFFFF',
//     background: '#265F69',
//     link: '#0ff',
//   },
//   pre: {
//     fontSize: '12px',
//   },
// };

// import { syntaxHighlighterPrism } from 'mdx-deck/themes';

// export default [customTheme, syntaxHighlighterPrism];
