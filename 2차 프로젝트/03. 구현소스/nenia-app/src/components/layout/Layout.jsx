// 전체 레이아웃 컴포넌트 ///

import { useEffect } from "react";
import FooterArea from "./FooterArea";
import MainArea from "./MainArea";
import TopArea from "./TopArea";

export default function Layout(){

    // 새로고침하면 상단이동(이거 적용하면 가로스크롤이 튀어서 주석-나중에 해결필요)
    // useEffect(()=>{
    //     window.scrollTo(0,0);
    // },[]);

    //// 코드 리턴구역 //////////////
    return(
        <>
           {/* 1.상단영역 */}
           <TopArea />
           {/* 2.메인영역 */}
           <MainArea />
           {/* 3.하단영역 */}
           <FooterArea />
        </>
    );

} /////////// Layout /////////////////////