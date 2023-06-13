import {useState} from "react";
import {signUp} from "../../api/auth";

import Input from "../ui/Input";
import Button from "../ui/Button";

export default function SignUp({onLogin, onClose}) {
  const [userInfo, setUserInfo] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordCheck: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    let flag = true;

    if (userInfo.password !== userInfo.passwordCheck) {
      setErrorMessage('비밀번호가 일치하지 않습니다!');
      flag = false;
    } else if (userInfo.password.trim().length < 6) {
      setErrorMessage('비밀번호를 6자리 이상으로 입력해 주세요!');
      flag = false;
    } else setErrorMessage('');
    return flag;
  }

  const handleChangeValue = (e) => {
    const {name, value} = e.target;
    setUserInfo(prev => ({...prev, [name]: value}));
  }

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (validate()) {
      const data = await signUp(userInfo)
      if (!data) {
        return onClose();
      }
      setErrorMessage('가입되어 있는 이메일 입니다.')
    }
  }

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSignUp}>
      <Input
        placeholder='이름'
        type='text'
        name='displayName'
        required
        value={userInfo.displayName}
        onChange={handleChangeValue}
      />
      <Input
        placeholder='아이디'
        type='email'
        name='email'
        required
        value={userInfo.email}
        onChange={handleChangeValue}
      />
      <Input
        placeholder='비밀번호'
        type='password'
        name='password'
        required
        value={userInfo.password}
        onChange={handleChangeValue}
      />
      <Input
        placeholder='비밀번호 확인'
        type='password'
        name='passwordCheck'
        required
        value={userInfo.passwordCheck}
        onChange={handleChangeValue}
      />
      {errorMessage && <p className='text-red-600 text-sm'>{errorMessage}</p>}

      <Button teype='submit' text='회원가입'/>
      <Button teype='button' text='뒤로가기' onClick={onLogin}/>
    </form>
  )
}