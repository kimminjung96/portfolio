import styled from "styled-components";

export const LayOut = styled.div`
  width: ${(props) => props.width || "1200px"};
  margin: ${(props) => props.margin || "0 auto"};
  justify-content: ${(props) => props.ju || "center"};
  align-items: ${(props) => props.al || "center"};
  text-align: ${(props) => props.textA || "center"};
`;

export const Wrapper = styled.div`
  display: ${(props) => props.display || "flex"};
  color: ${(props) => props.color || "gray"};
  justify-content: ${(props) => props.ju || "center"};
  align-items: ${(props) => props.al || "center"};
  text-align: ${(props) => props.textA || "center"};
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

export const Slogan = styled.h2`
  font-size: 3rem;
  line-height: 1;
  color: ${(props) => props.color || "gray"};
  text: ${(props) => props.color || "gray"};
  text-align: ${(props) => props.textA || "left"};
`;
export const SubSlogan = styled.h3`
  font-size: 1.5rem;
  line-height: 1;
  color: ${(props) => props.color || "gray"};
  text-align: ${(props) => props.textA || "left"};
`;
export const Title = styled.h4`
  font-size: 1rem;
  line-height: 1;
  color: ${(props) => props.color || "gray"};
`;
export const Text = styled.p`
  font-size: 16px;
  line-height: 1;
  color: ${(props) => props.color || "gray"};
`;
