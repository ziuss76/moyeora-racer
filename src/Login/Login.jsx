import { useState } from 'react';
import styled from 'styled-components';
import LoginContainer from './LogInContainer';
import Headline from './Headline';
import LoginInput from './LogInInput';
import LoginButton from './LogInButton';
import OrLineText from './OrLine';
import LittleText from './LittleText';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginContainer>
      <Headline title='로그인' />
      <LoginInput
        title='이메일'
        type='text'
        placeholder='이메일 입력'
        name='userEmail'
        onChange={(e) => setEmail(e.target.value)}
      />
      <LoginInput
        title='비밀번호'
        type='password'
        placeholder='비밀번호 입력'
        name='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginButton color='darkPurple' value='이메일로 계속하기' />
      <OrLineText text='또는' />
      <LoginButton color='white' value='구글계정으로 로그인' />
      <LittleText text='아직 회원이 아니신가요? 3초 만에 가입하기' />
    </LoginContainer>
  );
};

export default Login;
