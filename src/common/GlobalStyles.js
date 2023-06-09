import { createGlobalStyle, css } from "styled-components";

const fontStyle = css`
  @font-face {
    font-family: "PretendardRegular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "PretendardBold";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "PretendardLight";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${fontStyle}

  body {
    font-family: "Pretendard", sans-serif;
    color: ${(props) => props.theme.darkGrey_C};
  }

  a {
    color : inherit;
    text-decoration : none;
  }

  textarea {
    resize: none;
    outline: none;
  }

  input {
    outline: none;
  }
  
  a:hover {
    color : inherit;
  }

  @media (max-width : 576px) {
    html { 
      font-size : 14px;
    }
  }
`;

export default GlobalStyles;
