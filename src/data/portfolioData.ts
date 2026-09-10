import {
  ProfileInfo,
  MetricStat,
  ServiceItem,
  EngagementProject,
  EducationItem,
  ActivityItem,
  CertificateItem,
  FaqItem,
} from '../types';

export const profileData: ProfileInfo = {
  nameKo: '노소윤',
  nameEn: 'Soyun Rho',
  titleKo: 'IT Audit & Security Specialist / Senior Consultant',
  titleEn: 'IT Audit & Security Specialist / Senior Consultant',
  companyKo: '딜로이트 안진회계법인',
  companyEn: 'Deloitte Anjin LLC',
  departmentKo: 'A&A - Digital Assurance',
  departmentEn: 'Audit & Assurance - Digital Assurance',
  positionKo: 'Senior Consultant (시니어 컨설턴트)',
  positionEn: 'Senior Consultant',
  periodKo: '2022.11 ~ 현재 (재직 중)',
  periodEn: 'Nov 2022 ~ Present',
  email: 'soyun0108@naver.com',
  linkedin: 'https://www.linkedin.com/in/soyun-rho-539a8921a',
  birth: '1999.01.08',
  locationKo: '대한민국 서울특별시 여의도',
  locationEn: 'Yeouido, Seoul, Republic of Korea',
  bioKo:
    'IT 감사, IT 내부회계관리제도(ITGC/ITAC) 구축 및 운영평가, SOC 1 및 SOC 2 인증 분야의 탄탄한 실무 전문성을 보유한 딜로이트 안진회계법인 디지털 어슈어런스(Digital Assurance) 시니어 컨설턴트입니다. 영어영문학 및 글로벌문화산업·MICE 전공과 국가직무능력표준(NCS) 정보보안 전문 교육 과정을 바탕으로, 글로벌 비즈니스 커뮤니케이션 감각과 IT 보안 기술 역량을 유기적으로 결합하여 기업의 디지털 신뢰성과 시스템 통제 안정성을 극대화합니다.',
  bioEn:
    'Senior Consultant at Deloitte Anjin LLC (Audit & Assurance - Digital Assurance). Specialized in IT Audit, IT Internal Accounting Controls (ITGC/ITAC) implementation and operating effectiveness evaluation, and SOC 1/SOC 2 attestation. Combining an academic background in English Literature & Global Cultural Industry/MICE with intensive hands-on Security Engineering training, delivering high-impact assurance and digital governance for leading global and domestic enterprises.',
};

export const metricStats: MetricStat[] = [
  {
    value: '3+ Yrs',
    labelKo: '딜로이트 디지털 어슈어런스',
    labelEn: 'Deloitte Digital Assurance',
    descKo: '대기업 및 금융/테크 기업 IT 내부통제 및 감사 수행',
    descEn: 'Enterprise IT internal control & assurance engagements',
  },
  {
    value: '100%',
    labelKo: 'ITGC & ITAC 통제 준수율',
    labelEn: 'ITGC & ITAC Compliance',
    descKo: '접근제어·변경관리·운영통제·인터페이스 전 영역 평가',
    descEn: 'Access control, change management, operations, interfaces',
  },
  {
    value: 'SOC 1·2',
    labelKo: '글로벌 서비스조직 통제 인증',
    labelEn: 'SOC 1 & SOC 2 Attestation',
    descKo: 'SSAE 18 / ISAE 3402 기준 인증 및 정밀 보고서 작성',
    descEn: 'SSAE 18 / ISAE 3402 standard audit reports and assurance',
  },
  {
    value: 'Global',
    labelKo: '영미권 교환학생 & 한영 전문성',
    labelEn: 'Bilingual & Security Engineer',
    descKo: 'Cedar Crest College 수료 및 NCS 정보보안 전문가 과정',
    descEn: 'Cedar Crest College (US) & NCS Security Engineering',
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'it-audit',
    number: '01',
    titleKo: 'IT 감사 (IT Audit & Systems Review)',
    titleEn: 'IT Audit & Systems Review',
    summaryKo:
      '기업 IT 인프라, 전사적 자원관리(ERP), 데이터베이스 및 애플리케이션에 대한 통제 환경을 정밀하게 진단하고 신뢰성을 검증합니다.',
    summaryEn:
      'Rigorous evaluation of enterprise IT infrastructure, core ERP systems, databases, and business applications to ensure data integrity and compliance.',
    detailsKo: [
      '기업 재무제표 감사와 연계된 정보시스템 및 IT 환경의 위험 평가(Risk Assessment)',
      'OS, DB, 네트워크, 주요 업무 애플리케이션의 보안 설정 및 접근통제 환경 검토',
      '직무 분리(Segregation of Duties - SoD) 위반 여부 분석 및 권한 오남용 방지 체계 점검',
      '감사 추적(Audit Trail) 및 로그 보존 정책, 백업/복구 절차 유효성 평가',
    ],
    detailsEn: [
      'IT environment risk assessment closely linked to financial statement audits',
      'Inspection of OS, database, network security baselines and privilege management',
      'Segregation of Duties (SoD) risk analysis and privilege misuse mitigation',
      'Audit logging preservation, backup integrity, and recovery process verification',
    ],
    tags: ['IT Audit', 'Risk Assessment', 'SoD Analysis', 'Audit Trail', 'ERP Review'],
  },
  {
    id: 'itgc-itac',
    number: '02',
    titleKo: 'IT 내부회계관리제도 (ITGC & ITAC)',
    titleEn: 'IT Internal Accounting Controls (ITGC/ITAC)',
    summaryKo:
      '신외부감사법 및 K-SOX 기준에 부합하는 IT 일반통제(ITGC)와 자동통제(ITAC)의 설계 및 운영 적정성을 평가하고 자문을 제공합니다.',
    summaryEn:
      'End-to-end consulting and testing for IT General Controls (ITGC) and IT Application Controls (ITAC) aligned with K-SOX and global regulatory standards.',
    detailsKo: [
      'ITGC 4대 핵심 도메인(프로그램 개발, 프로그램 변경, 시스템 운영, 프로그램 및 데이터 접근통제) 평가',
      '핵심 재무정보 자동 산출 로직, 시스템 간 인터페이스(Interface), 시스템 통제점(ITAC) 검증',
      '중요 정보 생성 보고서(IPE: Information Produced by Entity)의 완전성 및 정확성(C&A) 검토',
      '미비점(Deficiency) 식별 및 개선 방안(Remediation) 제시를 통한 내부통제 고도화 자문',
    ],
    detailsEn: [
      'Evaluation of 4 key ITGC domains: Access to Programs & Data, Program Changes, Program Development, Computer Operations',
      'Automated application controls (ITAC), calculation logics, and automated system interface testing',
      'Completeness and Accuracy (C&A) testing for key management reports (IPE)',
      'Deficiency identification, root-cause analysis, and remediation advisory',
    ],
    tags: ['ITGC', 'ITAC', 'K-SOX', 'IPE Testing', 'Control Matrix (RCM)'],
  },
  {
    id: 'soc-assurance',
    number: '03',
    titleKo: 'SOC 인증 및 보고서 작성 (SOC 1 & SOC 2)',
    titleEn: 'SOC 1 & SOC 2 Attestation & Reporting',
    summaryKo:
      '클라우드, 데이터센터, 핀테크 등 서비스 제공 기업의 내부통제 신뢰도를 보증하는 SOC 1(재무보고 관련 통제) 및 SOC 2(보안·가용성·기밀성) 보고서를 작성합니다.',
    summaryEn:
      'Attestation and reporting on service organization controls (SSAE 18 / ISAE 3402 SOC 1 and AICPA Trust Services Criteria SOC 2) for leading tech and cloud providers.',
    detailsKo: [
      'SOC 1: 위탁 기업의 재무보고와 연관된 서비스 조직의 내부통제 설계(Type 1) 및 운영 효과성(Type 2) 평가',
      'SOC 2: 신뢰 서비스 기준(Trust Services Criteria) 중 보안(Security), 가용성(Availability), 기밀성(Confidentiality) 검증',
      '고객사 시스템 아키텍처 및 통제활동(Control Activity) 문서화 및 세부 테스트 절차 수행',
      '글로벌 수검 기업 및 고객사 외부감사인을 위한 공식 감사보고서(SOC Report) 작성 및 검수',
    ],
    detailsEn: [
      'SOC 1: Type 1 (Design) and Type 2 (Operating Effectiveness) evaluation relevant to financial reporting',
      'SOC 2: Verification against Trust Services Criteria (Security, Availability, Confidentiality)',
      'System architecture documentation and detailed control testing procedures',
      'Official assurance report authoring for global clients and enterprise auditors',
    ],
    tags: ['SOC 1', 'SOC 2 Type II', 'SSAE 18 / ISAE 3402', 'Trust Services Criteria', 'Cloud Assurance'],
  },
  {
    id: 'security-engineering',
    number: '04',
    titleKo: '정보보안 및 보안엔지니어링 (Security Engineering)',
    titleEn: 'Information Security & Engineering',
    summaryKo:
      'NCS 보안엔지니어링(20010206) 기반 실무 역량으로 시스템 보안 아키텍처 취약점을 점검하고 안전한 통제 환경을 설계합니다.',
    summaryEn:
      'Solid technical grounding in National Competency Standards (NCS) Security Engineering, conducting vulnerability assessments and system hardening.',
    detailsKo: [
      '서버(Linux/Windows), 네트워크 장비, DBMS 보안 가이드라인 및 컴플라이언스 준수 점검',
      '계정 및 권한 관리 체계(IAM), MFA 도입 현황, 침입차단 및 암호화 알고리즘 검토',
      '보안 침해사고 예방을 위한 취약점 점검 및 보안 취약점 조치 방안 분석',
      '클라우드(AWS, Azure) 및 온프레미스 하이브리드 환경의 보안 거버넌스 연계',
    ],
    detailsEn: [
      'Server, network, and database security baseline audits against industry standards',
      'Identity & Access Management (IAM), MFA implementation, and data encryption reviews',
      'Vulnerability scanning analysis and incident prevention remediation planning',
      'Cloud and on-premises hybrid security governance integration',
    ],
    tags: ['NCS 20010206', 'Vulnerability Assessment', 'IAM', 'System Hardening', 'Database Security'],
  },
];

export const selectedProjects: EngagementProject[] = [
  {
    id: 'proj-01',
    number: 'Project 01',
    titleKo: '국내 주요 대기업 IT 내부회계관리제도(ITGC/ITAC) 운영평가',
    titleEn: 'Enterprise IT Internal Accounting Controls (ITGC/ITAC) Assurance',
    categoryKo: 'ITGC & ITAC 감사',
    categoryEn: 'ITGC & ITAC Assurance',
    clientTypeKo: '국내 대표 제조/엔터테인먼트/IT 대기업',
    clientTypeEn: 'Major Enterprise & Technology Corporation',
    objectiveKo:
      '신외부감사법 적용에 따른 ERP 및 기간계 시스템의 IT 일반통제 및 주요 재무 자동통제의 효과적 설계와 운영 적정성 검증',
    objectiveEn:
      'Verification of ITGC and automated ITAC effectiveness across mission-critical ERP and legacy financial systems under K-SOX regulations.',
    scopeKo: [
      '사용자 계정 승인, 퇴사자 권한 즉시 회수, 특권 계정(DBA/Root) 통제 등 접근보안 검토',
      '프로그램 변경 승인, 테스트 이력, 운영 반영 분리 절차(Change Management) 테스트',
      'SAP ERP 및 자체 개발 ERP 자동 계산식, 인터페이스 무결성, IPE 완전성 검증',
    ],
    scopeEn: [
      'Logical security review including user provisioning, termination revoke, and privileged accounts',
      'Program change control testing: change authorization, QA testing, and segregation of deployment',
      'ERP automated calculations, database interfaces, and key report (IPE) completeness verification',
    ],
    outcomesKo: [
      'IT 통제 미비점 조기 식별 및 효과적인 개선안 제시로 외부감사 원활한 적정 의견 도출 지원',
      '권한 분리(SoD) 매트릭스 재정립을 통해 전사적 보안 위험 최소화',
    ],
    outcomesEn: [
      'Supported successful clean audit opinion through early risk remediation and proactive consulting',
      'Minimized corporate security risks by refining segregation of duties (SoD) matrices',
    ],
  },
  {
    id: 'proj-02',
    number: 'Project 02',
    titleKo: '글로벌 테크 및 클라우드 서비스 기업 SOC 1 / SOC 2 인증 보고서 발행',
    titleEn: 'Global Cloud & Tech Platform SOC 1 / SOC 2 Type II Attestation',
    categoryKo: 'SOC 인증',
    categoryEn: 'SOC Certification',
    clientTypeKo: 'B2B SaaS, 데이터센터 및 핀테크 서비스 기업',
    clientTypeEn: 'B2B SaaS, Data Center & Fintech Providers',
    objectiveKo:
      '글로벌 엔터프라이즈 고객의 컴플라이언스 요구를 충족하기 위한 SSAE 18 / ISAE 3402 SOC 보고서 작성 및 독립적 평가 수행',
    objectiveEn:
      'Independent evaluation and issuance of SSAE 18 / ISAE 3402 SOC reports meeting rigorous enterprise client assurance requirements.',
    scopeKo: [
      'SOC 2 기준: 보안(Security), 가용성(Availability), 기밀성(Confidentiality) 원칙별 통제활동 설계 검토',
      '연간 운영 효과성 샘플링 테스트(Type 2): 방화벽 룰셋 검토, 데이터 백업 모니터링, 재해복구(DR) 모의훈련 확인',
      '서비스 조직 설명서(Section III) 및 감사인 테스트 결과(Section IV) 영문화 작성 및 종합',
    ],
    scopeEn: [
      'SOC 2 Trust Services Criteria: Security, Availability, and Confidentiality control design review',
      'Year-round operating effectiveness sampling: firewall rule sets, data backup logs, and DR drill verification',
      'Drafting official bilingual assurance reports including Section III management narrative & Section IV audit tests',
    ],
    outcomesKo: [
      '국내외 고객사에 제출 가능한 공신력 있는 SOC 1 / SOC 2 Type II 보고서 성공적 발행',
      '글로벌 파트너십 및 신규 엔터프라이즈 B2B 수주를 위한 신뢰성 인증 기반 확보',
    ],
    outcomesEn: [
      'Successfully delivered recognized SOC 1 / SOC 2 Type II reports for international customers',
      'Empowered client business expansion with internationally certified security trust evidence',
    ],
  },
  {
    id: 'proj-03',
    number: 'Project 03',
    titleKo: '주요 상장사 재무제표 감사 연계 IT 감사(IT Audit) 수행',
    titleEn: 'Statutory Financial Statement IT Audit Engagements',
    categoryKo: 'IT 감사',
    categoryEn: 'IT Audit',
    clientTypeKo: '코스피 / 코스닥 상장사',
    clientTypeEn: 'KOSPI / KOSDAQ Listed Companies',
    objectiveKo:
      '회계감사 시즌 정보시스템 환경의 신뢰성 검토를 통한 재무제표 왜곡 위험 사전 차단 및 감사 신뢰도 제고',
    objectiveEn:
      'Mitigating financial misstatement risks and elevating financial audit confidence through in-depth IT environment audits.',
    scopeKo: [
      '시스템 환경 파악 및 재무와 관련된 주요 전산시스템(DB, OS, Application) 범위 획정',
      '원장 및 분개 생성 프로세스의 전산 통제점 검토 및 인터페이스 누락 여부 검증',
      '시스템 권한 관리 미비점으로 인한 부정(Fraud) 발생 위험성 평가 및 대응',
    ],
    scopeEn: [
      'System landscape scoping covering financial applications, production databases, and servers',
      'Audit of journal entry generation workflows and automated batch interfaces',
      'Assessment of access control deficiencies to mitigate financial fraud and unauthorized modifications',
    ],
    outcomesKo: [
      '핵심 재무 리포트의 신뢰도 확보를 통해 외부감사인의 효율적 실증 절차 수행 지원',
      '기업 IT 운영 조직과 긴밀한 소통으로 실질적인 통제 프로세스 정착 유도',
    ],
    outcomesEn: [
      'Assured reliability of critical financial ledgers for statutory auditor substantive testing',
      'Fostered sustainable internal control practices through constructive collaboration with IT teams',
    ],
  },
  {
    id: 'proj-04',
    number: 'Project 04',
    titleKo: 'AI 데이터 분석 및 마케팅 채널 KPI 업무 자동화 대시보드',
    titleEn: 'AI Data Analytics & Market Channel KPI Automation Dashboard',
    categoryKo: 'AI 데이터 분석 & 자동화',
    categoryEn: 'AI Data Analytics & Automation',
    clientTypeKo: 'AI 데이터 분석 및 업무 자동화 실무 (강북)',
    clientTypeEn: 'AI Data Analysis & Business Automation Practice',
    objectiveKo:
      '마케팅 채널별 집행 비용, 노출, 클릭, 전환 데이터의 실시간 파이프라인 구축 및 핵심 KPI(ROAS, CAC, CVR) 분석 자동화 대시보드 구현',
    objectiveEn:
      'Real-time data pipeline integration and automated KPI dashboard implementation for multi-channel marketing performance (ROAS, CAC, CVR).',
    scopeKo: [
      '네이버, 구글, 메타, 카카오 등 주요 마케팅 채널 성과 데이터 수집 및 정제 자동화',
      'ROAS(382%), CAC(₩12,623), CVR(4.68%) 등 핵심 지표 실시간 시각화 인터페이스 구축',
      '머신러닝 기반 이상 징후 탐지(Anomaly Detection) 및 채널별 예산 리밸런싱 추천 알고리즘 연동',
      '경영진 및 실무자를 위한 자동화 CSV 리포트 생성 기능 개발',
    ],
    scopeEn: [
      'Automated data ingestion & cleansing across Naver, Google Ads, Meta, and Kakao channels',
      'Real-time visualization interface for key performance indicators (ROAS 382%, CAC, CVR)',
      'Integration of anomaly detection and rule-based budget reallocation recommendations',
      'Automated executive summary CSV reporting for streamlined operations',
    ],
    outcomesKo: [
      '수작업 보고서 작성 시간 85% 단축 및 실시간 KPI 모니터링 체계 확립',
      '채널별 ROAS 분석을 통한 마케팅 예산 집행 효율 24% 향상',
    ],
    outcomesEn: [
      'Reduced manual reporting time by 85% with continuous KPI tracking infrastructure',
      'Enhanced marketing spend efficiency by 24% via automated multi-touch attribution analysis',
    ],
    hasLiveDemo: true,
    liveDemoUrl: '/market_channel_kpi.html',
    localFilePath: 'file:///c:/Users/User1/Desktop/AI데이터분석및업무자동화실무_강북/실습1_260820/market_channel_kpi.html',
    tags: ['AI 데이터 분석', '업무 자동화', 'KPI Dashboard', 'ROAS', 'CAC', 'Chart.js', '실습1_260820'],
  },
];

export const educationData: EducationItem[] = [
  {
    institutionKo: '서울여자대학교 (Seoul Women\'s University)',
    institutionEn: 'Seoul Women\'s University',
    degreeKo: '영어영문학 학사 / 글로벌문화산업·MICE 전공 (복수전공)',
    degreeEn: 'B.A. in English Language & Literature / Global Cultural Industry & MICE',
    period: '2017.03 ~ 2023.02 (졸업)',
    statusKo: '학사 졸업',
    statusEn: 'Graduated',
    locationKo: '서울특별시 노원구',
    locationEn: 'Seoul, South Korea',
    descriptionKo: [
      '고급 영문 문서 독해, 영한/한영 번역 및 원어민 수준의 비즈니스 커뮤니케이션 역량 습득',
      '글로벌 문화 산업 트렌드 및 MICE(컨벤션·이벤트) 기획/운영 방법론 학습',
      '국제적 시각과 논리적 작문 능력을 기반으로 영문 감사 보고서(SOC Report) 작성에 직접적 기여',
    ],
    descriptionEn: [
      'Advanced English literature analysis, professional translation, and executive bilingual communication',
      'Global cultural industries and MICE planning & strategic management principles',
      'Directly applied international communication proficiency to authoring SOC audit reports',
    ],
  },
  {
    institutionKo: 'Cedar Crest College (USA)',
    institutionEn: 'Cedar Crest College (USA)',
    degreeKo: '교환학생 (Exchange Student) / English Major',
    degreeEn: 'Exchange Student / English Major',
    period: '2019.08 ~ 2020.05',
    statusKo: '파견 교환학생 이수',
    statusEn: 'Completed',
    locationKo: 'Allentown, Pennsylvania, USA',
    locationEn: 'Allentown, Pennsylvania, USA',
    descriptionKo: [
      '미국 펜실베이니아주 소재 대학교에서 현지 정규 학기 수료 (영어 전공 과정)',
      '다문화 환경에서의 팀 프로젝트, 아카데믹 에세이 작성, 토론 수업을 통한 글로벌 협업 역량 배양',
      '글로벌 회계법인의 외국계 고객사 및 해외 지사와의 커뮤니케이션 기반 확립',
    ],
    descriptionEn: [
      'Completed academic year in the United States majoring in English literature & linguistics',
      'Enhanced cross-cultural collaboration through rigorous academic essays, debates, and team leadership',
      'Built a confident foundation for managing international clients and global audit teams',
    ],
  },
];

export const activitiesData: ActivityItem[] = [
  {
    id: 'act-kh',
    titleKo: '정보시스템구축 보안엔지니어링 기반 정보보안 전문가 양성과정 A1',
    titleEn: 'Information System Security Engineering Training (NCS: 20010206)',
    roleKo: '과정 수료생 (전문가 과정)',
    roleEn: 'Specialist Trainee',
    organizationKo: 'KH정보교육원 강남지원',
    organizationEn: 'KH Information Educational Institute (Gangnam)',
    category: 'security',
    period: '2022.04 ~ 2022.11',
    detailsKo: [
      '국가직무능력표준(NCS: 보안엔지니어링 20010206) 기반 실무 밀착형 훈련',
      '네트워크 보안(TCP/IP, 패킷 분석, 방화벽, IDS/IPS), 시스템 보안(Linux/Windows 서버 구축 및 취약점 분석)',
      '데이터베이스 구축 및 SQL 인젝션 등 웹 애플리케이션 취약점 진단 및 보안 패치 실습',
      '정보보안 기사 이론 및 실무 프로젝트 수행을 통해 IT 감사/ITGC 통제 평가의 탄탄한 기술적 토대 마련',
    ],
    detailsEn: [
      'Intensive training under National Competency Standards (NCS 20010206 Security Engineering)',
      'Network security architecture (TCP/IP analysis, firewalls, IDS/IPS), Linux & Windows server hardening',
      'Database security, SQL injection prevention, and OWASP Top 10 web vulnerability remediation',
      'Solidified deep technical foundation directly supporting IT audit and ITGC technical control evaluations',
    ],
  },
  {
    id: 'act-ai-automation',
    titleKo: 'AI 데이터 분석 및 업무 자동화 실무 (강북 실습1)',
    titleEn: 'AI Data Analytics & Workflow Automation Practice',
    roleKo: '데이터 분석 & 대시보드 개발 (실습1_260820)',
    roleEn: 'Data Analyst & Dashboard Engineer',
    organizationKo: 'AI데이터분석 및 업무자동화 실무 (강북)',
    organizationEn: 'AI Data Analytics & Automation Practice',
    category: 'security',
    period: '2026.08',
    detailsKo: [
      '마케팅 채널별 성과 데이터(네이버, 구글, 메타, 카카오) 수집 및 KPI 연산 자동화 파이프라인 구축',
      'ROAS(382%), CAC, CVR 시각화 대시보드(market_channel_kpi.html) 제작 및 실시간 배포',
      'AI 기반 성과 이상치 자동 감지 및 채널별 예산 리밸런싱 추천 알고리즘 연동',
    ],
    detailsEn: [
      'Automated marketing channel performance metrics ingestion and KPI calculations',
      'Constructed live interactive analytics dashboard (market_channel_kpi.html) for ROAS & CAC',
      'Integrated AI anomaly detection rules and budget optimization algorithms',
    ],
  },
  {
    id: 'act-wj-part',
    titleKo: '웅진컴퍼스 (Woongjin Compass) - 빅티쳐',
    titleEn: 'Woongjin Compass - Big Teacher (Part-time)',
    roleKo: '빅티쳐 (Part-time)',
    roleEn: 'Operations & Academic Assistant',
    organizationKo: '웅진컴퍼스',
    organizationEn: 'Woongjin Compass',
    category: 'corporate',
    period: '2020.12 ~ 2022.06',
    detailsKo: [
      '업무 상황 모니터링, 일일/주간 업무 상황 보고 및 표준 업무 가이드라인 제작·관리',
      '빅클래스(실시간 온라인 초등 영어 수업) 실시간 보조 및 학생/학부모 피드백 체계적 관리',
      '프로세스 표준화 및 매뉴얼 구축을 통해 수업 운영 안정성과 사용자 만족도 향상 기여',
    ],
    detailsEn: [
      'Prepared operational status reports and authored standardized operational guidelines',
      'Managed live online English sessions, coordinated real-time feedback loops with learners and parents',
      'Enhanced operational stability by standardizing instruction manuals and feedback procedures',
    ],
  },
  {
    id: 'act-wj-intern',
    titleKo: '웅진컴퍼스 SWCD 기업현장실습 (콘텐트개발팀 인턴)',
    titleEn: 'Woongjin Compass - Content Development Team Intern',
    roleKo: '콘텐트개발팀 인턴',
    roleEn: 'Content Development Intern',
    organizationKo: '웅진컴퍼스',
    organizationEn: 'Woongjin Compass',
    category: 'corporate',
    period: '2020.07 ~ 2020.08',
    detailsKo: [
      '영어 교재 개발 관련 해외 원문 자료 번역, 데이터 정리, 부가 학습 자료 기획 및 제작',
      '출판 교재, 디지털 부가자료 및 원어민 오디오 스크립트 정밀 검수/교정(Proofreading)',
      '원고 완성도 및 오류 제로화를 목표로 한 꼼꼼한 품질 보증(QA) 실무 경험',
    ],
    detailsEn: [
      'Translated research materials, organized academic datasets, and planned supplementary learning assets',
      'Proofread and verified textbook scripts, digital multimedia resources, and native speaker audio scripts',
      'Demonstrated rigorous attention to detail and quality assurance standards in publication workflows',
    ],
  },
  {
    id: 'act-human-rights',
    titleKo: '제11회 세계인권도시포럼 번역자원활동가',
    titleEn: '11th World Human Rights Cities Forum - Translation Volunteer',
    roleKo: '번역자원활동가 (한영 / 영한)',
    roleEn: 'Bilingual Translator',
    organizationKo: '세계인권도시포럼 (WHRCF)',
    organizationEn: 'World Human Rights Cities Forum',
    category: 'global',
    period: '2021.04 ~ 2021.12',
    detailsKo: [
      '국제 컨퍼런스 공식 인권 자료집, 연사 발표문, 세션 아젠다 한영/영한 정밀 번역',
      '국제기구 및 해외 지자체 관계자용 영문 공식 커뮤니케이션 문서 감수 지원',
      '다국적 이해관계자가 참여하는 포럼의 원활한 정보 공유에 기여',
    ],
    detailsEn: [
      'Accurate bilingual translation of conference publications, keynote speeches, and session agendas',
      'Proofread official English correspondences for international municipal and NGO leaders',
      'Facilitated cross-border dialogue and international cooperation throughout the multi-month forum',
    ],
  },
  {
    id: 'act-moin',
    titleKo: '모인 글로벌 프렌즈 8기 (크리에이터팀)',
    titleEn: 'Moin Global Friends 8th - Creator Team',
    roleKo: '크리에이터팀 팀원',
    roleEn: 'Content Creator',
    organizationKo: '(주)모인 (MOIN Overseas Transfer)',
    organizationEn: 'MOIN Global Friends',
    category: 'global',
    period: '2021.04 ~ 2021.07',
    detailsKo: [
      '해외 유학, 해외 생활, 글로벌 문화 관련 영상 및 블로그 콘텐츠 기획, 제작 및 직접 출연',
      '해외 송금 핀테크 서비스의 핵심 장점을 알기 쉽게 전달하는 비주얼 콘텐츠 제작 및 스튜디오 홍보',
      '디지털 채널을 통한 브랜드 인지도 확산 및 타깃 사용자 인터랙션 증대 기여',
    ],
    detailsEn: [
      'Planned, produced, and featured in digital media content centered on study abroad and global cultures',
      'Communicated key benefits of fintech remittance services through engaging storytelling and visual assets',
      'Amplified brand visibility and audience engagement across major social and streaming channels',
    ],
  },
  {
    id: 'act-munscr',
    titleKo: 'MUNSCR (모의 한반도 평화·통일 대회)',
    titleEn: 'MUNSCR - Organizing Committee & Press',
    roleKo: 'Organizing Committee, Press',
    roleEn: 'Organizing Committee & Press Lead',
    organizationKo: 'MUNSCR (Model United Nations for Successful Corean Reunification)',
    organizationEn: 'MUNSCR',
    category: 'global',
    period: '2020.10 ~ 2021.05',
    detailsKo: [
      '국제 모의 유엔 행사 전반 기획, 홍보 타임라인 수립 및 공식 홍보 제작물 총괄',
      '위원회별 의제 취재, 영문/국문 기사 작성, 주요 연사 및 참가자 인터뷰 진행',
      '조직위원회 내 원활한 일정 조율과 미디어 배포를 주도하여 행사 성공적 개최 견인',
    ],
    detailsEn: [
      'Spearheaded event planning, marketing campaigns, and official promotional asset production',
      'Reported on committee debates, authored press releases in English/Korean, and conducted keynote interviews',
      'Coordinated cross-functional schedules and media distribution ensuring conference success',
    ],
  },
  {
    id: 'act-council',
    titleKo: '제49대 / 제50대 서울여자대학교 영어영문학과 학생회',
    titleEn: 'Seoul Women\'s Univ. English Dept. Student Council (49th & 50th)',
    roleKo: '집행부, 홍보국장',
    roleEn: 'Director of Public Relations',
    organizationKo: '서울여자대학교 영어영문학과 학생회',
    organizationEn: 'SWU English Dept. Student Council',
    category: 'global',
    period: '2017.03 ~ 2018.12',
    detailsKo: [
      '학과 주요 행사(원어 연극, 학술제, 신입생 오리엔테이션) 기획 및 예산/일정 관리',
      '홍보국장으로서 카드뉴스, 포스터, 온·오프라인 홍보물 디자인 및 소통 채널 총괄',
      '구성원 간 원활한 정보 전달과 높은 참여율을 이끌어내며 탁월한 리더십과 협업 발휘',
    ],
    detailsEn: [
      'Organized department events, academic conferences, and freshman orientations',
      'Led the PR department, designing visual graphics, editorial posters, and managing student communication channels',
      'Fostered high community participation through transparent announcements and proactive team leadership',
    ],
  },
];

export const certificatesData: CertificateItem[] = [
  {
    nameKo: '컴퓨터활용능력 1급',
    nameEn: 'Computer Specialist Level 1',
    issuerKo: '대한상공회의소',
    issuerEn: 'Korea Chamber of Commerce and Industry',
    date: '2021.07.02',
    type: 'National Technical Qualification',
  },
  {
    nameKo: '운전면허 2종 보통',
    nameEn: 'Driver\'s License (Class 2)',
    issuerKo: '경찰청 (도로교통공단)',
    issuerEn: 'National Police Agency, Korea',
    date: '2021.04.26',
    type: 'National License',
  },
  {
    nameKo: 'NCS 정보보안 전문가 과정 (보안엔지니어링)',
    nameEn: 'NCS Security Engineering Professional (20010206)',
    issuerKo: '고용노동부 / KH정보교육원',
    issuerEn: 'Ministry of Employment and Labor / KH Institute',
    date: '2022.11',
    type: 'Professional Engineering Training',
  },
  {
    nameKo: 'Deloitte Digital Assurance Specialist',
    nameEn: 'Deloitte Digital Assurance Specialist',
    issuerKo: '딜로이트 안진회계법인',
    issuerEn: 'Deloitte Anjin LLC',
    date: '2022.11 ~ Present',
    type: 'Corporate Professional Role',
  },
];

export const technicalSkills = {
  assurance: [
    'IT 감사 (IT Audit)',
    'IT 내부회계관리제도 (ITGC)',
    '자동통제 (ITAC)',
    'SOC 1 / SOC 2 Type II',
    'SSAE 18 / ISAE 3402',
    '위험 및 통제 매트릭스 (RCM)',
    '중요 정보 생성 보고서 (IPE) 검증',
    '직무분리 (SoD) 분석',
  ],
  security: [
    'NCS 보안엔지니어링 (20010206)',
    '서버 보안 점검 (Linux / Windows)',
    'DB 보안 및 접근통제 (DBMS)',
    '네트워크 보안 (Firewall, IDS/IPS)',
    '취약점 분석 및 패치 관리',
    '계정 및 권한 관리 (IAM / MFA)',
    '암호화 및 감사 로그 관리',
  ],
  toolsAndLangs: [
    'SAP ERP System Audit',
    'SQL Query & Database Inspection',
    'Wireshark & Packet Analysis',
    'MS Office (Excel / VBA / Word / PPT)',
    'Bilingual English (Professional Fluency)',
    'Technical Documentation & Reporting',
  ],
};

export const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    questionKo: 'IT 감사(IT Audit)와 일반 회계감사는 어떻게 연계되나요?',
    questionEn: 'How does an IT Audit correlate with a statutory Financial Audit?',
    answerKo:
      '현대 기업의 거의 모든 재무 거래는 ERP 및 핵심 정보시스템을 통해 자동 생성·처리·기록됩니다. IT 감사는 이 시스템들이 올바르게 작동하고 있는지, 권한이 없는 자의 임의 수정이나 시스템 로직 오류로 인해 재무제표가 왜곡될 위험이 없는지를 사전 점검하여 회계감사의 신뢰성을 기술적으로 뒷받침합니다.',
    answerEn:
      'In modern enterprises, financial transactions are generated, processed, and recorded through ERPs and databases. An IT Audit verifies that these systems operate securely and reliably, preventing unauthorized modifications or algorithmic bugs that could misstate financial reports, thereby underpinning financial audit credibility.',
  },
  {
    id: 'faq-2',
    questionKo: 'ITGC(일반통제)와 ITAC(응용통제)의 차이는 무엇인가요?',
    questionEn: 'What is the difference between ITGC and ITAC in internal accounting controls?',
    answerKo:
      'ITGC(IT General Controls)는 프로그램 개발, 변경, 접근통제, 시스템 운영 등 전사 정보기술 인프라를 안전하게 관리하기 위한 포괄적인 기반 통제입니다. 반면 ITAC(IT Application Controls)는 특정 비즈니스 애플리케이션(예: ERP) 내에서 금액 자동 계산, 중복 입력 방지, 승인 인터페이스 등 업무 로직 자체에 내장된 자동화 통제를 의미합니다.',
    answerEn:
      'ITGC covers overarching controls governing infrastructure, user access, program changes, and operations across the IT environment. ITAC refers to automated application-level controls embedded within software (such as automated reconciliations, validation rules, and transaction limits) preventing processing errors.',
  },
  {
    id: 'faq-3',
    questionKo: 'SOC 1과 SOC 2 보고서의 핵심적인 차이점은 무엇인가요?',
    questionEn: 'What is the primary difference between SOC 1 and SOC 2 reports?',
    answerKo:
      'SOC 1(SSAE 18 / ISAE 3402)은 고객사의 "재무보고 내부통제"에 직접적인 영향을 미치는 서비스(예: 급여 대행, 자산 운용 시스템, 핵심 ERP 호스팅)에 집중합니다. 반면 SOC 2는 클라우드 SaaS나 데이터센터 등의 "보안성(Security), 가용성(Availability), 처리 무결성(Processing Integrity), 기밀성(Confidentiality), 개인정보보호(Privacy)"를 검증하는 데 주안점을 둡니다.',
    answerEn:
      'SOC 1 focuses on internal controls relevant to user entities\' financial reporting (e.g., payroll processing, core accounting platforms). SOC 2 evaluates internal controls against AICPA Trust Services Criteria—Security, Availability, Processing Integrity, Confidentiality, and Privacy—essential for cloud, SaaS, and technology service providers.',
  },
  {
    id: 'faq-4',
    questionKo: '비즈니스 언어와 IT 보안 엔지니어링을 결합한 강점은 무엇인가요?',
    questionEn: 'What is the advantage of combining global business communication with technical security?',
    answerKo:
      'IT 감사와 SOC 인증은 개발자/엔지니어의 기술적 언어와 회계사/경영진의 비즈니스 언어 사이의 간극을 메우는 작업입니다. 영어영문학 및 글로벌 비즈니스 감각과 NCS 정보보안 엔지니어링 실무 경험을 겸비하여, 복잡한 기술 아키텍처를 정확히 이해하고 이를 국제 표준 감사 보고서로 명확하게 번역·전달하는 차별화된 역량을 발휘합니다.',
    answerEn:
      'Digital assurance requires bridging the gap between technical IT infrastructure and executive/audit compliance. Combining native-level English fluency and international communication with formal security engineering training enables precise comprehension of technical architectures and crystal-clear translation into authoritative global assurance reports.',
  },
];
