import {useRef} from "react";

import {FcGoogle} from "react-icons/fc"
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function LoginModal({onClose}) {
  const modalRef = useRef();

  const onCloseModal = (e) => {
    if (modalRef.current === e.target) onClose();
  }

  const onLogin = (e) => {
    e.preventDefault();
  }

  return (
    <div
      className='w-full h-full flex items-center justify-center fixed top-0 left-0 bg-backdrop'
      ref={modalRef}
      onMouseDown={onCloseModal}
    >
      <section className='w-96 p-5 flex flex-col gap-3 bg-white rounded-lg drop-shadow-xl z-1'>
        <h1 className='pb-3 text-2xl font-bold text-center border-b border-brand-secondary'>
          로그인
        </h1>
        <form className='flex flex-col gap-2' onSubmit={onLogin}>
          <Input placeholder='아이디' type='text'/>
          <Input placeholder='비밀번호' type='text'/>
          <Button teype='submit' text='로그인'/>
          <Button teype='button' text='회원가입'/>
        </form>

        <hr className='my-3'/>

        <button
          className='flex items-center justify-center gap-4 bg-white py-1.5 px-4 rounded-sm border border-gray-200 hover:brightness-95'
          type='button'
        >
          <FcGoogle/>
          <span>구글 로그인</span>
        </button>
      </section>
    </div>
  )
}