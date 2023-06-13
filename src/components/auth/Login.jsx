import {useState} from "react";
import {login} from "../../api/auth";

import Input from "../ui/Input";
import Button from "../ui/Button";

export default function Login({onSignUp, onClose}) {
  const [userInfo, setUserInfo] = useState({email: '', password: ''});
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeValue = (e) => {
    const {name, value} = e.target;
    setUserInfo(prev => ({...prev, [name]: value}));
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(userInfo);
      onClose();
    } catch (error) {
      setErrorMessage('아이디/비밀번호를 다시 입력해 주세요.')
    }
  }

  return (
    <form className='flex flex-col gap-2' onSubmit={handleLogin}>
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
      {errorMessage && <p className='text-red-600 text-sm'>{errorMessage}</p>}

      <Button teype='submit' text='로그인'/>
      <Button teype='button' text='회원가입' onClick={onSignUp}/>
    </form>
  )
}