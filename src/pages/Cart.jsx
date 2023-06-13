import {CART_DUMMY_DATA} from "../DUMMY_DATA";
import {Navigate} from "react-router-dom";
import {useAuthContext} from "../context/AuthContext";

import {AiFillPlusCircle} from "react-icons/ai";
import {FaEquals} from "react-icons/fa";
import Button from "../components/ui/Button";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";

import {SHIPPING} from "../utils/const/common";

export default function CartPage() {
  const totalPrice = CART_DUMMY_DATA.reduce((sum, value) => sum + value.price, 0);
  const {user} = useAuthContext();

  const onClick = () => {

  }

  if (!user) {
    return <Navigate to='/' replace={false}/>
  }

  return (
    <section className='mx-6'>
      <h1 className='text-3xl text-center font-bold py-4'>
        내 장바구니
      </h1>

      <ul className='flex flex-col gap-2 px-10 py-6 border-t border-b border-brand-secondary'>
        {CART_DUMMY_DATA.map(product => <CartItem key={product.id} product={product}/>)}
      </ul>

      <section className='flex flex-col flex-1 my-6'>
        <div className='flex justify-between items-center mx-12 pb-6'>
          <PriceCard text='상품총액' price={totalPrice}/>
          <AiFillPlusCircle className='text-2xl text-brand-secondary'/>
          <PriceCard text='배송비' price={SHIPPING}/>
          <FaEquals className='text-2xl text-brand-secondary'/>
          <PriceCard text='총가격' price={totalPrice + SHIPPING}/>
        </div>

        <Button type='button' text='주문하기' onClick={onClick}/>
      </section>
    </section>
  )
}