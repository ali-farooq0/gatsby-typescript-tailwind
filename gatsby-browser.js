/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import './src/css/index.css';
import React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({});

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      {element}
    </ChakraProvider>
  );
};
