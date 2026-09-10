export type Language = 'ko' | 'en';

export interface ProfileInfo {
  nameKo: string;
  nameEn: string;
  titleKo: string;
  titleEn: string;
  companyKo: string;
  companyEn: string;
  departmentKo: string;
  departmentEn: string;
  positionKo: string;
  positionEn: string;
  periodKo: string;
  periodEn: string;
  email: string;
  linkedin: string;
  birth: string;
  locationKo: string;
  locationEn: string;
  bioKo: string;
  bioEn: string;
}

export interface MetricStat {
  value: string;
  labelKo: string;
  labelEn: string;
  descKo: string;
  descEn: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  titleKo: string;
  titleEn: string;
  summaryKo: string;
  summaryEn: string;
  detailsKo: string[];
  detailsEn: string[];
  tags: string[];
}

export interface EngagementProject {
  id: string;
  number: string;
  titleKo: string;
  titleEn: string;
  categoryKo: string;
  categoryEn: string;
  clientTypeKo: string;
  clientTypeEn: string;
  objectiveKo: string;
  objectiveEn: string;
  scopeKo: string[];
  scopeEn: string[];
  outcomesKo: string[];
  outcomesEn: string[];
  hasLiveDemo?: boolean;
  liveDemoUrl?: string;
  localFilePath?: string;
  tags?: string[];
}

export interface EducationItem {
  institutionKo: string;
  institutionEn: string;
  degreeKo: string;
  degreeEn: string;
  period: string;
  statusKo: string;
  statusEn: string;
  locationKo: string;
  locationEn: string;
  descriptionKo: string[];
  descriptionEn: string[];
}

export interface ActivityItem {
  id: string;
  titleKo: string;
  titleEn: string;
  roleKo: string;
  roleEn: string;
  organizationKo: string;
  organizationEn: string;
  category: 'security' | 'corporate' | 'global';
  period: string;
  detailsKo: string[];
  detailsEn: string[];
}

export interface CertificateItem {
  nameKo: string;
  nameEn: string;
  issuerKo: string;
  issuerEn: string;
  date: string;
  type: string;
}

export interface FaqItem {
  id: string;
  questionKo: string;
  questionEn: string;
  answerKo: string;
  answerEn: string;
}
