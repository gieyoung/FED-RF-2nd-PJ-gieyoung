import React, { useState } from "react";
import SubIntro from "../modules/SubIntro.jsx";
import { Link } from "react-router-dom";
// 스토어 카테고리 데이터 불러오기
import { storeCat } from "../data/store_cat.js";

// CSS 불러오기
import "../../css/store.scss";

function Store(props) {
  const [selectedCategory, setSelectedCategory] = useState(storeCat[0].catname);

  const handleCategoryClick = (catname) => {
    setSelectedCategory(catname);
  };

  // 필터링된 아이템 리스트
  const filteredItems = storeCat.filter(cat => cat.catname === selectedCategory);

  return (
    // 전체 감싸는 박스
    <div className="sub-wrap store-wrap">
      {/* 서브인트로 모듈 */}
      <SubIntro catName="store" />

      <div className="total_board_list_wrap">
        <div className="inner">
          <div className="board_category_tab">
            <nav id="bo_cate">
              <h2>네니아이야기 카테고리</h2>
              {/* 카테고리 영역 */}
              <ul id="bo_cate_ul">
                {/* 데이터 배열로 만들기 */}
                {storeCat.map((v, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handleCategoryClick(v.catname)}
                      className={`${v.clsname} ${selectedCategory === v.catname ? 'green' : ''}`.trim()}
                    >
                      {v.catname}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* <!-- 제목 --> */}
          <form name="fboardlist" id="fboardlist" action="http://www.nenia.kr/bbs/board_list_update.php" method="post">
            <input type="hidden" name="bo_table" value="31" />
            <input type="hidden" name="sfl" value="" />
            <input type="hidden" name="stx" value="" />
            <input type="hidden" name="spt" value="-36" />
            <input type="hidden" name="sca" value="보도자료" />
            <input type="hidden" name="page" value="1" />
            <input type="hidden" name="sw" value="" />
            <input type="hidden" name="btn_submit" id="btn_submit" value="" />

            <ul className="board_newgallery">
              {filteredItems.map((v, i) => (
                <li key={i}>
                  <a
                    href={v.link}
                    style={{
                      backgroundImage: "url('http://www.nenia.kr/data/file/31/3696084091_fBDOFuAh_cd0ab3b23b348c27a67244eb317b72014903ff0d.jpg')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "100%",
                      height: "227.5px",
                      display: "block",
                    }}
                  ></a>
                </li>
              ))}
            </ul>
          </form>

          <div className="board_button">{/* <!-- <a href="http://www.nenia.kr/31">목록</a> -->  */}</div>
        </div>
      </div>
    </div>
  );
}

export default Store;