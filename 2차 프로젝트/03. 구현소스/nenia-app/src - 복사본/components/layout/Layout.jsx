// 전체 레이아웃 컴포넌트 ///
import { useEffect, useState } from "react";
import FooterArea from "./FooterArea";
import MainArea from "./MainArea";
import TopArea from "./TopArea";
import { useNavigate } from "react-router-dom";
import { dCon } from "../modules/dCon";

export default function Layout() {
  // 로그인관련//////////

  // [ 상태관리 변수 ] //////////////
  // 1. 로그인 상태관리변수
  const [loginSts, setLoginSts] = useState(sessionStorage.getItem("minfo"));
  // -> 초기값으로 세션스토리지 "minfo"를 할당함

  // 2. 로그인 환영 메시지 상태변수
  const [loginMsg, setLoginMsg] = useState(null);
  // console.log(loginMsg);

  // 3. 리스트 / 상세보기 전환용 상태관리변수
  const [viewList, setViewList] = useState(true);

  // 4. 상품 데이터 인덱스값 상태관리변수
  const [idx, setIdx] = useState(0);

  // [ 공통 함수 ] ///
  // 1. 라우팅 이동함수
  const goPage = useNavigate();
  // 2. 로그인 환영메시지 생성함수
  const makeMsg = (name) => {
    // 유저아이콘
    let usrIcon = ["🙍‍♂️", "🧏‍♀️", "🦸‍♂", "👨‍🎤", "🦸‍♀"];
    // 랜덤수 : 0~4사이의 수
    let rdm = Math.floor(Math.random() * 5);
    // 로그인 메시지 상태변수 업데이트
    setLoginMsg(`Welcome ${name} ${usrIcon[rdm]}`);
  };

  //3. 로그아웃 함수
  const logoutFn = () => {
    // 1. 로그인 상태값 null
    setLoginSts(null);

    // 2. 세션스 지우기
    sessionStorage.removeItem("minfo");
    // 3. 로그인 메시지 초기화
    setLoginMsg(null);
    // 4. 장바구니 데이터 초기화
    localStorage.removeItem("cart-data");
    // 4. 메인페이지로 돌아가기
    goPage("/");
  }; //////////logoutFn  

  // 로그인 상태 여부에 따라 이름추가하는 함수
  const addUid = () => loginSts?"-"+JSON.parse(loginSts).uid:'';


  // 화면 랜더링 구역
  // -> 로그인 상태 체크
  useEffect(() => {
    if (sessionStorage.getItem("minfo")) {
      let ss = sessionStorage.getItem("minfo");
      // 로그인상태값
      setLoginSts(ss);
      // 로그인 메시지 업데이트
      makeMsg(JSON.parse(ss).unm);
    }
  }, []);

  // 로컬스 카트 존재여부변수
  let cartTemp = false;

  // [ 로컬스 카트 데이터 상태변수 ] ///
  const [localsCart, setLocalsCart] = useState(
    localStorage.getItem("cart-data"+addUid())
  );

  // 로컬스 카트 데이터 존재여부에 따라 상태값 변경
  if (localsCart) {
    // 데이터가 있으면 cartTemp값 true로 변경
    // 데이터 개수가 0이 아니어야함!
    let cartCnt = JSON.parse(localsCart).length;
    // console.log("카트 데이터수:",cartCnt);
    if (cartCnt > 0) cartTemp = true;
  } //////////// 카트존재여부 if ////////

  // 상태관리 변수 셋팅 ///////
  // 1. 페이지변경 상태변수
  // const [pgName, setPgName] = useState("main");
  // 2. 카트리스트 사용여부 : true 일때 사용
  const [cartSts, setCartSts] = useState(cartTemp);

  /*************************************** 
      [ 컨텍스트 API 공개 변수들 ]
      1. setPgName - 페이지이름 셋팅
      2. setCartSts - 카트 사용여부 셋팅
      3. setLocalsCart - 로컬스 카트 데이터 변경함수
      4. localsCart - 로컬스 카트 데이터 변수    
    ***************************************/

  //// 코드 리턴구역 //////////////
  return (
    <dCon.Provider
      value={{
        loginSts,
        loginMsg,
        setLoginSts,
        setLoginMsg,
        goPage,
        makeMsg,
        logoutFn,
        setCartSts,
        setLocalsCart,
        localsCart,
        viewList,
        setViewList,
        idx,
        setIdx,
        addUid,
      }}
    >
      {/* 1.상단영역 */}
      <TopArea
        loginMsg={loginMsg}
        loginSts={loginSts}
        logoutFn={logoutFn}
        goPage={goPage}
      />
      {/* 2.메인영역 */}
      <MainArea />
      {/* 3.하단영역 */}
      <FooterArea />
    </dCon.Provider>
  );
} /////////// Layout /////////////////////
