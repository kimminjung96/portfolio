import styled from "styled-components";


export const LayOut = styled.div`
  width: ${(props) => props.width || `1500px`};
  height: ${(props) => props.height || `100%`};
  ${(props) => props.minHeight}
  color: ${(props) => props.color};
  display: ${(props) => props.display || `flex`};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  backdrop-filter: ${(props) => props.filter};
  margin: ${(props) => props.margin || `0 auto`};
  padding: ${(props) => props.padding};
  overflow: ${(props) => props.overflow};
  border-bottom: ${(props) => props.borderBottom};
  border: ${(props) => props.border};
  font-size: ${(props) => props.fontSize};
  position: ${(props) => props.position};

  @media (max-width: 1500px) {
    width: 1350px;
  }
  @media (max-width: 1350px) {
    width: 1280px;
  }
  @media (max-width: 1280px) {
    width: 1100px;
  }
  @media (max-width: 1100px) {
    width: 900px;
  }
  @media (max-width: 900px) {
    width: 800px;
  }
  @media (max-width: 800px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

/* export const Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  display: ${(props) => props.display || "flex"};
  color: ${(props) => props.color || "gray"};
  justify-content: ${(props) => props.ju || "center"};
  align-items: ${(props) => props.al || "center"};
  text-align: ${(props) => props.textA || "center"};
`; */

export const Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  display: ${(props) => props.display || `flex`};
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
  flex-wrap: ${(props) => props.wrap || `wrap`};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zIndex};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => props.fontFamily};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  overflow: ${(props) => props.overflow};
  overflow-x: ${(props) => props.overflowX};
  overflow-y: ${(props) => props.overflowY};
  background-image: ${(props) => props.bgImg};
  background-size: ${(props) => props.bgSize || `cover`};
  background-repeat: no-repeat;
  background-attachment: ${(props) => props.attachment};
  background-position: ${(props) => props.bgPosition || `center`};

  transition: ${(props) => props.transition || `0.2s`};
  cursor: ${(props) => props.cursor};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  letter-spacing: ${(props) => props.letterSpacing};
  opacity: ${(props) => props.opacity};

  & pre {
    white-space: pre-wrap;
  }

  &:hover {
    color: ${(props) => props.isHover && props.theme.basicTheme_C};
    cursor: ${(props) => (props.isHover ? `pointer` : ``)};
  }
`;

export const Btn = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1;
  border: 1px solid lightgray;
  color: ${(props) => props.color || "gray"};
  background: ${(props) => props.background || "white"};
`;

export const CommonButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize || `18px`};
  line-height: 1;
  color: ${(props) => props.color || props.theme.white_C};
  border-radius: ${(props) => props.radius || `7px`};
  box-shadow: none;

  ${(props) => !props.kindOf && `background : ${props.theme.basicTheme_C};`}
  ${(props) => !props.kindOf && `border : 1px solid ${props.theme.basicTheme_C};`}
  /* white */
  ${(props) => props.kindOf === `white` && `background : ${props.theme.subTheme_C};`}
  ${(props) => props.kindOf === `white` && `color : ${props.theme.basicTheme_C};`}
  ${(props) => props.kindOf === `white` && `border : 1px solid ${props.theme.subTheme_C};`}
    /* black */
  ${(props) => props.kindOf === `black` && `background : ${props.theme.black_C};`}
  ${(props) => props.kindOf === `black` && `color : ${props.theme.white_C};`}
  /* subTheme */
  ${(props) => props.kindOf === `subTheme` && `background : ${props.theme.white_C};`}
  ${(props) => props.kindOf === `subTheme` && `color : ${props.theme.basicTheme_C};`}
  ${(props) => props.kindOf === `subTheme` && `border : 1px solid ${props.theme.basicTheme_C};`}

  ${(props) => props.kindOf === `kakao` && `background : ${props.theme.kakao_C};`}
  ${(props) => props.kindOf === `kakao` && `color : ${props.theme.subTheme4_C};`}
  ${(props) => props.kindOf === `kakao` && `border : 1px solid ${props.theme.kakao_C};`}

  ${(props) => props.kindOf === `delete` && `background : ${props.theme.red_C};`}
  ${(props) => props.kindOf === `delete` && `color : ${props.theme.white_C};`}
  ${(props) => props.kindOf === `delete` && `border : 1px solid ${props.theme.red_C};`}
  /* grey */
  ${(props) => props.kindOf === `grey` && `background : ${props.theme.white_C};`}
  ${(props) => props.kindOf === `grey` && `color : ${props.theme.grey_C};`}
  ${(props) => props.kindOf === `grey` && `border : 1px solid ${props.theme.grey_C};`}
  ${(props) => props.kindOf === `grey` && `font-size : 16px;`}

  /* grey2 */
  ${(props) => props.kindOf === `grey2` && `background : ${props.theme.white_C};`}
    ${(props) => props.kindOf === `grey2` && `color : ${props.theme.black2_C};`}
    ${(props) => props.kindOf === `grey2` && `border : 1px solid ${props.theme.grey_C};`}
    ${(props) => props.kindOf === `grey2` && `font-size : 16px;`}

  /* grey3 */
  ${(props) => props.kindOf === `grey3` && `background : ${props.theme.lightGrey3_C};`}
    ${(props) => props.kindOf === `grey3` && `color : ${props.theme.darkGrey4_C};`}
    ${(props) => props.kindOf === `grey3` && `border : 1px solid ${props.theme.lightGrey3_C};`}
  

&:hover {
    background: ${(props) => props.theme.white_C};
    color: ${(props) => props.theme.basicTheme_C};
    ${(props) => !props.kindOf && `border :1px solid ${props.theme.basicTheme_C};`}
    /* white */
    ${(props) => props.kindOf === `white` && `background ${props.theme.basicTheme_C};`}
    ${(props) => props.kindOf === `white` && `color ${props.theme.subTheme_C};`}
    ${(props) => props.kindOf === `white` && `border : 1px solid ${props.theme.basicTheme_C};`}
    /* black */
    ${(props) => props.kindOf === `black` && `background : ${props.theme.white_C};`}
    ${(props) => props.kindOf === `black` && `color : ${props.theme.black_C};`}
    ${(props) => props.kindOf === `black` && `border : 1px solid ${props.theme.black_C};`}
      /* subTheme */
    ${(props) => props.kindOf === `subTheme` && `color ${props.theme.white_C};`}
    ${(props) => props.kindOf === `subTheme` && `background ${props.theme.basicTheme_C};`}
    ${(props) => props.kindOf === `subTheme` && `border : 1px solid ${props.theme.basicTheme_C};`}

          

    ${(props) => props.kindOf === `kakao` && `background : ${props.theme.kakao_C};`}
    ${(props) => props.kindOf === `kakao` && `color : ${props.theme.subTheme4_C};`}
    ${(props) => props.kindOf === `kakao` && `border : 1px solid ${props.theme.subTheme4_C};`}
    ${(props) => props.kindOf === `delete` && `background : ${props.theme.white_C};`}
    ${(props) => props.kindOf === `delete` && `color : ${props.theme.red_C};`}
    ${(props) => props.kindOf === `delete` && `border : 1px solid ${props.theme.red_C};`}
  /* grey */
    ${(props) => props.kindOf === `grey` && `background : ${props.theme.grey_C};`}
    ${(props) => props.kindOf === `grey` && `color : ${props.theme.white_C};`}
    ${(props) => props.kindOf === `grey` && `border : 1px solid ${props.theme.grey_C};`}
    ${(props) => props.kindOf === `grey` && `font-size : 16px;`}

  /* grey2 */
    ${(props) => props.kindOf === `grey2` && `background : ${props.theme.black2_C};`}
    ${(props) => props.kindOf === `grey2` && `color : ${props.theme.grey_C};`}
    ${(props) => props.kindOf === `grey2` && `border : 1px solid ${props.theme.black2_C};`}
    ${(props) => props.kindOf === `grey2` && `font-size : 16px;`}


  /* grey3 */
  ${(props) => props.kindOf === `grey3` && `background : ${props.theme.darkGrey4_C};`}
    ${(props) => props.kindOf === `grey3` && `color : ${props.theme.lightGrey3_C};`}
    ${(props) => props.kindOf === `grey3` && `border : 1px solid ${props.theme.darkGrey4_C};`}
  }

  @media (max-width: 800px) {
    font-size: ${(props) => props.fontSize || `14px`};
  }
`;

export const Text = styled.p`
  overflow: ${(props) => props.overflow};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.dr};
  align-items: ${(props) => props.al};
  justify-content: ${(props) => props.ju};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin || `0`};
  padding: ${(props) => props.padding};
  background: ${(props) => props.bgColor};
  text-align: ${(props) => props.textAlign};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  font-style: ${(props) => props.fontStyle};
  cursor: ${(props) => props.cursor};
  z-index: 1;
  white-space: pre-wrap;
  border-bottom: ${(props) => props.borderBottom};
  opacity: ${(props) => props.opacity};
  letter-spacing: ${(props) => props.letterSpacing};
  font-family: ${(props) => props.fontFamily};

  ${(props) =>
    props.isEllipsis
      ? `
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
      : ``}
`;

export const Image = styled.img`
  display: ${(props) => props.display};
  width: ${(props) => props.width || `100%`};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height || `auto`};
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
  transform: ${(props) => props.transform};
  object-fit: ${(props) => props.objectFit || `cover`};
  position: ${(props) => props.position};
  box-shadow: ${(props) => props.shadow};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  z-index: ${(props) => props.zIndex};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  transition: ${(props) => props.transition || `0.3s`};
`;
