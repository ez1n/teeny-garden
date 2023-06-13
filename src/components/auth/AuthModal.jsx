import {useRef, useState} from "react";
import {loginWithGoogle} from "../../api/auth";

import {FcGoogle} from "react-icons/fc"
import Login from "./Login";
import SignUp from "./SignUp";

export default function AuthModal({onClose}) {
  const [isLogin, setIsLogin] = useState(true);
  const modalRef = useRef();

  const handleClose = (e) => {
    if (modalRef.current === e.target) onClose();
  }

  const handleChangeMode = () => {
    setIsLogin(prev => !prev);
  }

  const handleLoginGoogle = () => {
    loginWithGoogle()
      .then(_ => onClose())
  }


  return (
    <div
      className='w-full h-full flex items-center justify-center fixed top-0 left-0 bg-backdrop'
      ref={modalRef}
      onMouseDown={handleClose}
    >
      <section className='w-96 p-5 flex flex-col gap-3 bg-white rounded-lg drop-shadow-xl z-1'>
        <h1 className='pb-3 text-2xl font-bold text-center border-b border-brand-secondary'>
          {isLogin ? '로그인' : '회원가입'}
        </h1>

        {isLogin && <Login onSignUp={handleChangeMode} onClose={onClose}/>}
        {!isLogin && <SignUp onLogin={handleChangeMode} onClose={onClose}/>}

        <hr className='my-3'/>

        <button
          className='flex items-center justify-center gap-4 bg-white py-1.5 px-4 rounded-sm border border-gray-200 hover:brightness-95'
          type='button'
          onClick={handleLoginGoogle}
        >
          <FcGoogle/>
          <span>구글 로그인</span>
        </button>
      </section>
    </div>
  )
}