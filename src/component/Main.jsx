import { Btn, Image, LayOut, Wrapper } from "../common/style";
import useWidth from "../common/useWidth";
import styled from "styled-components";

const MainWrapper = styled(Wrapper)`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -30px;
    z-index: -10;
    display: block;
    width: 40%;
    height: 100%;
    background: url("/images/main1.png") no-repeat;
    background-size: contain;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    right: -15%;
    z-index: -10;
    display: block;
    width: 60%;
    height: 100%;
    background: url("/images/main2.png") 0% 100% / contain no-repeat;
  }
`;
const Slogan = styled.h2`
  font-size: 3rem;
  line-height: 1;
  color: ${(props) => props.color || "#27272e"};
  text: ${(props) => props.color || "#27272e"};
  text-align: ${(props) => props.textA || "left"};
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;

const SubSlogan = styled.h3`
  font-size: 1.5rem;
  line-height: 1;
  color: ${(props) => props.color || "#27272e"};
  text-align: ${(props) => props.textA || "left"};
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

const Main = () => {
  const width = useWidth();
  return (
    <>
      <LayOut>
        <MainWrapper dr={`row`} ju={width < 700 ? `center` : "space-between"}>
          <Wrapper al={width < 700 ? `center` : `left`} width={width < 700 ? `100%` : `60%`}>
            {/* <Slogan>Npm run 김민정</Slogan>
            <SubSlogan>start준비가 된 신입프론트엔드</SubSlogan> */}
            <Slogan>npm install 김민정</Slogan>
            <SubSlogan>어떤 프로젝트에도 사용가능한 라이브러리 김민정입니다.</SubSlogan>
            {/* <SubSlogan>김민정을 install하면 일이 편안합니다!</SubSlogan> */}
            <Wrapper dr={`row`}>
              <Btn> 이력서 </Btn>
              <Btn> github </Btn>
            </Wrapper>
          </Wrapper>
          <Wrapper width={width < 700 ? `50%` : `30%`}>
            <Image src="/images/minjung.png" alt="나의 프로필 사진" />
          </Wrapper>
        </MainWrapper>
      </LayOut>
    </>
  );
};

export default Main;
