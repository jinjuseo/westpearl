export const PROJECTS_DATA = [
  {
    title: "westpearl.dev ",
    description: "[portfolio] 포트폴리오 및 개인 블로그 개발 (현재진행형)",
    images: ["/images/projects/westpearl_dev/westpearl_dev.gif"],
    tags: ["Next.js", "Typescript", "Tailwind", "rodin", "vercel"],
    github: "https://github.com/jinjuseo/westpearl",
    demo: "#",
    star_rate: 3,
  },
  {
    title: "K-SOX AI",
    description: `[삼일피더블유씨엑셀러레이션센터] 
      React와 Next.js로 구축한 K-SOX AI 웹 앱`,
    images: ["/images/projects/k-sox/k-sox.png"],
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
    images: ["/images/projects/devkit/devkit.png"],
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
    images: Array.from(
      { length: 1 },
      (_, i) => `/images/projects/dofarming/dofarming-${i + 1}.gif`
    ),
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
    images: Array.from(
      { length: 12 },
      (_, i) =>
        `/images/projects/algorithm_fighter/algorithm_fighter-${i + 1}.gif`
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
    images: Array.from(
      { length: 8 },
      (_, i) => `/images/projects/m_archive/m_archive-${i + 1}.gif`
    ),
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
