---
title: 양기현 - 이력서
description: 백엔드 개발자 양기현의 이력서입니다. Java(Spring Boot), Python(FastAPI) 기반 웹 백엔드 및 데이터 파이프라인·자동화 시스템을 설계·개발·운영합니다.
layout: ../layouts/Minimalist.astro
pdfLink: resume.pdf
---

# 양기현

bydhorizon0@naver.com | [github.com/bydhorizon0](https://github.com/bydhorizon0)

Java와 Python을 주력으로 웹 백엔드 서비스와 데이터 파이프라인을 설계·개발·운영해 온 백엔드 개발자입니다. 일 600개 이상 사이트의 비동기 스크래핑·ETL 시스템 구축부터 다종 문서 PDF 자동 변환 엔진 자체 개발까지, 반복 업무 자동화와 비용 절감 경험이 있습니다. 최근에는 Claude Code, Codex 등 AI 에이전트 도구에 프로젝트 규칙 문서를 적용해 개발 생산성과 업무 효율을 향상시키고 있습니다.

## 기술 스택

| 구분 | 기술 |
| --- | --- |
| Backend | `Java`, `Spring Boot`, `Python`, `FastAPI` |
| Database | `MySQL`, `PostgreSQL` |
| Frontend | `React`  |
| Infra & Tools | `Docker` `Docker Compose` `Claude Code` `Codex` |

## 경력

### ㈜ 비즈데이터

#### 기술개발팀 / 백엔드·소프트웨어개발 | 2022.07.20 – 현재

- **데이터 스크래핑 및 ETL 파이프라인 구축**: 일 600개 이상 사이트 대상 비동기 데이터 스크래핑 및 정제·가공 시스템 설계 및 운용
- **백엔드 API 개발 및 외부 데이터 연계**: Spring Boot / FastAPI 기반 백엔드 API 개발, SQL 기반 정밀 데이터 추출·무결성 검증 및 금융권(은행)·자사 서비스 대상 표준 포맷(Excel/JSON) 안전 제공
- **업무 프로세스 자동화 및 자체 엔진 개발**: Python 기반 다종 문서(HWP, Office, 이미지 등) PDF 비동기 자동 변환 모듈 자체 설계·개발로 원가 절감, Cron 및 Google Chat API 연동을 통한 일일 데이터 수집·알림 무중단 자동화 파이프라인 구축
- **AI Agent 도구 기반 개발 생산성 체계화**: Claude Code, Codex 등 AI 에이전트 도구에 프로젝트 규칙 문서 적용 및 업무 흐름 구조화

## 주요 프로젝트

### 공고수집 현황 대시보드 사이트

#### 백엔드 API 설계·개발 및 프론트엔드 대시보드 구축

- 스크래핑으로 수집된 데이터의 모니터링을 위해 지역별·시군구별·일별 수집 현황을 정밀하게 제공하는 데이터 시각화 웹 애플리케이션 개발
- React 및 차트 라이브러리를 활용해 사용자가 대용량 수집 현황을 직관적으로 파악할 수 있는 반응형 UI 컴포넌트 구축
- 백엔드 RESTful API 구현 및 Docker / Docker Compose를 활용한 컨테이너 기반 개발 환경·배포 구조 단일화

### 정책자금 데이터 자동 수집 파이프라인

#### 데이터 수집 파이프라인 기획 및 개발

- 600개 이상의 대상 사이트로부터 정책자금 데이터를 수집하는 비동기 스크래핑 시스템 구축
- `CompletableFuture`와 `Playwright`를 결합한 비동기 병렬 처리 아키텍처를 설계해 웹 페이지 수집 작업을 효율화
- User-Agent 로테이션, 동적 브라우저 옵션 설정, 렌더링 지연 제어, Proxy 서버 연동 등 Automated Anti-Bot 회피 기술을 적용해 수집 안정성 확보

### 이종 문서 자동 PDF 변환 및 클라우드 동기화 시스템

#### 파일 변환 및 동기화 프로세스 자동화 시스템 기획 및 개발

- 다양한 확장자(HWP, XLSX, DOCX, TXT, JPG 등)의 문서를 PDF로 일괄 변환하고 클라우드 저장소와 동기화하는 자동화 솔루션 개발
- 병렬 처리 구조를 적용해 CPU 및 I/O 병목 구간 성능 최적화
- 수작업 문서 변환 및 업로드 공정을 자동화하여 내부 운영 공수 단축 및 외부 상용 솔루션 도입 비용 절감

### 충북 & 충남 테크노파크(TP) 지역 데이터 및 성과관리 시스템

#### 백엔드 API 개발, GIS·차트 프론트엔드 구현 및 서비스 관리 | [충북 TP](http://smart.cbtp.or.kr/login) · [충남 TP](http://data.ctp.or.kr/login)

- Mapbox 및 Leaflet 기반 GIS 인터랙티브 맵과 ECharts를 연동해 충남·충북 지역 공공 데이터 시각화 화면 구축
- 성과 지표 데이터의 효율적 처리를 위해 표준 엑셀 템플릿 업로드·파싱·DB 저장 및 조회 데이터 엑셀 다운로드 API 개발 및 유지보수

### 정책자금 및 금융상품 맞춤 매칭 서비스 (Bizmoney)

#### MSA 기반 백엔드 API 개발 및 유지보수 | [비즈머니 서비스](https://bizmoney.ai/O_SD00)

- Spring Cloud Eureka 기반 MSA(Microservices Architecture) 환경에서 핵심 비즈니스 로직 및 API 개발
- 기존 B2B(금융권·공공기관) 중심 서비스에서 B2B/B2C 통합 개편 프로젝트 참여 및 서비스 확장 안정화
- 정기 수집된 정부지원 사업 공고 및 금융감독원 금융상품 데이터를 가공·분석해 기업 조건에 맞는 최적의 금융상품을 중개·추천하는 매칭 연동 알고리즘 API 개발
