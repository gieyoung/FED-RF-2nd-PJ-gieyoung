export interface ItemInfo {
  id: string;
  imgSrc: string;
  name: string;
  type: Array<string>;
  option: Array<string>;
  category: string;
  price: string;
  sale: string | null;
  iconContent: Array<string> | null;
  descMain: string | null;
  descSub: string | null;
}

export const itemInfo: Array<ItemInfo> = [
  {
    id: "1",
    imgSrc: "/images/woman/woman1.jpg",
    name: "V업 3D 플러스 레깅스 1+1",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "78000",
    sale: "29800",
    iconContent: ["~3XL", "주문폭주"],
    descMain: "[20컬러] 누적판매 500만",
    descSub: "#국민레깅스 1위",
  },
  {
    id: "2",
    imgSrc: "/images/woman/woman2.jpg",
    name: "블랙라벨 시그니처 360N 레깅스 1+1",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "98000",
    sale: "48800",
    iconContent: ["~3XL", "주문폭주"],
    descMain: "누적판매 270만",
    descSub: "#360N 시리즈 #쫀득 텍스처",
  },
  {
    id: "3",
    imgSrc: "/images/woman/woman3.jpg",
    name: "블랙라벨 시그니처 380N 레깅스 1+1",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "118000",
    sale: "49800",
    iconContent: ["~2XL", "주문폭주"],
    descMain: "디스패치 선정 셀럽 선호 레깅스 1위",
    descSub: "#누적판매 100만",
  },
  {
    id: "4",
    imgSrc: "/images/woman/woman4.jpg",
    name: "젤라 인텐션 기모 와이드 레깅스 1+1",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "118000",
    sale: "68800",
    iconContent: ["~2XL", "신상"],
    descMain: "9부 or 10부 교차선택 가능",
    descSub: null,
  },
  {
    id: "5",
    imgSrc: "/images/woman/woman5.jpg",
    name: "블랙라벨 시그니처 360N 더블플러피 기모 레깅스 1+1",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "108000",
    sale: "48800",
    iconContent: ["~3XL"],
    descMain: "차원이 다른 프리미엄 라벨",
    descSub: "#기모 레깅스 판매 1위",
  },
  {
    id: "6",
    imgSrc: "/images/woman/woman6.jpg",
    name: "젤라 인텐션 부츠컷 팬츠 1+1",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "88000",
    sale: "42800",
    iconContent: ["~3XL", "이벤트특가"],
    descMain: "[11/14(화) 10AM까지 선착순특가]",
    descSub: "기본 or 트임 디자인 교차선택 가능",
  },
  {
    id: "7",
    imgSrc: "/images/woman/woman7.jpg",
    name: "멜팅 터치 릴랙스 부츠컷 팬츠 1+1",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "108000",
    sale: "73800",
    iconContent: ["신상"],
    descMain: null,
    descSub: "9부 or 10부 교차선택 가능",
  },
  {
    id: "8",
    imgSrc: "/images/woman/woman8.jpg",
    name: "[전문가용] 블랙라벨 380N SET",
    type: ["top", "bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "98000",
    sale: "52800",
    iconContent: ["~2XL"],
    descMain: "[브라탑+레깅스 셋업]",
    descSub: "고강도 퍼포먼스 최적화",
  },
  {
    id: "9",
    imgSrc: "/images/woman/woman9.jpg",
    name: "블랙라벨 시그니처 360N 레깅스 4.5부 1+1",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "84000",
    sale: "38800",
    iconContent: ["~2XL", "주문폭주"],
    descMain: "차원이 다른 프리미엄 라벨",
    descSub: "#기모 레깅스 판매 1위",
  },
  {
    id: "10",
    imgSrc: "/images/woman/woman10.jpg",
    name: "블랙라벨 시그니처 360N 로고 밴딩 SET",
    type: ["top", "bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "90000",
    sale: "56800",
    iconContent: ["~2XL", "주문폭주"],
    descMain: "누적판매 270만",
    descSub: "#360N 시리즈",
  },
  {
    id: "11",
    imgSrc: "/images/woman/woman11.jpg",
    name: "아이스페더 컴포트 숏슬리브 1+1",
    type: ["top"],
    option: ["S", "M", "L", "XL"],
    category: "WOMENS",
    price: "58000",
    sale: "26800",
    iconContent: ["주문폭주"],
    descMain: "누적판매 320만",
    descSub: "레귤러핏 아이스페더",
  },
  {
    id: "12",
    imgSrc: "/images/woman/woman12.jpg",
    name: "에어센트 숏슬리브 1+1",
    type: ["top"],
    option: ["S", "M", "L", "XL"],
    category: "WOMENS",
    price: "52000",
    sale: "22800",
    iconContent: ["주문폭주"],
    descMain: "누적판매 46만",
    descSub: "#흡한속건 #쿨링",
  },
  {
    id: "13",
    imgSrc: "/images/woman/woman13.jpg",
    name: "필리퍼 오버핏 티셔츠 1+1",
    type: ["top"],
    option: ["S", "M", "L", "XL"],
    category: "WOMENS",
    price: "52000",
    sale: "39800",
    iconContent: ["주문폭주"],
    descMain: "누적판매 32만",
    descSub: "#오버핏 티셔츠 판매 1위",
  },
  {
    id: "14",
    imgSrc: "/images/woman/woman14.jpg",
    name: "헤바 크롭탑 1+1",
    type: ["top"],
    option: ["S", "M", "L", "XL"],
    category: "WOMENS",
    price: "42000",
    sale: "29800",
    iconContent: ["주문폭주"],
    descMain: "젝시믹스 No.1 크롭탑",
    descSub: "#국민크롭탑",
  },
  {
    id: "15",
    imgSrc: "/images/woman/woman15.jpg",
    name: "젤라라이트 라운드 슬리브리스 1+1",
    type: ["top"],
    option: ["S", "M", "L", "XL"],
    category: "WOMENS",
    price: "56000",
    sale: "22800",
    iconContent: null,
    descMain: null,
    descSub: null,
  },
  {
    id: "16",
    imgSrc: "/images/woman/woman16.jpg",
    name: "필리퍼 오버핏 티셔츠 블랙",
    type: ["top"],
    option: ["S", "M", "L", "XL"],
    category: "WOMENS",
    price: "42000",
    sale: "29800",
    iconContent: null,
    descMain: "누적판매 32만",
    descSub: "#오버핏 티셔츠 판매 1위",
  },
  {
    id: "17",
    imgSrc: "/images/woman/woman17.jpg",
    name: "필리퍼 오버핏 티셔츠 피치크림",
    type: ["top"],
    option: ["S", "M", "L", "XL"],
    category: "WOMENS",
    price: "26000",
    sale: "22000",
    iconContent: null,
    descMain: "누적판매 32만",
    descSub: "#오버핏 티셔츠 판매 1위",
  },
  {
    id: "18",
    imgSrc: "/images/woman/woman18.jpg",
    name: "XXMX 세미 루즈핏 티셔츠 1+1",
    type: ["top"],
    option: ["S", "M", "L", "XL"],
    category: "WOMENS",
    price: "26000",
    sale: "22000",
    iconContent: null,
    descMain: "누적판매 32만",
    descSub: "#오버핏 티셔츠 판매 1위",
  },
  {
    id: "19",
    imgSrc: "/images/woman/woman19.jpg",
    name: "헤바 크롭탑 블랙",
    type: ["top"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "26000",
    sale: "22000",
    iconContent: null,
    descMain: "젝시믹스 No.1 크롭탑",
    descSub: "#국민크롭탑",
  },
  {
    id: "20",
    imgSrc: "/images/woman/woman20.jpg",
    name: "스파키 숏슬리브 백아이보리",
    type: ["top"],
    option: ["S", "M", "L", "XL"],
    category: "WOMENS",
    price: "19000",
    sale: "16000",
    iconContent: null,
    descMain: null,
    descSub: null,
  },
  {
    id: "21",
    imgSrc: "/images/woman/woman21.jpg",
    name: "프레쉬페더 트위스트 크롭 숏슬리브 블랙",
    type: ["top"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "28000",
    sale: "14000",
    iconContent: null,
    descMain: null,
    descSub: null,
  },
  {
    id: "22",
    imgSrc: "/images/woman/woman22.jpg",
    name: "프레쉬페더 트위스트 크롭 숏슬리브 백아이보리",
    type: ["top"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "28000",
    sale: "14000",
    iconContent: null,
    descMain: null,
    descSub: null,
  },
  {
    id: "23",
    imgSrc: "/images/woman/woman23.jpg",
    name: "언밸런스 트임 숏슬리브 1+1",
    type: ["top"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "78000",
    sale: "39800",
    iconContent: null,
    descMain: null,
    descSub: null,
  },
  {
    id: "24",
    imgSrc: "/images/woman/woman24.jpg",
    name: "젤라라이트 라운드 크롭탑 멜로우그레이",
    type: ["top"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "29000",
    sale: "14000",
    iconContent: null,
    descMain: null,
    descSub: null,
  },
  {
    id: "25",
    imgSrc: "/images/woman/woman25.jpg",
    name: "사이드 슬릿 숏슬리브",
    type: ["top"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "29000",
    sale: "14000",
    iconContent: ["5컬러"],
    descMain: null,
    descSub: null,
  },
  {
    id: "26",
    imgSrc: "/images/woman/woman26.jpg",
    name: "우븐 스트레치 기모 테이퍼드 팬츠 블랙",
    type: ["bottom", "tapered"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "69000",
    sale: "49000",
    iconContent: ["신상"],
    descMain: "도톰한 기모로 따뜻하게, 원 턱 디테일로 편안하게!",
    descSub: null,
  },
  {
    id: "27",
    imgSrc: "/images/woman/woman27.jpg",
    name: "우븐 스트레치 기모 테이퍼드 팬츠 타이니크림",
    type: ["bottom", "tapered"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "69000",
    sale: "49000",
    iconContent: ["신상"],
    descMain: "도톰한 기모로 따뜻하게, 원 턱 디테일로 편안하게!",
    descSub: null,
  },
  {
    id: "28",
    imgSrc: "/images/woman/woman28.jpg",
    name: "우븐 스트레치 기모 테이퍼드 팬츠 오크베이지",
    type: ["bottom", "tapered"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "69000",
    sale: "49000",
    iconContent: ["신상"],
    descMain: "도톰한 기모로 따뜻하게, 원 턱 디테일로 편안하게!",
    descSub: null,
  },
  {
    id: "29",
    imgSrc: "/images/woman/woman29.jpg",
    name: "우븐 스트레치 기모 테이퍼드 팬츠 뮤트그레이",
    type: ["bottom", "tapered"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "69000",
    sale: "49000",
    iconContent: ["신상"],
    descMain: "도톰한 기모로 따뜻하게, 원 턱 디테일로 편안하게!",
    descSub: null,
  },
  {
    id: "30",
    imgSrc: "/images/woman/woman30.jpg",
    name: "우븐 스트레치 기모 테이퍼드 팬츠 로드네이비",
    type: ["bottom", "tapered"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "69000",
    sale: "49000",
    iconContent: ["신상"],
    descMain: "도톰한 기모로 따뜻하게, 원 턱 디테일로 편안하게!",
    descSub: null,
  },
  {
    id: "31",
    imgSrc: "/images/woman/woman31.jpg",
    name: "젝시믹스 라인 트랙 팬츠 쉬머크림",
    type: ["bottom"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "52000",
    sale: "15000",
    iconContent: ["이벤트특가"],
    descMain: null,
    descSub: null,
  },
  {
    id: "32",
    imgSrc: "/images/woman/woman32.jpg",
    name: "젝시믹스 라인 트랙 팬츠 뮤즈라벤더",
    type: ["bottom"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "52000",
    sale: "15000",
    iconContent: ["이벤트특가"],
    descMain: null,
    descSub: null,
  },
  {
    id: "33",
    imgSrc: "/images/woman/woman33.jpg",
    name: "젝시믹스 라인 트랙 팬츠 피스타치오",
    type: ["bottom"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "52000",
    sale: "15000",
    iconContent: ["이벤트특가"],
    descMain: null,
    descSub: null,
  },
  {
    id: "34",
    imgSrc: "/images/woman/woman34.jpg",
    name: "젝시믹스 라인 트랙 팬츠 클라우드핑크",
    type: ["bottom"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "52000",
    sale: "15000",
    iconContent: ["이벤트특가"],
    descMain: null,
    descSub: null,
  },
  {
    id: "35",
    imgSrc: "/images/woman/woman35.jpg",
    name: "하이넥 웰론 패딩 블랙",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "139000",
    sale: "109000",
    iconContent: ["신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "36",
    imgSrc: "/images/woman/woman36.jpg",
    name: "하이넥 웰론 패딩 도버크림",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "139000",
    sale: "109000",
    iconContent: ["신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "37",
    imgSrc: "/images/woman/woman37.jpg",
    name: "하이넥 웰론 패딩 브라이드핑크",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "139000",
    sale: "109000",
    iconContent: ["신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "38",
    imgSrc: "/images/woman/woman38.jpg",
    name: "하이넥 오버핏 패딩 베스트 블랙",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "99000",
    sale: "79000",
    iconContent: null,
    descMain: null,
    descSub: null,
  },
  {
    id: "39",
    imgSrc: "/images/woman/woman39.jpg",
    name: "루즈핏 에코 퍼 자켓 블랙",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "109000",
    sale: "89000",
    iconContent: ["신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "40",
    imgSrc: "/images/woman/woman40.jpg",
    name: "루즈핏 에코 퍼 자켓 베어하프",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "109000",
    sale: "89000",
    iconContent: ["신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "41",
    imgSrc: "/images/woman/woman41.jpg",
    name: "루즈핏 에코 퍼 자켓 스노우크림",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "109000",
    sale: "89000",
    iconContent: ["신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "42",
    imgSrc: "/images/woman/woman42.jpg",
    name: "우먼즈 체커보드 플리스 리버서블 베스트 라이트베이지",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "119000",
    sale: "99000",
    iconContent: ["패밀리", "신상"],
    descMain: "체커보드 플리스 or 물결 퀼팅 양면 아우터",
    descSub: null,
  },
  {
    id: "43",
    imgSrc: "/images/woman/woman43.jpg",
    name: "내핑 후드 집업 멜란지그레이",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "79000",
    sale: "59000",
    iconContent: ["패밀리", "신상"],
    descMain: "기모 안감으로 포근하게!",
    descSub: "#4년 연속 아우터 판매 1위",
  },
  {
    id: "44",
    imgSrc: "/images/woman/woman44.jpg",
    name: "젤라 인텐션 슬림핏 집업자켓 1+1",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "128000",
    sale: "82800",
    iconContent: ["패밀리", "신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "45",
    imgSrc: "/images/woman/woman45.jpg",
    name: "내핑 후드 집업 블랙",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "79000",
    sale: "59000",
    iconContent: ["패밀리", "신상"],
    descMain: "기모 안감으로 포근하게!",
    descSub: "#4년 연속 아우터 판매 1위",
  },
  {
    id: "46",
    imgSrc: "/images/woman/woman46.jpg",
    name: "내핑 후드 집업 크림",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "79000",
    sale: "59000",
    iconContent: ["패밀리", "신상"],
    descMain: "기모 안감으로 포근하게!",
    descSub: "#4년 연속 아우터 판매 1위",
  },
  {
    id: "47",
    imgSrc: "/images/woman/woman47.jpg",
    name: "하이커 크롭 바람막이 블랙",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "54000",
    sale: null,
    iconContent: ["패밀리", "신상"],
    descMain: "기모 안감으로 포근하게!",
    descSub: "#4년 연속 아우터 판매 1위",
  },
  {
    id: "48",
    imgSrc: "/images/woman/woman48.jpg",
    name: "슬림핏 크롭 집업자켓 1+1",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "108000",
    sale: "74800",
    iconContent: ["패밀리", "신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "49",
    imgSrc: "/images/woman/woman49.jpg",
    name: "쉐르파 하이넥 점퍼 스모크베이지",
    type: ["top", "outer"],
    option: ["S(44~55)", "M(55반~66)", "L(66반~77)"],
    category: "WOMENS",
    price: "132000",
    sale: "74000",
    iconContent: ["패밀리", "신상"],
    descMain: "주간 아우터 판매 1위",
    descSub: "#품절주의",
  },
  {
    id: "50",
    imgSrc: "/images/woman/woman50.jpg",
    name: "블랙라벨 시그니처 360N 라이트 조거레깅스 모스올리브",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "59000",
    sale: "15000",
    iconContent: ["이벤트특가"],
    descMain: "주간 아우터 판매 1위",
    descSub: "#품절주의",
  },
  {
    id: "51",
    imgSrc: "/images/woman/woman51.jpg",
    name: "V업 3D 플러스 레깅스 카본네이비",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "39000",
    sale: "20000",
    iconContent: ["~3XL"],
    descMain: "[20컬러] 누적판매 500만",
    descSub: "#국민레깅스 1위",
  },
  {
    id: "52",
    imgSrc: "/images/woman/woman52.jpg",
    name: "젤라 인텐션 하드플러피 기모 레깅스 애쉬네이비",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "39000",
    sale: "24000",
    iconContent: ["~2XL"],
    descMain: "기모 안감으로 보온성은 UP, 젤라의 부드러움은 그대로!",
    descSub: null,
  },
  {
    id: "53",
    imgSrc: "/images/woman/woman53.jpg",
    name: "젤라 인텐션 하드플러피 기모 레깅스 포레스트나잇",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "39000",
    sale: "24000",
    iconContent: null,
    descMain: "기모 안감으로 보온성은 UP, 젤라의 부드러움은 그대로!",
    descSub: null,
  },
  {
    id: "54",
    imgSrc: "/images/woman/woman54.jpg",
    name: "블랙라벨 시그니처 360N 라이트 조거레깅스 실키핑크",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "59000",
    sale: "15000",
    iconContent: ["이벤트특가"],
    descMain: "기모 안감으로 보온성은 UP, 젤라의 부드러움은 그대로!",
    descSub: null,
  },
  {
    id: "55",
    imgSrc: "/images/woman/woman55.jpg",
    name: "젤라 인텐션 바이커 쇼츠 5부 1+1",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "72000",
    sale: "32800",
    iconContent: ["~2XL", "주문폭주"],
    descMain: null,
    descSub: null,
  },
  {
    id: "56",
    imgSrc: "/images/woman/woman56.jpg",
    name: "젤라 인텐션 바이커 쇼츠 3부 블랙",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "38000",
    sale: "13000",
    iconContent: ["~2XL", "주문폭주"],
    descMain: "바이커쇼츠 판매 1위",
    descSub: null,
  },
  {
    id: "57",
    imgSrc: "/images/woman/woman57.jpg",
    name: "젤라 인텐션 바이커 쇼츠 5부 블랙",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "36000",
    sale: "18000",
    iconContent: ["~2XL"],
    descMain: null,
    descSub: null,
  },
  {
    id: "58",
    imgSrc: "/images/woman/woman58.jpg",
    name: "블랙라벨 시그니처 360N 트랙라인 4부 쇼츠 블랙",
    type: ["bottom", "leggings"],
    option: ["S", "M", "L"],
    category: "WOMENS",
    price: "38800",
    sale: "19000",
    iconContent: null,
    descMain: null,
    descSub: null,
  },
  {
    id: "59",
    imgSrc: "/images/man/man1.jpg",
    name: "오버핏 리버서블 퍼 자켓 블랙",
    type: ["top", "outer"],
    option: ["M", "L", "X", "XL", "XXL"],
    category: "MENS",
    price: "159000",
    sale: "99000",
    iconContent: ["이벤트특가", "신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "60",
    imgSrc: "/images/man/man2.jpg",
    name: "커뮤터 스트레치 라이트 패딩 자켓 애쉬카키",
    type: ["top", "outer"],
    option: ["M", "L", "X", "XL", "XXL"],
    category: "MENS",
    price: "189000",
    sale: "119000",
    iconContent: ["이벤트특가", "~3XL", "신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "61",
    imgSrc: "/images/man/man3.jpg",
    name: "맨즈 리버서블 포켓 퀼티드 자켓 사파리카키",
    type: ["top", "outer"],
    option: ["M", "L", "X", "XL", "XXL"],
    category: "MENS",
    price: "139000",
    sale: "89000",
    iconContent: ["이벤트특가", "신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "62",
    imgSrc: "/images/man/man4.jpg",
    name: "텍스처드 플리스 집업 자켓 블랙",
    type: ["top", "outer"],
    option: ["M", "L", "X", "XL", "XXL"],
    category: "MENS",
    price: "99000",
    sale: "69000",
    iconContent: ["~2XL", "신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "63",
    imgSrc: "/images/man/man5.jpg",
    name: "커뮤터 스트레치 라이트 롱 패딩 블랙",
    type: ["top", "outer"],
    option: ["M", "L", "X", "XL", "XXL"],
    category: "MENS",
    price: "199000",
    sale: "169000",
    iconContent: ["~3XL", "신상"],
    descMain: "[맨즈] 경량 충전재로 모든 일상을 가볍고 따뜻하게!",
    descSub: null,
  },
  {
    id: "64",
    imgSrc: "/images/man/man6.gif",
    name: "리버서블 퀼팅 플리스 코트 블랙",
    type: ["top", "outer"],
    option: ["M", "L", "X", "XL", "XXL"],
    category: "MENS",
    price: "169000",
    sale: "119000",
    iconContent: ["이벤트특가", "~2XL", "신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "65",
    imgSrc: "/images/man/man7.jpg",
    name: "넥리스 심플 경량 패딩 다크그레이",
    type: ["top", "outer"],
    option: ["M", "L", "X", "XL", "XXL"],
    category: "MENS",
    price: "119000",
    sale: "99000",
    iconContent: ["~2XL", "신상"],
    descMain: "[맨즈] 가볍고 따뜻한 마이크로 볼 충전재 #품절주의",
    descSub: null,
  },
  {
    id: "66",
    imgSrc: "/images/man/man8.jpg",
    name: "플렉스 집업 후디",
    type: ["top", "outer"],
    option: ["M", "L", "X", "XL", "XXL"],
    category: "MENS",
    price: "72000",
    sale: "49000",
    iconContent: ["~2XL", "신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "67",
    imgSrc: "/images/man/man9.jpg",
    name: "유틸라이트 포텐셜 롱슬리브 블랙",
    type: ["top"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "49000",
    sale: "15000",
    iconContent: ["이벤트특가", "신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "68",
    imgSrc: "/images/man/man10.jpg",
    name: "프렌치 테리 하프집업 스웨트셔츠 네이비",
    type: ["top"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "82000",
    sale: "59000",
    iconContent: ["~2XL", "신상"],
    descMain: "편안한 루즈 핏 #셋업 스타일링",
    descSub: "윤성빈's PICK!",
  },
  {
    id: "69",
    imgSrc: "/images/man/man11.jpg",
    name: "스포츠 윈드 테크 롱슬리브 블랙",
    type: ["top"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "82000",
    sale: "59000",
    iconContent: ["~3XL", "신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "70",
    imgSrc: "/images/man/man12.jpg",
    name: "필드 하프집업 롱슬리브 1+1",
    type: ["top"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "98000",
    sale: "50000",
    iconContent: ["이벤트특가", "~2XL", "신상"],
    descMain: null,
    descSub: null,
  },
  {
    id: "71",
    imgSrc: "/images/man/man13.jpg",
    name: "트리플 엑스 숏슬리브 1+2",
    type: ["top"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "58000",
    sale: "44800",
    iconContent: ["~3XL", "신상"],
    descMain: null,
    descSub: "맨즈 상의 누적판매 1위 #윤성빈's PICK!",
  },
  {
    id: "72",
    imgSrc: "/images/man/man14.jpg",
    name: "하이쿨링 테크 숏슬리브 1+1",
    type: ["top"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "88000",
    sale: "49800",
    iconContent: ["~3XL", "신상"],
    descMain: null,
    descSub: "윤성빈's PICK!",
  },
  {
    id: "73",
    imgSrc: "/images/man/man15.jpg",
    name: "베이직 로고 트랙 SET",
    type: ["top", "bottom"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "133000",
    sale: "89800",
    iconContent: ["~2XL", "신상"],
    descMain: "[집업+트랙팬츠 구성]",
    descSub: null,
  },
  {
    id: "74",
    imgSrc: "/images/man/man16.jpg",
    name: "우븐 스트레치 버닝 SET",
    type: ["top", "bottom"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "163000",
    sale: "109800",
    iconContent: ["~2XL", "신상"],
    descMain: "[집업+트랙팬츠 구성] 운동 효과 극대화 #땀복",
    descSub: null,
  },
  {
    id: "75",
    imgSrc: "/images/man/man17.jpg",
    name: "데일리 에코티브 티셔츠 1+1",
    type: ["top"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "78000",
    sale: "45800",
    iconContent: ["친환경", "~3XL", "신상"],
    descMain: null,
    descSub: "숏슬리브 or 롱슬리브 교차선택 가능",
  },
  {
    id: "76",
    imgSrc: "/images/man/man18.jpg",
    name: "머슬핏 듀얼 롱슬리브 1+1",
    type: ["top"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "88000",
    sale: "44800",
    iconContent: ["~3XL"],
    descMain: null,
    descSub: null,
  },
  {
    id: "77",
    imgSrc: "/images/man/man19.jpg",
    name: "필드 하프집업 롱슬리브",
    type: ["top"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "98000",
    sale: "50000",
    iconContent: ["이벤트특가", "~3XL"],
    descMain: null,
    descSub: null,
  },
  {
    id: "78",
    imgSrc: "/images/man/man20.jpg",
    name: "트리플 엑스 숏슬리브",
    type: ["top"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "58000",
    sale: "44800",
    iconContent: ["~3XL"],
    descMain: "맨즈 상의 누적판매 1위",
    descSub: "#윤성빈's PICK!",
  },
  {
    id: "79",
    imgSrc: "/images/man/man21.jpg",
    name: "맨즈 아이스페더 숏슬리브 1+1",
    type: ["top"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "70000",
    sale: "30000",
    iconContent: ["~3XL"],
    descMain: null,
    descSub: "오버핏 or 머슬핏 교차선택 가능",
  },
  {
    id: "80",
    imgSrc: "/images/man/man22.jpg",
    name: "액티브 플레이어 조거팬츠 SET",
    type: ["top", "bottom"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "185000",
    sale: "109800",
    iconContent: ["~2XL"],
    descMain: "[트랙자켓+조거팬츠 구성]",
    descSub: null,
  },
  {
    id: "81",
    imgSrc: "/images/man/man23.jpg",
    name: "프렌치 테리 SET",
    type: ["top", "bottom"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "104000",
    sale: "66800",
    iconContent: ["~3XL", "신상", "주문폭주"],
    descMain: "[트랙자켓+조거팬츠 구성]",
    descSub: null,
  },
  {
    id: "82",
    imgSrc: "/images/man/man24.jpg",
    name: "액티브 플레이어 쇼츠 SET",
    type: ["top", "bottom"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "148000",
    sale: "89800",
    iconContent: ["~2XL"],
    descMain: null,
    descSub: null,
  },
  {
    id: "83",
    imgSrc: "/images/man/man25.jpg",
    name: "사이드라인 조깅스 블랙",
    type: ["bottom"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "59000",
    sale: "20000",
    iconContent: ["이벤트특가"],
    descMain: null,
    descSub: null,
  },
  {
    id: "84",
    imgSrc: "/images/man/man26.jpg",
    name: "올데이 기모 슬랙스 블랙",
    type: ["bottom"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "89000",
    sale: "69000",
    iconContent: ["~2XL", "신상"],
    descMain: "한겨울까지 따뜻한 도톰 기모 슬랙스",
    descSub: null,
  },
  {
    id: "85",
    imgSrc: "/images/man/man27.jpg",
    name: "올데이 기모 슬랙스 베이지",
    type: ["bottom"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "89000",
    sale: "69000",
    iconContent: ["~2XL", "신상"],
    descMain: "한겨울까지 따뜻한 도톰 기모 슬랙스",
    descSub: null,
  },
  {
    id: "86",
    imgSrc: "/images/man/man28.jpg",
    name: "올데이 기모 슬랙스 라이트그레이",
    type: ["bottom"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "89000",
    sale: "69000",
    iconContent: ["~2XL", "신상"],
    descMain: "한겨울까지 따뜻한 도톰 기모 슬랙스",
    descSub: null,
  },
  {
    id: "87",
    imgSrc: "/images/man/man29.jpg",
    name: "올데이 기모 슬랙스 다크그레이",
    type: ["bottom"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "89000",
    sale: "69000",
    iconContent: ["~2XL", "신상"],
    descMain: "한겨울까지 따뜻한 도톰 기모 슬랙스",
    descSub: null,
  },
  {
    id: "88",
    imgSrc: "/images/man/man30.jpg",
    name: "에센셜 스트레치 기모 슬랙스 블랙",
    type: ["bottom"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "109000",
    sale: "69000",
    iconContent: ["~2XL"],
    descMain: "일상부터 필드까지 입는 다재다능 기모 슬랙스",
    descSub: null,
  },
  {
    id: "89",
    imgSrc: "/images/man/man31.jpg",
    name: "에센셜 스트레치 기모 슬랙스 베이지",
    type: ["bottom"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "109000",
    sale: "69000",
    iconContent: ["~2XL", "신상"],
    descMain: "일상부터 필드까지 입는 다재다능 기모 슬랙스",
    descSub: "new color",
  },
  {
    id: "90",
    imgSrc: "/images/man/man32.jpg",
    name: "에센셜 스트레치 기모 슬랙스 템퍼그레이",
    type: ["bottom"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "109000",
    sale: "69000",
    iconContent: ["~2XL"],
    descMain: "일상부터 필드까지 입는 다재다능 기모 슬랙스",
    descSub: null,
  },
  {
    id: "91",
    imgSrc: "/images/man/man33.jpg",
    name: "에센셜 스트레치 기모 슬랙스 템퍼네이비",
    type: ["bottom"],
    option: ["M", "L", "XL", "XXL"],
    category: "MENS",
    price: "109000",
    sale: "69000",
    iconContent: ["~2XL"],
    descMain: "일상부터 필드까지 입는 다재다능 기모 슬랙스",
    descSub: null,
  },
];
