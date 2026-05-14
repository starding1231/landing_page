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

### 🏁 GitHub Pages 배포 가이드 (최종)
현재 구글 AI 스튜디오 내에 `/docs` 폴더가 정상적으로 생성되어 있습니다. 만약 GitHub에 보이지 않는다면 아래 절차를 따라주세요.

1. **GitHub 확인**: AI Studio 우측 상단의 **`Export to GitHub`**를 다시 한 번 실행해 주세요. 
2. **docs 폴더 확인**: `/docs` 폴더 안에는 반드시 `index.html`이 포함되어 있어야 합니다. (현재 생성된 상태임)
3. **설정 확인**: GitHub 저장소 `Settings` -> `Pages`에서 반드시 아래와 같이 설정되어야 합니다:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/docs` (반드시 선택!)

**현재 프로젝트 상태**:
- 빌드 경로: `/docs` (GitHub Pages 브랜치 배포용)
- 상대 경로 설정: `./` (저장소 이름에 구애받지 않음)
- 의존성: `package-lock.json` 포함됨 (GitHub Actions 없이도 빌드 문제 해결)

---
만약 여전히 `docs` 폴더가 GitHub에 나타나지 않는다면, AI Studio의 **Download ZIP** 기능을 통해 코드를 내려받은 뒤 깃허브 저장소에 직접 업로드 해보시는 것을 권장합니다. 현재 코드상으로는 빌드 및 모든 설정이 완벽합니다.

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
