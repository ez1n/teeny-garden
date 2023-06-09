import {DUMMY_DATA} from "../DUMMY_DATA";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <ul className='p-3 grid gap-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
      {DUMMY_DATA.map(product => <ProductCard key={product.id} product={product}/>)}
    </ul>
  )
}