import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Home } from "../home/Home";
import { About } from "./About";
import {Services} from "./Services";
import {Portfolio} from "./Portfolio";
import {Testimonials} from "./Testimonials";
import {Blog} from "./Blog";
import {Contact} from "./Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

export const Pages = () => {
  return ( 
<>
  <Router>
    <Header />
    
    <Routes>
       <Route exact path="/" Component={Home}/> 
       <Route exact path="/About" Component={About}/> 
       <Route exact path="/Services" Component={Services}/> 
       <Route exact path="/Portfolio" Component={Portfolio}/> 
       <Route exact path="/testimonials" Component={Testimonials}/> 
       <Route exact path="/Blog" Component={Blog}/> 
       <Route exact path="/Contact" Component={Contact}/> 
          
    </Routes>
    <Footer/>
    </Router>
</>
  );
}


