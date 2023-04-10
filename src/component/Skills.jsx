import { useState } from "react";
import styled from "styled-components";
import { LayOut, SectionTitle, Title, Wrapper } from "../common/style";

const progressBar = [
  {
    name: "HTML",
    percent: "95%",
  },
  {
    name: "HTML",
    percent: "85%",
  },
  {
    name: "HTML",
    percent: "65%",
  },
];

const Container = styled.div`
  margin: 50px auto;
  background-color: #eee;
  width: 500px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;
const Progress = styled.div`
  background-color: blue;
  width: ${(props) => props.width};
  height: 100%;
  transition: width 1s;
  border-radius: 20px;
`;

//프로그레스 바에 원 달아서 프로그레스 바가 차오를 때 같이 차오름
const Dot = styled.div`
  width: 70px;
  height: 70px;
  box-sizing: border-box;
  border: 10px solid blue;
  border-radius: 35px;
  background: yellow;
  margin-left: -35px;
`;

const Skills = () => {
  const [count, setCount] = useState(0);

  const countProgress = () => {
    if (count === 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <Wrapper>
      <LayOut>
        <Title>npm ls</Title>
        <SectionTitle>Skills</SectionTitle>

        {progressBar &&
          progressBar.map((data, idx) => {
            console.log(data);
            return (
              <Container key={idx}>
                <Progress width={`${data.percent}`}>{data.name}</Progress>
              </Container>
            );
          })}
      </LayOut>
    </Wrapper>
  );
};

export default Skills;
