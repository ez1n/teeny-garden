import {IconButtonStyle} from "../utils/const/style";

import {AiOutlineMinusSquare, AiOutlinePlusSquare} from "react-icons/ai";
import {MdOutlineCancel} from "react-icons/md";

export default function SelectedCard({option, quantity, onPlus, onMinus, onDelete}) {
  return (
    <section className='flex justify-between items-center p-2'>
      <h4 className='text-xl'>{option}</h4>

      <div className='flex items-center text-xl gap-1'>
        <AiOutlineMinusSquare className={IconButtonStyle} onClick={() => onMinus(option)}/>
        <span>{quantity}</span>
        <AiOutlinePlusSquare className={IconButtonStyle} onClick={() => onPlus(option)}/>
        <MdOutlineCancel className={IconButtonStyle} onClick={() => onDelete(option)}/>
      </div>
    </section>
  )
}