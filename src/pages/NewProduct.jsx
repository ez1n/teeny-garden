import ProductForm from "../components/ProductForm";

export default function NewProductPage() {
  return (
    <section className='m-4'>
      <h1 className='pb-4 text-center text-2xl font-bold'>새로운 제품 등록</h1>
      <ProductForm/>
    </section>
  )
}