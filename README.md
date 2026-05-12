# 리코멘드 Landing Page

이 프로젝트는 Vite + React 기반의 랜딩 페이지입니다.

## GitHub Pages 배포 방법

이 프로젝트는 현재 두 가지 방법으로 배포할 수 있습니다.

### 방법 1: 터미널을 사용하는 경우 (권장)
로컬 컴퓨터의 터미널에서 다음 명령어를 순서대로 입력하세요.
```bash
npm install
npm run deploy
```
이 명령어는 프로젝트를 빌드한 후 `gh-pages` 브랜치에 자동으로 업로드합니다. 그 후 GitHub Settings > Pages에서 Source를 `gh-pages` 브랜치로 설정하면 됩니다.

### 방법 2: 터미널이나 GitHub Actions를 사용할 수 없는 경우 (수동 업로드)
1. AI Studio (현재 화면) 하단의 Terminal에서 `npm run build`를 입력하여 `dist` 폴더를 생성합니다. (이미 생성되어 있다면 생략 가능)
2. 왼쪽 파일 탐색기에서 `dist` 폴더 내부의 모든 파일을 다운로드합니다.
3. 자신의 GitHub 리포지토리에 `gh-pages`라는 이름의 새로운 브랜치를 생성합니다.
4. `gh-pages` 브랜치에 다운로드한 `dist` 폴더 안의 파일들을 **루트(최상위)**에 업로드합니다. (`dist` 폴더 자체를 올리는 것이 아니라 그 내용물만 올립니다.)
5. GitHub 리포지토리의 **Settings > Pages** 메뉴에서 **Build and deployment > Source**를 `Deploy from a branch`로 선택하고 브랜치를 `gh-pages`로 지정합니다.

### 주요 설정 정보
- **배포 주소**: `https://starding1231.github.io/-n8n-AI-/`
- **Base Path**: `/-n8n-AI-/` (vite.config.ts에 설정됨)
- **중요**: 배포 후 빈 화면이 나온다면 브라우저의 개발자 도구(F12) 콘솔에서 경로 오류가 있는지 확인하세요.


## 수동 빌드 방법

```bash
npm install
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.
