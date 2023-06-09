import {AiOutlineShoppingCart} from "react-icons/ai";

export default function CartBadge() {
  return (
    <div className='relative'>
      <AiOutlineShoppingCart className='text-3xl'/>
      <p className='w-5 h-5 text-sm text-center text-white bg-brand-primary rounded-full absolute -top-1.5 -right-2 font-bold'>
        2
      </p>
    </div>
  )
}