import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blogs from "./pages/Blogs.jsx";
import Blogsdetails from "./pages/Blogsdetails.jsx";
import PlacesRoute from "./pages/PlacesRoute.jsx";

function NoPage() {
    return null;
}

const App = () =>{
    return(
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/blogs" element={<Blogs/>}/>
                            <Route path="/blogs/:id" element={<Blogsdetails/>}/>
                            <Route path="/places" element={<PlacesRoute/>}/>
                            <Route path="*" element={<NoPage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
    );
};
export default App;