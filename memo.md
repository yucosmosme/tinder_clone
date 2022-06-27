$ nvm ls
$ nvm use 16.15.1
$ npx create-react-app tinder_clone


무료아이콘 npm 다운받고 아이콘 찾아서 임포트 (아래처럼)
$ npm install @mui/material @emotion/react @emotion/styled
$ npm i @mui/icons-material
import PersonIcon from '@mui/icons-material/Person';

react-tinder-card 라이브러리 설치오류시
$ npm i react-tinder-card --legacy-peer-deps

프론트 파이어베이스에 배포
- firebase홈페이지 > 콘솔 > 프로젝트만들기
- Firebase CLI 설치
  $ npm install -g firebase-tools
- 프로젝트 초기화 (프론트 폴더 루트에서)
  $ firebase login
  $ firebase init
  --> 옵션: hosting, existing, 
  --> public directory: build (중요)
  --> single page? y (중요)
  --> yucosmosme/tinder_clone
  --> npm run build

- Firebase 호스팅에 배포
$ firebase deploy