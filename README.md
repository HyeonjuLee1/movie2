# 
자바스크립트&Vue.js 기초~실무 과정을 수료 후 배운 내용을 활용하여 
영화정보제공 사이트를 Vue.js로 구현하였습니다.

Composition API를 활용하였으며 데이터 상태관리는 Pinia 라이브러리를 사용하였습니다.

디자인
- OTT플랫폼 중 하나인 Wavve(웨이브)를 따라했습니다.
- 디자인은 웹 기준으로 코드 작성하였으며 반응형 디자인은 적용되어있지 않습니다.
- 사용자 경험 개선을 위해 Skeleton UI 적용하였습니다.

api
- TMDB에서 제공하는 api를 활용하여 영화정보를 가져왔습니다.

프로젝트 기능
- 메인화면에서 영화리스트를 확인할 수 있습니다. 영화 리스트는 스와이퍼가 가능합니다.
- 메인화면 상단의 배너는 기본이 autoplay이며 아이콘으로 stop 혹은 직접 조작이 가능합니다.
- 메인화면 왼쪽 상단 인풋에 키워드를 입력하면 영화 검색이 가능합니다.
- 영화 포스터를 클릭하면 영화 디테일 화면으로 이동하며 영화 정보와 예고편영상을 재생할 수 있습니다.
- 해당 프로젝트의 상단 베너를 제외한 데이터(예고편, 영화리스트, 비슷한 영화, 영화정보 등등)는 TMDB api에서 가져왔습니다.

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
