# 🚀 Backend Portfolio Platform

> 다양한 도메인을 연결하여 **운영 가능한 시스템을 설계하는 백엔드 개발자 포트폴리오**

---

## 📌 Overview

본 프로젝트는 기존에 보유하고 있는 **Spring Boot 템플릿**과 **React 템플릿**을 기반으로
실제 서비스 구조와 유사한 형태로 구성한 **포트폴리오 플랫폼**입니다.

단순 소개 페이지가 아닌,
**API 기반 데이터 관리 + 프론트 연동 구조**를 통해
실무형 아키텍처를 직접 구현하는 것을 목표로 합니다.

---

## 🎯 Key Goals

* 포트폴리오를 단순 UI가 아닌 ==서비스 형태로 구성==
* Spring Boot 기반 ==REST API 설계 역량 강조==
* React 기반 ==상태 관리 및 화면 구조 설계==
* 실제 운영을 고려한 ==확장 가능한 구조 설계==

---

## 🏗️ Architecture

```
[ React (Vite) ]
        ↓
[ REST API ]
        ↓
[ Spring Boot ]
        ↓
[ DB (MariaDB / Oracle) ]
```

### 핵심 포인트

* FE/BE 완전 분리 구조
* RESTful API 기반 통신
* DTO 기반 응답 표준화
* 확장 가능한 계층 구조 (Controller → Service → Repository)

---

## ⚙️ Tech Stack

### Backend

* Java 17
* Spring Boot
* Spring Security
* JPA / Querydsl
* Gradle

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router

### Infra

* Docker
* Nginx
* Linux

---

## 📂 Project Structure

### Backend

```
backend/
 ├── controller/
 ├── service/
 ├── repository/
 ├── domain/
 ├── dto/
 ├── config/
 └── exception/
```

### Frontend

```
frontend/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── services/
 ├── router/
 └── assets/
```

---

## 🔥 Features

### 1. 프로젝트 관리 API

* 프로젝트 목록 조회
* 상세 정보 조회
* 기술 스택 기반 필터링

### 2. 공통 응답 구조

* BaseResponse<T> 기반 응답 통일
* 성공 / 실패 표준화

### 3. 예외 처리

* Global Exception Handler 적용
* 커스텀 에러 코드 관리

### 4. 인증 구조 (확장 예정)

* JWT 기반 인증
* Swagger 인증 연동

### 5. 파일 처리 (확장 예정)

* 이미지 업로드 / 다운로드
* ZIP 다운로드

---

## 🧠 Design Considerations

### 1. 단순 CRUD가 아닌 구조 중심 설계

* 계층 분리
* DTO 매핑
* Querydsl 활용

### 2. 운영 관점 고려

* 로그 구조 설계
* 예외 흐름 관리
* 확장 가능한 API 설계

### 3. 재사용 가능한 템플릿 기반 개발

* 공통 모듈화
* 빠른 신규 프로젝트 적용 가능

---

## 🚀 Getting Started

### 1. Backend 실행

```bash
cd backend
./gradlew bootRun
```

### 2. Frontend 실행

```bash
cd frontend
npm install
npm run dev
```

---

## 📈 Future Improvements

* 관리자 페이지 (프로젝트 등록/수정)
* Swagger 기반 API 문서 고도화
* CI/CD 파이프라인 구축
* 모니터링 (로그, 헬스체크)
* RPA / OCR 연동 포트폴리오 확장

---

## 👨‍💻 Author

Backend Developer

* Java / Spring Boot 기반 시스템 설계 및 개발
* 금융, MES, 전자문서, RPA 프로젝트 경험
* API 설계 / 데이터 모델링 / 운영 안정성 중심 개발

---

## 💡 Summary

이 프로젝트는 단순한 포트폴리오가 아니라
==“실제 운영 가능한 서비스 구조를 설계할 수 있는 개발자”==임을 보여주기 위한 결과물입니다.

---
