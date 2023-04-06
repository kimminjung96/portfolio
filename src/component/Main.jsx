import { Btn, Image, LayOut, Text, Wrapper } from "../common/style";
import useWidth from "../common/useWidth";
import styled from "styled-components";

const MainWrapper = styled(Wrapper)`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -50px;
    left: 10%;
    z-index: -10;
    display: block;
    width: 30%;
    height: 100%;
    background: url("/images/main1.png") no-repeat;
    background-size: contain;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 0%;
    z-index: -10;
    display: block;
    width: 50%;
    height: 100%;
    background: url("/images/main2.png") 0% 100% / contain no-repeat;
  }
`;
const Slogan = styled.h2`
  width: auto;
  font-size: 80px;
  line-height: 1.5;
  letter-spacing: -1.5px;
  font-weight: 500;
  margin: 0;
  color: #27272e;
  font-family: "D2Coding";
  text: #27272e;
  text-align: left;
  > span {
    margin-right: 20px;
  }
  > span.font96 {
    font-size: 96px;
  }
  @media (max-width: 800px) {
    font-size: 40px;
  }
`;
const SubSlogan = styled(Slogan)`
  font-size: 50px;
  line-height: 1.4;
  letter-spacing: -2px;
  margin-bottom: 60px;

  @media (max-width: 800px) {
    font-size: 24px;
  }
`;
const Title = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #c75c6f;
  text-align: left;
  letter-spacing: 0.1em;
  font-family: D2Coding;
`;

const Main = () => {
  const width = useWidth();
  return (
    <>
      {/* <Slogan>npm install 김민정</Slogan> */}
      {/* <SubSlogan>김민정을 install하면 일이 편안합니다!</SubSlogan> */}
      {/* <Slogan>Npm run 김민정</Slogan>
            <SubSlogan>start준비가 된 신입프론트엔드</SubSlogan> */}
      {/* <SubSlogan>어떤 프로젝트에도 사용가능한 라이브러리 김민정입니다.</SubSlogan> */}
      <MainWrapper>
        <LayOut>
          <Wrapper dr={`row`} ju={width < 700 ? `center` : "space-between"}>
            <Wrapper al={width < 700 ? `center` : `left`} width={width < 700 ? `100%` : `auto`}>
              <Title>npm i minjung</Title>
              <Slogan>
                <span className="font96">Npm</span>
                <span className="font96">run</span>
                <span>김민정</span>
              </Slogan>
              <SubSlogan>start준비가 된 신입프론트엔드</SubSlogan>
              <Wrapper dr={`row`} ju={`flex-start`}>
                <Btn bgColor={`#5956e9`} color={`#fff`} margin={`0 10px`}>
                  <Text>이력서 다운로드</Text>
                </Btn>
                <Btn bgColor={`#5956e9`} color={`#fff`} margin={`0 10px`}>
                  <Text>github 바로가기</Text>
                </Btn>
              </Wrapper>
            </Wrapper>
            <Wrapper width={width < 700 ? `50%` : `30%`}>
              <Image src="/images/minjung.png" alt="나의 프로필 사진" />
            </Wrapper>
          </Wrapper>
        </LayOut>
      </MainWrapper>
    </>
  );
};

export default Main;
