import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App({ signOut, user }) {
  const displayWelcomeMessage = async () => {
    try {
      if (user) {
        const currentUser = await Auth.currentAuthenticatedUser();
        const email = currentUser.attributes.email;
        document.getElementById('message').innerText = '환영합니다, ' + email + '님!';
      } else {
        document.getElementById('message').innerText = '비회원으로 사용중입니다.';
      }
    } catch (error) {
      console.log('Error retrieving user information: ', error);
    }
  };

  const redirectToEC2 = async () => {
    try {
      if (user) {
        const currentUser = await Auth.currentAuthenticatedUser();
        const email = currentUser.attributes.email;
        window.location.href = `http://[EC2주소]/?email=${encodeURIComponent(email)}`;
      } else {
        window.location.href = 'http://[EC2주소]/';
      }
    } catch (error) {
      console.log('Error redirecting to EC2: ', error);
    }
  };

  displayWelcomeMessage();

  return (
    <>
      <h1 id="message"></h1>
      {user && <button onClick={signOut}>로그아웃</button>}
      <p>
        웹 서비스로 이동할려면{' '}
        <a href="#" onClick={redirectToEC2}>
          여기를 클릭하세요
        </a>
        .
      </p>
    </>
  );
}

export default withAuthenticator(App);
