import {Link} from "react-router-dom";

import {IoMdFlower} from "react-icons/io";
import {BsPencilSquare} from "react-icons/bs";
import Button from "./ui/Button";
import CartBadge from "./CartBadge";

export default function Navbar() {
  return (
    <header className='flex justify-between p-4 border-b border-brand-secondary'>
      <Link className='text-4xl flex items-center text-brand-primary' to='/'>
        <IoMdFlower/>
        <h2 className='mx-2'>Teeny Garden</h2>
      </Link>

      <nav className='flex items-center text-lg gap-5 font-semibold'>
        <Link to='/products'>Products</Link>
        <Link to='/cart'><CartBadge/></Link>
        <Link to='/products/new'><BsPencilSquare className='text-2xl'/></Link>
        <Button type='button' text='Login'/>
      </nav>
    </header>
  )
}