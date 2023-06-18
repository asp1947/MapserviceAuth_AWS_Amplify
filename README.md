# MapserviceAuth_AWS_Amplify
AWS Amplify의 cognito 인증 절차를 위한 React 기반 웹페이지 소스코드 입니다.

웹소스는 AWS cognito를 사용하여 인증기능을 구현하고, 로그인 사용자를 [EC2 인스턴스(관련리포지토리)]() 로 리다이렉트 하기위한 내용이 포함되어 있습니다.

이하의 내용은 해당 프로젝트를 사용하기 위한 간략한 설명이며, 자세한 내용은

https://docs.amplify.aws/start/getting-started/installation/q/integration/react/#sign-up-for-an-aws-account

를 참조해 주시길 바랍니다.

## 권장개발환경

- Node.js v14.x 이후버전
- npm v6.14.4 이후버전
- AWS 콘솔 계정 소유

## 빠른 사용방법

### 0. React 프로젝트 생성
git을 통해서 소스코드를 받지않고 로컬에서 React 프로젝트를 생성하는 방법입니다.

    npx create-next-app [프로젝트 이름]

React 프로젝트 생성방법과 관련된 사항은 https://react.dev/learn/start-a-new-react-project 를 참조해주시길 바랍니다.

이후에는 리포지트리에 저장된 App.js 내용을 React 프로젝트에 반영하거나 소스코드 자체를 붙여넣기 해주세요.

### 1. Amplify 설정

    amplify configure

AWS의 Amplify와 연결하기위해 IAM 사용자와 규칙을 생성하고, 그 인증 내용을 프로젝트에 설정하는 과정을 도와주는 명령어입니다.

### 2. Amplify 프로젝트 초기화

    amplify init

프로젝트의 Amplify 의 설정을 초기화하는 과정입니다.

### 3. Amplify Cognito 인증 모듈추가

    amplify add auth

프로젝트에서 Cognito 관련 모듈을 추가하는 명령어입니다. 설정이 끝나면 cognito 서비스 생성을 위한 옵션이 추가됩니다.
- 로그인은 이메일주소, 비밀번호는 8자이상(특수문자 및 대소문자 요구사항없음)
- 인증과정에서 이메일주소를 기반으로 인증코드가 들어있는 noreply 메일을 보냄.
- 비밀번호 찾는 기능또한 이메일을 사용함.

이 단계까지온 다음.

    npm start
    
해당 명령어를 입력하여 React 프로젝트가 제대로 작동하는지 확인합니다. 대부분의 경우 http://localhost:3000 에서 테스트가 될것입니다.
프로젝트상에서 문제가 없다면 다음단계로 이동합니다.

### 4. 백엔드 앱 배포

    amplify push
   
Amplify로 백엔드 앱을 배포합니다. 해당과정에서 백엔드 운용을 위한 AWS 서비스가 생성됩니다.

### 5. 프론트엔드 웹앱 배포

    amplify add hosting
   
웹호스팅을 위한 명령어입니다. 해당 절차가 끝나면 다음과 같은 코드를 입력하면 됩니다.

    amplify publish
    
amplify push와의 차이점은 기본 프로젝트에서 호스팅 기능이 추가되었다는 점에서 차이점이 있습니다.

github를 통한 원격 지속적 배포(CI/CD)를 원치않으신다면 수동으로 배포를 할 수도 있습니다.

이 단계까지 올경우 AWS Amplify 에서 프론트엔드 웹 호스팅이 진행됩니다.

이후에는 프로젝트의 변동사항이 있을때마다 amplify publish 를 실행하여 변동사항을 반영해주시길 바랍니다.



