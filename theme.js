const customTheme = {
  // add a custom font
  font: '"ITC Avant Garde Gothic Std Bold", "Helvetica", "Arial", sans-serif',
  // custom colors
  colors: {
    text: '#FFFFFF',
    background: '#265F69',
    link: '#0ff',
  },
  pre: {
    fontSize: '12px',
  },
};

import { syntaxHighlighterPrism } from 'mdx-deck/themes';

export default [customTheme, syntaxHighlighterPrism];
