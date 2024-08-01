## 리액트 앱을 만든 후 GCP에서 생성한 웹서버에 호스팅하기


### 과정에 대한 간단한 설명
1. 리액트 앱을 만든 후 build합니다.
2. gitIgnore에서 build를 삭제해서 github에 빌드파일이 올라가게 합니다.
3. GCP VM Instance를 만든 후에 git clone해서 깃허브에 올라간 폴더를 가져옵니다.
4. nginx 설정을 조정해서 build파일이 나오게 만들었습니다.

### 이 방법에 대한 한계점
- 정적 파일만 가능합니다 즉 build가 끝난 파일만 올릴 수 있습니다.
- 최종 웹을 올린다면 크게 상관없지만 그게 아니라면 올릴때마다 nginx설정을 해줘야해서 번거롭습니다.
- 필요한건 build인데 깃 내용이 전부 올라가므로 리소스 낭비가 있습니다.

### 해결책 -> GPT에게 물어본 내용 정리
- Cloud Run을 활용해서 도커 컨테이너로 이미지화 한 후 이걸 이용해 서버리스로 만들어 사용하기
- App Engine으로 자동 확장 및 배포하기
