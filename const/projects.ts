const algorithm_fighter: string[] = [
  "1nHkoHUPMj0iMMtf8rasrdp-MKbJmfA4O",
  "1G0S-vJvupzyQGVRhfdJTk_BBeNsoLu9k",
  "1J1wl4ZGifIzqeOskIQ3SMw5OsTWPF2cj",
  "1Hv1pcQ7SoQ8NiuxHc75xEVQYXN3VCAwk",
  "1-bkVzXHC-aH9DUHffkP6fem1chr3Hufh",
  "1PLyE6kRLubcw06BrnE6ZZu1FO5qh_KJY",
  "1zzuR3fuzd4p90ZJ-VaImpw21Miwp1KNO",
  "1Jwg1f_ELBKf0zUhZMt3Y_CmMa7aHXQ0e",
  "10oyiT_nIMNFtLSUGHX2ZgJbjYw8CHKw1",
  "1gQsGOBki4w5D7tHJBO-mgIPAX4V4yGMU",
  "1x30QQo6asRFk1dBfUhy7m5wqXFabFD5q",
  "1fTjeb7YRcNzC1fjpst6rLwRB8dCqWslU",
];
const m_archive: string[] = [
  "1VlZMDcApqDrePsce6JoHnw9Ufi1bsOo-",
  "1ybHuQrvzx2_-k9wEH2nkHZqdwqFc13b9",
  "1_AyVl9cn35YvlhXmX_5rmwDxA-cjRuXI",
  "1AKyJJJch1seZqUeBXgUxt2iscpOcfPKi",
  "1jnRAkXBMkxhhPDRPoefmI3JmUq3qBoQC",
  "1k4B_TQLPB2nWLbPQLZu22e9AQQGMSGSo",
  "1eBnSKEDVE-uuyfDcuwkV_xR8pTkfl2eu",
  "1jjb-T-DflH27jWBtrRqcArinNJo-Lfur",
];
const mydart: string[] = [
  "/mydart/mydart1.png",
  "/mydart/mydart2.png",
  "/mydart/mydart3.png",
  "/mydart/mydart4.png",
];
export const PROJECTS_DATA = [
  {
    title: "westpearl.dev ",
    description: "[portfolio] 포트폴리오 및 개인 블로그 개발 (진행중)",
    images: [
      "https://lh3.googleusercontent.com/d/16lpPxi5sH_FtyTneWcUjH9lpQHfQq7Ic",
    ],
    tags: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "rodin",
      "vercel",
      "framer-motion",
    ],
    github: "https://github.com/jinjuseo/westpearl",
    demo: "#",
    star_rate: 3,
  },
  {
    title: "My Dart",
    description: `[삼일피더블유씨엑셀러레이션센터] 
       Next.js로 구축한 Dart 검색 간편화 서비스`,
    images: mydart,
    tags: ["Next.js", "Typescript", "Tailwind", "React-query", "MSW", "Azure"],
    github: "private",
    demo: "#",
    star_rate: 4,
  },
  {
    title: "K-SOX AI",
    description: `[삼일피더블유씨엑셀러레이션센터] 
      React와 Next.js로 구축한 K-SOX AI 웹 앱`,
    images: [
      "https://lh3.googleusercontent.com/d/1pfKtd7TeleDzARr0sMqqgOGW2J6_-t0H",
    ],
    tags: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "React-query",
      "Zustand",
      "MSW",
    ],
    github: "private",
    demo: "#",
    star_rate: 5,
  },

  {
    title: "Devkit",
    description: `[삼일피더블유씨엑셀러레이션센터]
       사내 웹 서비스의 디자인 통일성 및 프론트엔드 개발 생산성 증가를 위해 구축한 사내 디자인 시스템 `,
    images: [
      "https://lh3.googleusercontent.com/d/1FMp87AHL915RqGv5b_Vpxqv8DJf69wlP",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Storybook",
      "Tailwind",
      "Chromatic",
      "Rollup",
      "Figma",
    ],
    github: "private",
    demo: "#",
    star_rate: 5,
  },
  {
    title: "Dofarming",
    description:
      "사용자가 일일이 찾아 볼 필요없이 목적지와 그 근처 장소들을 추천해주는 서비스",
    images: [
      `https://lh3.googleusercontent.com/d/1CrM9PbPf_u-YH6_4KlyKzIcqz9xsMJto`,
    ],
    tags: [
      "Next.js",
      "Typescript",
      "KakaoAPI",
      "Tailwind",
      "Styled-components",
      "React-query",
      "Recoil",
      "Axios",
      "Sock.js",
      "Stomp.js",
      "MSW",
    ],
    github: "https://github.com/goorm-dofarming/Frontend",
    demo: "#",
    star_rate: 4,
  },
  {
    title: "Algorithm Fighter",
    description:
      "게임방 생성 및 실시간 채팅 기능과 알고리즘 풀이 1:1 대결 기능을 가진 게임 웹서비스",
    images: algorithm_fighter.map(
      (id) => `https://lh3.googleusercontent.com/d/${id}`
    ),
    tags: [
      "React",
      "Typescript",
      "Tailwind",
      "Stomp.js",
      "Zustand",
      "Axios",
      "Monaco",
    ],
    github: "https://github.com/gooormmoon/algorithm-fighter-front",
    demo: "#",
    star_rate: 4,
  },
  {
    title: "M_archive",
    description:
      "이제는 감상도 공유하는시대! 다양한 관점에서 바라보고 소통하는 국내 영화 리뷰 사이트. ",
    images: m_archive.map((id) => `https://lh3.googleusercontent.com/d/${id}`),
    tags: ["React", "Javascript", "SCSS", "Recoil", "Axios"],
    github: "https://github.com/MoonSanghee/m_archive",
    demo: "#",
    star_rate: 3,
  },
  // {
  //   title: "milymood",
  //   description: "[milymood] 주문 제작 커튼 주문 관리 및 발주 자동화 플랫폼",
  //   images: ["/placeholder.svg?height=200&width=300"],
  //   tags: ["JSP", "tomcat", "Javascript", "Mysql"],
  //   github: "#",
  //   demo: "#",
  //   star_rate: 3,
  // },
];
