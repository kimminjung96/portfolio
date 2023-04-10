import { Btn, Image, LayOut, Text, Title, Wrapper } from "../common/style";
import useWidth from "../common/useWidth";
import styled from "styled-components";

const MainWrapper = styled(Wrapper)`
  position: relative;
  padding: 120px 0;

  &:before {
    content: "";
    position: absolute;
    top: -50px;
    left: 10%;
    z-index: -10;
    display: block;
    width: 30%;
    height: 100%;
    background: url("/images/bg/main1.png") no-repeat;
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
    background: url("/images/bg/main2.png") 0% 100% / contain no-repeat;
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
            <Wrapper
              al={width < 700 ? `center` : `left`}
              width={width < 700 ? `100%` : `auto`}
            >
              <Title>npm i minjung</Title>
              <Slogan>
                <Text
                  display={`inline-block`}
                  fontSize={`96px`}
                  className="font96"
                >
                  Npm
                </Text>
                <Text
                  display={`inline-block`}
                  fontSize={`96px`}
                  className="font96"
                >
                  run
                </Text>
                <Text display={`inline-block`} Pret={true}>
                  김민정
                </Text>
              </Slogan>
              <SubSlogan>start준비가 된 frontend</SubSlogan>
              <Wrapper dr={`row`} ju={`flex-start`}>
                <Btn bgColor={`#5956e9`} color={`#fff`} margin={`0 10px`}>
                  <Text Pret={true}>이력서 다운로드</Text>
                </Btn>
                <Btn bgColor={`#5956e9`} color={`#fff`} margin={`0 10px`}>
                  <Text>github 바로가기</Text>
                </Btn>
              </Wrapper>
            </Wrapper>
            <Wrapper
              width={width < 700 ? `50%` : `40%`}
              height={`700px`}
              overflow={`hidden`}
              bgColor={`linear-gradient(180deg, pink, white)`}
              radius={`48% 48% 0 0`}
            >
              <Image
                src="/images/my/min.png"
                alt="나의 프로필 사진"
                transform={`rotateY(180deg)`}
                objPosition={`60px 540px`}
              />
            </Wrapper>
          </Wrapper>
        </LayOut>
      </MainWrapper>
    </>
  );
};

export default Main;
