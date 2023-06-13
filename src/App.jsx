import {Outlet} from "react-router-dom";
import {AuthContextProvider} from "./components/context/AuthContext";

import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthContextProvider>
      <main className='w-full max-w-screen-xl m-auto'>
        <Navbar/>
        <Outlet/>
      </main>
    </AuthContextProvider>
  );
}

export default App;
