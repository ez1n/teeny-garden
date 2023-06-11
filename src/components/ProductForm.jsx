import {useState} from "react";

import Button from "./ui/Button";
import Input from "./ui/Input";

export default function ProductForm() {
  const [product, setProduct] = useState(initialProductValue);
  const [image, setImage] = useState(initialImageValue)

  const onChangeValue = (e) => {
    const {name, value, files} = e.target;
    if (e.target.type === 'file') {
      URL.revokeObjectURL(image.url);
      files[0] && setImage({file: files[0], url: URL.createObjectURL(files[0])});
      return;
    }
    setProduct(product => ({...product, [name]: value}));
  }
  return (
    <section className='flex flex-col lg:flex-row my-4'>
      <div className='flex justify-center items-center m-2 border border-gray-200 rounded-sm lg:w-1/2'>
        {image.url && <img className='object-contain' src={image.url} alt='product'/>}
        {!image.url && <p className='text-gray-400 text-xl p-16'>이미지를 등록해 주세요.</p>}
      </div>

      <form className='flex flex-col m-2 gap-2 lg:w-1/2'>
        <Input
          type='file'
          required
          accept={'image/*'}
          onChange={onChangeValue}
          onClick={e => e.target.value = null}
        />
        <Input
          type='text'
          name='title'
          value={product.title}
          required
          placeholder='제품명'
          onChange={onChangeValue}/>
        <Input
          type='number'
          name='price'
          value={product.price}
          required
          placeholder='가격'
          onChange={onChangeValue}/>
        <Input
          type='text'
          name='category'
          value={product.category}
          required
          placeholder='카테고리'
          onChange={onChangeValue}/>
        <Input
          type='text'
          name='description'
          value={product.description}
          required
          placeholder='제품 설명'
          onChange={onChangeValue}/>
        <Input
          type='text'
          name='options'
          value={product.options}
          required
          placeholder='옵션 (콤마(,)로 구분'
          onChange={onChangeValue}/>

        <Button type='submit' text='제품 등록하기'/>
      </form>
    </section>
  )
}

const initialProductValue = {
  title: '',
  category: '',
  description: '',
  price: '',
  options: ''
}

const initialImageValue = {
  file: null,
  url: null
}