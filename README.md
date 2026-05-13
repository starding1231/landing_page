# 리코멘드 Landing Page

이 프로젝트는 Vite + React 기반의 랜딩 페이지입니다.

## GitHub Pages 배포 방법 ( docs 폴더 방식 )

현재 GitHub Actions 대신 **`main` 브랜치의 `/docs` 폴더**를 사용하는 방식으로 설정되어 있습니다.

### 1단계: AI Studio에서 변경사항 Push 하기
1. 왼쪽 파일 탐색기에 **`docs`** 폴더가 있는지 확인합니다.
2. 상단 메뉴의 **Settings > Export to GitHub** (또는 좌측 하단의 GitHub 아이콘)을 클릭합니다.
3. **"Stage and commit all changes"** 버튼이 활성화되어 있다면 클릭하여 깃허브에 반영합니다.
   - 만약 이 버튼이 **비활성화**되어 있다면, 이미 모든 파일이 반영된 상태이거나 시스템 지연일 수 있습니다. 페이지를 새로고침(F5) 해보세요.

### 2단계: GitHub 저장소 설정 (중요)
1. 자신의 GitHub 리포지토리 페이지로 이동합니다.
2. **Settings > Pages** 메뉴로 들어갑니다.
3. **Build and deployment > Source**를 **"Deploy from a branch"**로 선택합니다.
4. **Branch**를 `main`으로 선택하고, 그 옆의 폴더 드롭다운에서 **`/docs`**를 선택한 후 **Save**를 누릅니다.

### 3단계: 배포 확인
- 배포 주소: `https://starding1231.github.io/-n8n-AI-/`
- 배포 직후에 **Jekyll Error**나 **404 에러**가 난다면, GitHub에서 `docs` 폴더를 제대로 인식하지 못한 것입니다. 깃허브에 `docs` 폴더가 실제로 올라갔는지 확인해 주세요.

### 주의사항
- `docs/.nojekyll` 파일이 있어야 깃허브의 Jekyll 처리 과정을 건너뛰고 정상적으로 배포됩니다. (현재 생성되어 있습니다.)
- **빈 화면**이 나오는 문제는 `vite.config.ts`의 `base` 경로와 `main.tsx`의 `basename` 설정을 통해 해결되었습니다.


### 최근 업데이트
- **업데이트 일시**: 2026-05-13 00:30 (이미지 정적 자산화 및 절대 경로 고정)

### 이미지 및 배포 설정
- **Base URL**: `/-n8n-AI-/` (vite.config.ts)
- **React Router**: `HashRouter` 사용 (GitHub Pages 호환성 극대화)
- **이미지 관리**: `src/assets/images`에 보관하며 코드에서 `import`하여 사용합니다. (Vite 번들링에 포함되어 경로가 자동 관리됨)
- **빌드 위치**: `/docs` 폴더 (GitHub Pages 설정 필수)

## 수동 빌드 방법

```bash
npm install
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.
