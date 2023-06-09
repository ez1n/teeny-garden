import {Outlet} from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <main className='w-full max-w-screen-xl m-auto'>
      <Navbar/>
      <Outlet/>
    </main>
  );
}

export default App;
