import React, { useContext, useEffect, useState } from "react";
import { dCon } from "../modules/dCon";

// 카트 리스트 CSS
import "../../css/cart_list.scss";
import { addComma } from "../func/common_fn";

// 제이쿼리
import $ from "jquery";
import { useNavigate } from "react-router-dom";

function CartList({ loginSts }) {
  const goNav = useNavigate();

  // 강제 리랜더링을 위한 상태변수
  const [force, setForce] = useState(false);
  // -> 불린값을 넣어놓고 강제 리랜더링이 필요한 경우
  // setForce(!force) -> 기존 불린값을 반대로 넣어준다

  // 컨텍스트 사용
  const myCon = useContext(dCon);

  // 로컬스 데이터 가져오기
  let selData = JSON.parse(localStorage.getItem("cart-data" + myCon.addUid()));
  if (!selData) selData = [];
  console.log("로컬스:", selData);

  // 전체 데이터 개수
  const dataCnt = selData.length;
  console.log("데이터수:", dataCnt);

  // 총합계함수 /////////////
  const totalFn = () => {
    // 합계금액은 모든 합계 히든필드 값을 더한다!
    // 제이쿼리 forEach는 each((순번,요소)=>{}) 메서드다!

    let result = 0;

    $(".sum-num2").each((idx, ele) => {
      // console.log("값:", $(ele).val());
      // 숫자로 변환후 기존값에 더하기함!
      result += Number($(ele).val());
    });

    // 호출한 곳에 합계리턴
    return result;
  }; ////////// totalFn ///////////

  // 화면랜더링 구역 : dataCnt, force의존성 /////////
  useEffect(() => {
    // 총합계 찍기 : 3자리마다 콤마함수호출도함
    $(".total-num").text(addComma(totalFn()));
  }, [dataCnt, force]); //-> 숫자값은 값할당이므로 변함없음!
  // 의존성 추가 -> 강제 리랜더링 상태변수도 등록해준다.
  // },[selData]); //-> 리랜더링시 객체주소값이 변경되어
  // 매번 새로운값이 업데이트 되기때문에 부적격임!

  // 클릭 시 idx 값을 출력하는 함수
  const ItemClick = (idx) => {
    console.log("클릭된 상품의 idx:", idx);
    // 필요한 추가 작업을 여기에 추가
  };

  // 화면랜더링 구역 : 한번만 /////////////
  // useEffect(()=>{
  // },[]); /////// useEffect /////////////

  ///// 코드리턴구역 /////////////
  return (
    <>
      <section id="cartlist">
        <div className="inbox">
          <div className="con_wrap">
            <table>
              {/* 테이블 제목 */}
              <caption>
                <h1> 장바구니</h1>
              </caption>
              {/* 테이블 상단영역 : 분류항목 출력 */}
              <thead>
                <tr>
                  <th style={{ width: "5%" }}>번호</th>
                  <th style={{ width: "10%" }}>품목</th>
                  <th style={{ width: "20%" }}>이미지</th>
                  <th style={{ width: "25%" }}>상품명</th>
                  <th style={{ width: "10%" }}>단가</th>
                  <th style={{ width: "15%" }}>수량</th>
                  <th style={{ width: "10%" }}>총액</th>
                  <th style={{ width: "5%" }}>삭제</th>
                </tr>
              </thead>
              {/* 테이블 메인영역 */}
              <tbody>
                {/* 카트데이터 연동파트
                **************************
                  [데이터 구조정의]
                        1. idx : 상품고유번호
                        2. cat : 카테고리
                        3. gtit : 상품명
                        4. cnt : 상품개수
                        5. price : 가격
                        6. img: 이미지
                **************************
              */}
                {selData.map((v, i) => (
                  <tr key={i}>
                    {/* 번호 */}
                    <td style={{ width: "5%" }}>{i + 1}</td>
                    {/* 카테고리 */}
                    <td style={{ width: "10%" }}>{v.cat}</td>
                    {/* 상품이미지 */}
                    <td style={{ width: "20%" }}>
                      <a
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          ItemClick(v.idx); // idx 값 전달
                          // 상세페이지의 상품 컨텍스트 변수 변경
                          myCon.setIdx(Number(v.idx) - 1);
                          // 상세페이지 보기 상태값 변경
                          myCon.setViewList(false);
                          goNav("/store");
                        }}
                      >
                        <img src={process.env.PUBLIC_URL+v.img} alt="item" />
                      </a>
                    </td>
                    {/* 상품명 */}
                    <td style={{ width: "25%" }}>
                      <a
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          ItemClick(v.idx); // idx 값 전달
                          // 상세페이지의 상품 컨텍스트 변수 변경
                          myCon.setIdx(Number(v.idx) - 1);
                          // 상세페이지 보기 상태값 변경
                          myCon.setViewList(false);
                          goNav("/store");
                        }}
                      >
                        {v.gtit}
                      </a>
                    </td>
                    {/* 단가 */}
                    <td style={{ width: "10%" }}>{v.price}원</td>
                    {/* 수량 */}
                    <td className="cnt-part" style={{ width: "15%" }}>
                      <div>
                        <span>
                          <input
                            type="text"
                            className="item-cnt"
                            readOnly
                            defaultValue={v.cnt}
                            onBlur={() => {
                              console.log("ㅎㅎㅎ");
                            }}
                          />

                          <b
                            className="btn-cnt"
                            onClick={(e) => {
                              // 업데이트 대상(input박스)
                              let tg = $(e.currentTarget).siblings("input");

                              // 입력창의 blur이벤트 발생을 위해
                              // 강제로 포커스를 준다!
                              // tg.focus();

                              // 하위 클릭된 이미지 종류파악하기
                              // e.target으로 설정하여 하위요소인
                              // 이미지가 선택되게 해준다!
                              // e.currentTarget은 이벤트가 걸린
                              // 요소 자신이다!(비교할것!)
                              let btnAlt = $(e.target).attr("alt");
                              console.log(btnAlt);
                              // 증가감소 분기하여 숫자변경반영하기
                              if (btnAlt == "증가") {
                                // tg값을 읽어와서 1을 더한다!
                                tg.val(Number(tg.val()) + 1);
                              } //// if ///////
                              else if (btnAlt == "감소") {
                                // tg값을 읽어와서 1을 뺀다!
                                // 단, 1보다 작아지지 않게 한다!
                                tg.val(Number(tg.val()) == 1 ? 1 : Number(tg.val()) - 1);
                              } ///// else if ////////

                              // 클릭시 반영, 취소 버튼 나타나기
                              $(e.currentTarget)
                                .siblings(".btn-insert")
                                // .css({ width: "auto" })

                                .next(); // 취소버튼
                              // .css({ width: "auto" });
                            }}
                          >
                            <img src={process.env.PUBLIC_URL + "/images/cnt_up.png"} alt="증가" />
                            <img src={process.env.PUBLIC_URL + "/images/cnt_down.png"} alt="감소" />
                          </b>
                          {/* 반영버튼 */}
                          <button
                            className="btn-insert"
                            onClick={(e) => {
                              /// 1. 클릭시 실제 데이터 수량변경 반영하기
                              // 대상: selData -> 배열변환데이터
                              // i는 배열순번임!(map 돌때 i가 들어옴)
                              selData[i].cnt = $(e.currentTarget).siblings(".item-cnt").val();
                              console.log("수량업데이트:", selData);
                              // 2. 데이터 문자화하기 : 변경된 원본을 문자화
                              let res = JSON.stringify(selData);

                              // 3.로컬스 "cart-data"반영하기
                              // localStorage.setItem("cart-data", res);
                              localStorage.setItem("cart-data" + myCon.addUid(), res);

                              // 4. 카트리스트 전역상태변수 변경
                              myCon.setLocalsCart(res);

                              // -> 아래 6번은 리랜더링 되면 해결됨
                              // 그리고 데이터변경 sync가 맞지 않는 경우가 생기게 됨
                              // 데이터를 변경했음에도 리랜더링이 안된 이유는
                              // 배열의 객체값이 변경되거나 배열 순서를 변경한 경우
                              // 배열이 변경되었다고 체크되지 않는다.
                              // 따라서 이때 강제 리랜더링이 필요하다
                              setForce(!force);

                              // 5. 반영버튼 숨기기
                              // $(e.currentTarget).css({ width: "0" });

                              // 6. 전체 총합계 계산 다시하기
                              $(".total-num").text(addComma(totalFn()));
                            }}
                          >
                            반영
                          </button>
                          {/* 취소버튼 */}
                          <button
                            className="btn-cancel"
                            onClick={(e) => {
                              $(e.currentTarget)
                                // .css({ width: "0" })
                                .prev() //반영버튼
                                // .css({ width: "auto" })
                                .siblings("input")
                                .val(v.cnt);
                              //취소버튼 자신의 css를 변경하고 안보이게
                              //형제요소 중 input을 찾아
                              //값으로 기존값인 v.cnt를 넣는다.
                            }}
                          >
                            취소
                          </button>
                        </span>
                      </div>
                    </td>
                    {/* 총액 */}
                    <td style={{ width: "10%" }}>
                      <span className="sum-num1">{addComma(parseInt(v.price[0].replace(/,/g, ""), 10) * v.cnt)}</span>원
                      <input className="sum-num2" type="hidden" defaultValue={parseInt(v.price[0].replace(/,/g, ""), 10) * v.cnt} />
                    </td>
                    {/* 삭제버튼 */}
                    <td style={{ width: "5%" }}>
                      {/* 데이터 삭제기능 버튼 */}
                      <button
                        className="cfn"
                        onClick={() => {
                          // confirm()의 "확인"클릭시 true
                          if (window.confirm("삭제 하시겠습니까?")) {
                            // console.log("삭제함!!!");
                            // console.log("현재객체:",selData);
                            // console.log("지울순번:",i);
                            // // splice 자체를 찍으면 지워진 요소가 찍힘
                            // console.log("지우기:",selData.splice(i,1));

                            // 지울 배열 순번은 map()에서 i로 들어옴
                            // 지울 배열은 selData임
                            // 1.데이터 지우기 :
                            selData.splice(i, 1);

                            // 2. 데이터 문자화하기 : 변경된 원본을 문자화
                            let res = JSON.stringify(selData);

                            // 3.로컬스 "cart-data"반영하기
                            localStorage.setItem("cart-data" + myCon.addUid(), res);

                            // 4. 카트리스트 전역상태변수 변경
                            myCon.setLocalsCart(res);

                            // 5. 데이터개수가 0이면 카트리스트
                            // 상태변수를 false로 변경하여
                            // 카트리스트 출력을 없앤다!
                            if (selData.length == 0) myCon.setCartSts(false);

                            // let aa = [];
                            // aa.splice(지울순번,지울개수)
                          } //// if /////
                        }}
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* 테이블 하단영역 */}
              <tfoot>
                <tr className="total">
                  <td colSpan="8">
                    {dataCnt === 0 ? (
                      "장바구니에 담긴 상품이 없습니다."
                    ) : (
                      <>
                        총 합계 = <span className="total-num"></span>원
                      </>
                    )}
                  </td>
                </tr>
                {/* 구매버튼 */}
                <tr className="go-buy">
                  <td colSpan="8">
                    <button
                      onClick={() => {
                        // 로그인 상태가 null일 때
                        if (loginSts === null) {
                          alert("로그인이 필요한 서비스입니다");
                        }
                        // 로그인 상태일 때
                        else {
                          alert("현재 지원하지 않는 서비스입니다");
                        }
                      }}
                    >
                      구매하기
                    </button>
                    <button
                      onClick={() => {
                        // CartList 페이지로 이동
                        myCon.goPage("/store");
                      
                      }}
                    >
                      쇼핑 계속하기
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartList;
