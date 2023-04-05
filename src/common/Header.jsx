import styled from "styled-components";
import { Btn, Image, LayOut, Text, Wrapper } from "./style";

const HeadBtn = styled.p`
  border: none;
  background-color: #fff;
  &:hover {
    color: red;
  }
`;

const Header = () => {
  return (
    <>
      <LayOut>
        <Wrapper dr={`row`} ju={`space-between`}>
          <Image width={`auto`} src="" alt="로고" />
          <Wrapper dr={`row`} width={`auto`}>
            <HeadBtn>HOME</HeadBtn>
            <HeadBtn>ABOUT</HeadBtn>
            <HeadBtn>SKILLS</HeadBtn>
            <HeadBtn>PROJECT</HeadBtn>
            <HeadBtn>CONTACT</HeadBtn>
          </Wrapper>
        </Wrapper>
      </LayOut>
    </>
  );
};

export default Header;
