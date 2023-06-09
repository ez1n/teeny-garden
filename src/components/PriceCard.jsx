import {formatNum} from "../utils/lib/common";

export default function PriceCard({text, price}) {
  return(
    <section className='p-6 rounded-lg text-center bg-gray-50'>
      <p className='text-xl'>{text}</p>
      <p className='text-2xl text-brand-primary font-bold'>￦{formatNum(price)}</p>
    </section>
  )
}