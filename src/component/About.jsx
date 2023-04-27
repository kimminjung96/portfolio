import { Image, LayOut, SectionTitle, SectionWrap, SubTitle, Text, Title, Wrapper } from "../common/style";
import useWidth from "../common/useWidth";
import { Fade, Slide } from "react-awesome-reveal";

const icon = ["1html2.png", "1css2.png", "1scss.png", "1js.png", "1bootstrap.png", "1jquery2.png", "1react.png", "1vue3.png", "1node.png", "1php2.png", "1sqlite.png", "1ps.png", "1ai.png", "1xd.png", "1figma.png"];

const About = () => {
  const width = useWidth();
  return (
    <>
      <Wrapper>
        <LayOut>
          <SectionWrap>
            <Title>npm 민정 help</Title>
            <SectionTitle>About Me</SectionTitle>
            <Wrapper dr={`row`} ju={`space-between`} al={`flex-start`} position={`relative`}>
              <Slide>
                <SubTitle>
                  제가 궁금하시다고요?
                  <br />
                  어떤 프로젝트에도 사용가능한 라이브러리 김민정입니다.
                </SubTitle>
              </Slide>
              <Wrapper position={`absolute`} width={`120px`} height={`120px`} bgColor={`pink`} left={`60%`} bottom={`100%`} radius={`50%`} />
              <Wrapper width={`24%`} overflow={`hidden`} position={`absolute`} bottom={`-20%`} left={`45%`}>
                <Image src="images/my/ming.gif" alt="" oj />
              </Wrapper>
            </Wrapper>

            <Wrapper dr={`row`} ju={`space-between`}>
              <Wrapper width={width < 900 ? `100%` : `30%`} ju={`flex-start`} padding={`50px 20px 30px`} height={`300px`} overflow={`hidden`}>
                {/* Information */}
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
              <Wrapper width={width < 900 ? `100%` : `30%`} ju={`flex-start`} padding={`50px 20px 30px`} height={`300px`}>
                <Text width={`100%`} textAlign={`left`}>
                  Education : 2022.11~2023.05 그린컴퓨터아카데미 - 프로젝트기반 프론트엔드 &#40;React,Vue&#41; 웹&앱 SW개발자 양성과정 수료
                  <br />
                  2021.06~2021.12 &#40;디지털디자인&#41; 그린컴퓨터아카데미 - 영상을 활용한 웹디자인&웹퍼블리셔 양성과정 수료
                </Text>
                <Text width={`100%`} textAlign={`left`}>
                  Experience : 2022.06~2022.09 4leaf software 웹퍼블리셔
                  <br />
                  2019.01~ 2020.01 Holiday Inn Hotel F&B
                </Text>
              </Wrapper>
              <Wrapper width={width < 900 ? `100%` : `30%`} ju={`flex-start`} padding={`50px 20px 30px`} height={`300px`}>
                <Text width={`100%`} textAlign={`left`}>
                  Programs
                </Text>
                <Wrapper dr={`row`} ju={`flex-start`}>
                  {icon.map((data, idx) => {
                    console.log(data);
                    return (
                      <Wrapper key={idx} width={`48px`} margin={`10px`}>
                        <Image src={`/images/icon/${data}`} />
                      </Wrapper>
                    );
                  })}
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </SectionWrap>
        </LayOut>
      </Wrapper>
    </>
  );
};

export default About;
