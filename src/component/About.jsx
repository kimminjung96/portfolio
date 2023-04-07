import { Image, LayOut, SectionTitle, SectionWrap, SubTitle, Text, Title, Wrapper } from "../common/style";
import useWidth from "../common/useWidth";

const About = () => {
  const width = useWidth();
  return (
    <>
      <Wrapper>
        <LayOut>
          <SectionWrap>
            <Title>npm install 민정</Title>
            <SectionTitle>About Me</SectionTitle>
            <SubTitle>
              저를 사용해주세요!
              <br />
              어떤 프로젝트에도 사용가능한 라이브러리 김민정입니다.
            </SubTitle>

            <Wrapper dr={`row`} ju={`space-between`}>
              <Wrapper width={width < 900 ? `100%` : `30%`} padding={`50px 20px 30px`} height={`300px`}>
                <Image src="" alt="프로필사진" padding={`50px 0 30px`} />
              </Wrapper>
              <Wrapper width={width < 900 ? `100%` : `30%`} padding={`50px 20px 30px`} height={`300px`}>
                {/*  <Text width={`100%`} textAlign={`left`}>
                  Information
                </Text> */}
                <Text width={`100%`} textAlign={`left`}>
                  Name : 김민정
                </Text>
                <Text width={`100%`} textAlign={`left`}>
                  Address : 경기도 부천시
                </Text>
                <Text width={`100%`} textAlign={`left`}>
                  GitHub : github.com/kimminjung96
                </Text>
                <Text width={`100%`} textAlign={`left`}>
                  Birth : 1996.11.04 부천시
                </Text>
                <Text width={`100%`} textAlign={`left`}>
                  Email : dds13462@gmail.com
                </Text>
                <Text width={`100%`} textAlign={`left`}>
                  Phone : 010.6530.1591
                </Text>
              </Wrapper>
              <Wrapper width={width < 900 ? `100%` : `30%`} padding={`50px 20px 30px`} height={`300px`}>
                <Text width={`100%`} textAlign={`left`}>
                  Education :
                </Text>
                <Text width={`100%`} textAlign={`left`}>
                  Programs :
                </Text>
              </Wrapper>
            </Wrapper>
          </SectionWrap>
        </LayOut>
      </Wrapper>
    </>
  );
};

export default About;
