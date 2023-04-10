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
  cursor: pointer;
  padding: ${(props) => props.padding || `28px 45px`};
  margin: ${(props) => props.margin};
  border: 1px solid lightgray;
  border-radius: ${(props) => props.radius || `20px`};
  font-size: ${(props) => props.fontSize || `16px`};
  font-size: ${(props) => props.fontSize || `16px`};
  line-height: 1;
  color: ${(props) => props.color || props.theme.white_C};
  background-color: ${(props) => props.bgColor || "white"};
  box-shadow: 0 44px 84px -24px #5956e9;
  position: relative;
  overflow: hidden;

  :after {
    content: "";
    width: 300px;
    height: 300px;
    background-color: #2522ba;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(0);
    transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: -1;
  }

  &:hover:after {
    transform: translateY(-50%) translateX(-50%) scale(1);
    z-index: 1;
    opacity: 0.5;
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
    props.Pret
      ? `
      font-family: PretendardRegular;`
      : `font-family : D2Coding;`}
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
  object-position: ${(props) => props.objPosition || `0 0`};
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
  transform: ${(props) => props.transform};
`;

export const Title = styled.p`
  margin: 0 0 15px;
  font-size: 20px;
  font-weight: 700;
  color: #c75c6f;
  text-align: left;
  letter-spacing: 0.1em;
  font-family: D2Coding;
  width: 100%;
`;
export const SubTitle = styled.p`
  margin: 0 0 30px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
  color: #525260;
  text-align: left;
  letter-spacing: 0.1em;
  font-family: D2Coding;
  width: 100%;
`;
export const SectionTitle = styled.h3`
  width: 100%;
  margin: 0;
  font-size: 64px;
  font-weight: 500;
  color: #292930;
  text-align: left;
  letter-spacing: -0.025em;
  line-height: 1.2;
  font-family: D2Coding;
  margin: 0 0 30px;
`;

export const SectionWrap = styled(Wrapper)`
  padding: 120px 0;
`;
