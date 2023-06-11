import {useState} from "react";
import {formatNum} from "../utils/lib/common";

import {AiOutlineMinusSquare, AiOutlinePlusSquare} from "react-icons/ai";
import {GiCancel} from "react-icons/gi";
import Button from "../components/ui/Button";
import {IconButtonStyle} from "../utils/const/style";
import SelectedCard from "../components/SelectedCard";

const DUMMY_DATA = {
  id: 1,
  image: 'https://plus.unsplash.com/premium_photo-1661633189572-f91fe84f89d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  title: '비즈 반지',
  description: '비즈 반지 입니다.',
  category: '악세사리',
  price: 3000,
  options: ['XS', 'S', 'M', 'L', 'XL', '2XL']
}

export default function ProductDetailPage() {
  const {id, image, title, description, category, price, options} = DUMMY_DATA;
  const [selected, setSelected] = useState([]);

  const handleSelect = (e) => {
    if (!e.target.value) return;
    if (selected.findIndex(s => s.option === e.target.value) >= 0) return;

    setSelected(prev => [...prev, {option: e.target.value, quantity: 1}]);
  }

  const handlePlus = (option) => {
    setSelected(prev => prev.map(s => s.option === option ? {...s, quantity: s.quantity + 1} : s));
  }

  const handleMinus = (option) => {
    setSelected(prev => prev.map(s => {
      if (s.option === option && s.quantity > 1) return {...s, quantity: s.quantity - 1};
      return s;
    }));
  }

  const handleDelete = (option) => {
    setSelected(prev => prev.filter(s => s.option !== option));
  }

  const handleClick = () => {
    // TODO: 장바구니 추가하기
  }

  return (
    <section className='mx-10'>
      <h2 className='my-8 text-center text-lg text-gray-400 font-semibold'>{category}</h2>

      <div className='flex justify-between'>
        <img className='w-1/2 h-full object-cove p-4' src={image} alt={title}/>

        <section className='w-1/2 py-4 px-10 flex flex-col'>
          <h3 className='py-2 text-3xl font-bold'>{title}</h3>
          <p className='py-2 text-2xl font-bold border-b border-brand-secondary'>￦{formatNum(price)}</p>
          <p className='py-3 text-xl'>{description}</p>

          <div className='flex items-center'>
            <label className='text-brand-primary text-lg font-bold' htmlFor='select'>옵션: </label>
            <select
              className='flex-1 m-4 p-2 border-2 border-dashed border-brand-primary cursor-pointer'
              id='select'
              onChange={handleSelect}
            >
              <option value=''> 선택</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {
            selected.length > 0 &&
            selected.map((s, index) => (
                <SelectedCard
                  key={index}
                  option={s.option}
                  quantity={s.quantity}
                  onPlus={handlePlus}
                  onMinus={handleMinus}
                  onDelete={handleDelete}
                />
              )
            )
          }

          <Button type='button' text='장바구니 추가하기' onClick={handleClick}/>
        </section>
      </div>
    </section>
  )
}