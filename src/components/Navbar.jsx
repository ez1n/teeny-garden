import {useState} from "react";
import {createPortal} from "react-dom";
import {Link} from "react-router-dom";
import {logout} from "../api/auth";
import {useAuthContext} from "./context/AuthContext";

import {IoMdFlower} from "react-icons/io";
import {BsPencilSquare} from "react-icons/bs";
import Button from "./ui/Button";
import CartBadge from "./CartBadge";
import AuthModal from "./auth/AuthModal";

export default function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);
  const {user} = useAuthContext();

  const handleOpen = () => setLoginOpen(prev => !prev);

  return (
    <header className='flex justify-between p-4 border-b border-brand-secondary'>
      <Link className='text-4xl flex items-center text-brand-primary' to='/'>
        <IoMdFlower/>
        <h2 className='mx-2'>Teeny Garden</h2>
      </Link>

      <nav className='flex items-center text-lg gap-5 font-semibold'>
        <Link to='/products'>Products</Link>
        {user && <Link to='/cart'><CartBadge/></Link>}
        {user?.isAdmin && <Link to='/products/new'><BsPencilSquare className='text-2xl'/></Link>}
        {!user && <Button type='button' text='Login' onClick={handleOpen}/>}
        {user && <Button type='button' text='Logout' onClick={logout}/>}
      </nav>

      {loginOpen && createPortal(<AuthModal onClose={handleOpen}/>, document.body)}
    </header>
  )
}