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
- 배포 주소: `https://starding1231.github.io/n8n-AI/`
- 배포 직후에 **Jekyll Error**나 **404 에러**가 난다면, GitHub에서 `docs` 폴더를 제대로 인식하지 못한 것입니다. 깃허브에 `docs` 폴더가 실제로 올라갔는지 확인해 주세요.

### 주의사항
- `docs/.nojekyll` 파일이 있어야 깃허브의 Jekyll 처리 과정을 건너뛰고 정상적으로 배포됩니다. (현재 생성되어 있습니다.)
- **빈 화면**이 나오는 문제는 `vite.config.ts`의 `base` 경로와 `main.tsx`의 `basename` 설정을 통해 해결되었습니다.


### 최근 업데이트
- **업데이트 일시**: 2026-05-14 11:23 (빌드 오류 및 파일 탐색기 표시 문제 완벽 해결)

### ⚠️ 중요: docs 폴더가 안 보일 때 (Troubleshooting)
1. **파일 탐색기**: AI Studio 파일 탐색기에서 `docs` 폴더가 간혹 사라져 보일 수 있지만, `npm run build`를 실행하면 내부적으로 항상 생성됩니다.
2. **빨간색 오류 아이콘 해결**: 빌드된 JS 파일에서 발생하던 문법 오류 표시를 `tsconfig.json` 수정을 통해 제거했습니다. 이제 깨끗한 상태로 작업하실 수 있습니다.
3. **GitHub Sync**: 깃허브로 동기화(Sync/Export)할 때 **반드시 `docs` 폴더가 포함**되어야 합니다. 만약 저장소에 `docs` 폴더가 없다면 GitHub Pages 설정에서 폴더를 선택할 수 없으며 404 에러가 발생합니다.

### 이미지 및 배포 설정
- **Base URL**: `./` (vite.config.ts - 저장소 이름에 상관없이 작동하는 **상대 경로** 방식)
- **React Router**: `HashRouter` 사용 (GitHub Pages 호환성 극대화)
- **빌드 위치**: `/docs` 폴더 (GitHub Pages 설정: Branch `main`, Folder `/docs` 필수)

### 🚀 GitHub Pages 자동 배포 (GitHub Actions 방식)
더 이상 `docs` 폴더를 수동으로 관리하실 필요가 없습니다! 

1. **배포 설정 변경**: GitHub 저장소 `Settings` -> `Pages` 이동
2. **Build and deployment > Source**: **"GitHub Actions"**를 선택하세요.
3. **완료**: 이제 AI Studio에서 **Export to GitHub**를 하면, GitHub가 자동으로 소스를 읽어 빌드하고 배포합니다.

**현재 설정**:
- 빌드 출력: `/dist` (표준)
- 자동 배포: `.github/workflows/deploy.yml` 추가됨
- 상대 경로: `./` 설정으로 어떤 URL에서도 작동함

2. **로컬 빌드 시 오류 해결**:
   로컬 컴퓨터의 터미널(GitHub Desktop 터미널 등)에서 빌드가 안 될 경우 다음 명령어를 순서대로 입력하세요:
   ```bash
   # 1. 기존 설치 파일 제거
   rm -rf node_modules package-lock.json docs
   
   # 2. 의존성 재설치
   npm install
   
   # 3. 다시 빌드 (이 과정이 성공해야 docs 폴더가 생깁니다)
   npm run build
   
   # 4. 변경사항 확인 후 push
   git add .
   git commit -m "Fix build and docs folder"
   git push origin main
   ```

3. **GitHub Pages 설정 재확인**:
   - `Settings` -> `Pages` 이동
   - `Build and deployment` -> `Source`: **Deploy from a branch**
   - `Branch`: **main**, 폴더: **`/docs`** 가 정확히 선택되어야 합니다.
   - **중요**: 설정 변경 후 상단에 "Your site is live at..." 링크가 뜰 때까지 약 1분간 기다리세요.

### 개발 및 빌드 명령어
```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드 (docs 폴더 생성)
npm run build
```

빌드된 파일은 `docs` 폴더에 생성됩니다.
