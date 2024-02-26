import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import { useState } from "react";


function App() {

  const [sidebar,setSidebar]=useState(true);

  return (
   <>
   <Navbar setSidebar={setSidebar}></Navbar>
   <Routes>
    <Route path="/" element={<Home sidebar={sidebar}></Home>}></Route>
    <Route path="/video/:categoryId/:videoId" element={<Video/>}></Route>
   </Routes>
   </>
  );
}

export default App;
