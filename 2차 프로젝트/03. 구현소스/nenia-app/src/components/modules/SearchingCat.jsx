// 검색결과 리스트 컴포넌트
import React from "react";

// CSS불러오기
import "../../css/store_list.scss";


// 라우터돔 Link
import { Link } from "react-router-dom";

function SearchingCat({
  dt,
  highlight,
  viewDetail,
  updateIdx,
  selItem,
  setSearchTerm,
}) {
  // dt - 검색된 배열데이터
  // highlight - 하이라이트

  // total - 검색된 배열데이터 개수
  const total = dt.length;
  // console.log("데이터수:", total);

  /////////코드리턴구역////////////////
  return (
    <>
      {
        // 데이터 개수가 0이 아닐때 출력
        total > 0 && (
          <ul className="clist">
            {dt.map((v, i) => (
              <li key={i}>
                <Link
                  to={v.updateIdx}
                  /* state로 3가지 값을 넘겨준다! */
                  state={{
                    category: v.category, // 제품 카테고리명
                  }}
                >
                  {/* 검색결과 출력(검색어는 하이라이트 처리) */}
                  <>
                  <form name="fboardlist" id="fboardlist">
                  <ul className="board_newgallery">
                    <li key={i} className={v.category}>
                      <div className="image">
                        <a
                          href="#"
                          onClick={(e) => {
                            // a요소 기본이동막기
                            e.preventDefault();
                            // 상태변수 viewList 업데이트
                            // setViewList메서드가 viewDetail로 들어옴
                            viewDetail(false);
                            // setIdx메서드가 updateIdx로 들어옴
                            updateIdx(i);
                          }}
                          style={{
                            backgroundImage: `url(${v.isrc})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            width: "100%",
                            height: "227.5px",
                            display: "block",
                          }}
                        ></a>
                        <span>{v.catname}</span>
                      </div>
                      <a
                        href="#"
                        onClick={(e) => {
                          // a요소 기본이동막기
                          e.preventDefault();
                          // 상태변수 viewList 업데이트
                          // setViewList메서드가 viewDetail로 들어옴
                          viewDetail(false);
                          // setIdx메서드가 updateIdx로 들어옴
                          updateIdx(i);
                        }}
                      >
                        <dl className="info">
                          <dt className="subject">
                            <span className="font-6">{v.tit}</span>
                          </dt>
                          <dd className="content font-7 nanum">
                            {v.disprice}원
                          </dd>
                        </dl>
                      </a>
                    </li>
                    </ul>
                    </form>
                  </>
                </Link>
              </li>
            ))}
          </ul>
        )
      }
      {
        // 선택데이터가 0개이면 아래 출력
        total == 0 && (
          <h2 style={{ textAlign: "center" }}>검색어가 없습니다.</h2>
        )
      }
    </>
  );
}

export default SearchingCat;
