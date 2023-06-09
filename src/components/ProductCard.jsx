import {formatNum} from "../utils/lib/common";

export default function ProductCard({product: {id, image, title, price, category}}) {
  return (
    <li className='flex flex-col justify-between h-96 p-2 rounded-lg shadow-md cursor-pointer transform-all duration-150 hover:scale-103'>
      <img className='h-4/5 object-cover' src={image} alt={title}/>

      <section className='flex-1 flex flex-col justify-center'>
        <div className='flex justify-between text-lg'>
          <h4 className='truncate ...'>{title}</h4>
          <p>￦{formatNum(price)}</p>
        </div>
        <p className='text-gray-500'>{category}</p>
      </section>
    </li>
  )
}