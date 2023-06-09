import {formatNum} from "../utils/lib/common";
import {IconButtonStyle} from "../utils/const/style";

import {AiOutlineMinusSquare, AiOutlinePlusSquare} from 'react-icons/ai';
import {BsFillTrashFill} from 'react-icons/bs';

export default function CartItem({product: {id, image, title, option, price, quantity}}) {
  return (
    <li className='flex justify-between'>
      <img className='w-48 h-64 object-cover rounded-lg' src={image} alt={title}/>
      <div className='flex-1 flex flex-col justify-center mx-4'>
        <h4 className='text-xl'>{title}</h4>
        <p className='text-xl font-bold text-brand-primary'>{option}</p>
        <p className='text-lg'>￦{formatNum(price)}</p>
      </div>

      <div className='flex items-center text-2xl gap-1'>
        <AiOutlineMinusSquare className={IconButtonStyle}/>
        <span>{quantity}</span>
        <AiOutlinePlusSquare className={IconButtonStyle}/>
        <BsFillTrashFill className={IconButtonStyle}/>
      </div>
    </li>
  )
}