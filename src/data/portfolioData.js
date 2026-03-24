export const portfolioLinks = {
  github: "https://github.com/yalyseung",
  blog: "https://yalyseung.github.io",
  email: "mailto:yalyseung@gmail.com",
};

export const experiences = [
  {
    title: "백엔드 개발자",
    company: "금융 / MES / 전자문서 / 자동화 프로젝트",
    period: "8년+",
    desc: "Spring Boot 기반 API, 이미지·문서 처리, 운영 안정성, 배포 구조 개선, 시스템 통합 중심으로 다양한 프로젝트를 수행했습니다.",
  },
  {
    title: "시스템 설계 및 운영",
    company: "실무형 아키텍처 설계",
    period: "Ongoing",
    desc: "표준 응답 구조, 예외 처리, 인증/인가, 파일 처리, 배치, 운영성 개선까지 서비스 전 구간을 고려한 구조 설계를 지향합니다.",
  },
];

export const projects = [
  {
    id: "doc-system",
    title: "전자문서 / 이미지 시스템 고도화",
    period: "2025",
    summary: "금융권 문서 스캔, 조회, 메타관리, 다운로드 API를 Spring Boot 기반으로 재설계한 프로젝트",
    detail: [
      "Spring Boot + JPA + Querydsl 기반 구조 설계",
      "공통 응답 / 예외 체계 표준화",
      "Swagger/OpenAPI, Validation, Security 적용",
    ],
    stack: ["Spring Boot", "JPA", "Querydsl", "Oracle", "Gradle"],
    role: "백엔드 설계 및 API 개발",
    background:
      "기존 시스템은 업무별 구조가 분산되어 있었고, 공통 응답 및 예외 처리 방식도 일관되지 않아 유지보수 비용이 높은 상태였습니다.",
    solution: [
      "업무별 메타 구조를 재정리하고 공통 응답 포맷을 표준화",
      "JPA/Querydsl 기반 조회 구조를 도입하여 쿼리 가독성과 유지보수성 개선",
      "Swagger, Validation, Security 구조를 적용해 운영 표준성 강화",
    ],
    result: [
      "API 구조 일관성 확보",
      "기능 추가 시 중복 코드 감소",
      "운영/장애 대응 시 원인 추적 용이성 향상",
    ],
  },
  {
    id: "rpa-portal",
    title: "RPA 관리 포털",
    period: "2025",
    summary: "로봇, 라이선스, 배포 현황을 관리하는 운영 포털 구축",
    detail: [
      "운영성 중심 화면 및 API 설계",
      "상태 모니터링 및 권한 구조 반영",
      "배치/스케줄 관리 구조 확장 고려",
    ],
    stack: ["Spring Boot", "React", "MariaDB", "JWT", "Docker"],
    role: "백엔드/프론트 구조 설계",
    background:
      "운영 중인 로봇과 라이선스, 배포 현황을 한 화면에서 관리하기 어려워 관리자 관점의 통합 포털이 필요했습니다.",
    solution: [
      "운영 데이터 중심 화면 구조 설계",
      "권한별 메뉴/기능 접근 구조 반영",
      "상태값과 로그 중심으로 관리자 UX 개선",
    ],
    result: [
      "운영 가시성 향상",
      "관리자 업무 동선 단축",
      "향후 배포/스케줄 관리 기능 확장 기반 확보",
    ],
  },
  {
    id: "photo-service",
    title: "사진 관리 서비스",
    period: "2025",
    summary: "업로드, 다운로드, 즐겨찾기, 태그 관리 기능을 제공하는 샘플 서비스",
    detail: [
      "파일 업로드 / ZIP 다운로드 처리",
      "React Router 기반 목록 / 상세 / 태그 관리 화면",
      "Spring Security 기반 인증 흐름 적용",
    ],
    stack: ["Spring Boot", "React", "JPA", "Security"],
    role: "풀스택 개발",
    background:
      "파일 업로드/다운로드와 사용자별 즐겨찾기, 태그 관리 기능을 포함한 서비스형 샘플 프로젝트가 필요했습니다.",
    solution: [
      "파일 저장/삭제/ZIP 다운로드 처리 로직 구현",
      "목록/상세/태그 관리 화면 분리",
      "Spring Security 기반 인증 흐름 적용",
    ],
    result: [
      "파일 처리 기능 검증",
      "화면-API 연동 구조 확보",
      "추후 관리자 기능 확장 가능성 확보",
    ],
  },
];

export const skills = {
  Backend: ["Java", "Spring", "Spring Boot", "JPA", "Querydsl", "Spring Security", "REST API"],
  Frontend: ["React", "Vite", "Tailwind CSS", "Axios", "Router"],
  Infra: ["Docker", "Linux", "Nginx", "MariaDB", "Oracle", "Gradle"],
};