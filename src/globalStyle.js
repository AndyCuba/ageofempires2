import styled, { createGlobalStyle, keyframes } from 'styled-components';

import background from './images/bg5.jpg';
import scrollBackground from './images/scroll.png';

const mainColor = 'rgba(57, 150, 54, 0.95)';

const fadeIn = keyframes`
    from {
        opacity: 0;
        scale: (0.9);
    }
    to {
        opacity: 1;
        scale: (1);
    }
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: black;
    background: url(${background}) no-repeat center/cover;
    font-family: 'Oldenburg', cursive;
    height: 200vh;
    font-size: 25px;
    li {
      list-style: none;
    }
    a {
      list-style: none;
      text-decoration: underline;
      color: black;
    }
    h1{
      text-align: center;
    }
  }
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const SwitchWrapper = styled.div`
  animation: 2s ${fadeIn} linear;
  padding: 5.5rem 9rem 2rem 10rem;
  min-height: 85vh;
  &:after{
    content: "";
    position: absolute;
    top: 5%;
    left: 0;
    width: 100%;
    height: 190%;
    z-index: -1;
    background: url(${scrollBackground}) no-repeat top/cover;
    opacity: 0.8;
}
`;


export { GlobalStyle, Wrapper, SwitchWrapper, mainColor };