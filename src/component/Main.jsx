import { Btn, LayOut, Slogan, SubSlogan, Wrapper } from "../common/style";
import Header from "../common/Header";

const Main = () => {
  return (
    <>
      <Header></Header>
      <LayOut>
        <Wrapper ju="space-between">
          <div>
            {/* <Slogan>Npm run 김민정</Slogan>
            <SubSlogan>start준비가 된 신입프론트엔드</SubSlogan> */}
            <Slogan>npm install 김민정</Slogan>
            <SubSlogan>어떤 프로젝트에도 사용가능한 라이브러리 김민정입니다.</SubSlogan>
            {/* <SubSlogan>김민정을 install하면 일이 편안합니다!</SubSlogan> */}
            <Btn color="#777" /* background="#ffdc60" */> 이력서 </Btn>
            <Btn color="#777" /* background="#ffdc60" */> github </Btn>
          </div>
          <div>
            <img src="/images/minjung.png" alt="나의 프로필 사진" />
          </div>
        </Wrapper>
      </LayOut>
    </>
  );
};

export default Main;
