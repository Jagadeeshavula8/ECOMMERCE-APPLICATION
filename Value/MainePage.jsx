import React, {Children, useState} from "react";
import Cards1 from "./Cards1";
import Banner from "../Value/Banner";
import Collections from "../Value/Collections";
import Footer from "../Value/Footer";
import Banners from "../Value/Banners";
import Router from "../../Router";
import Revice from "./Revice";
import WomanCollection from "../Value/WomenCollections";
import ChildrenCollections from "../Value/ChildrenCollections";
import Cards from "../Value/Cards";

import { Gents, Ladies,  Childrens} from "../data";

 

const MainPage = () =>{

  const [gentsFashion, setGentsFashion] = useState(Gents)
  const [ladiesFashion,setLadiesFashion] =useState(Ladies)
  const [ChildrenFashion,setChildrenFashion] =useState(Childrens)


    console.log(Gents)
    console.log(Ladies)
    console.log(Children)
     
    return(
        <div>
           
           <Banners/>
           <Cards1/>
            
           <Cards/>
           <Banner/>
            
           <Collections gentsFashion= {gentsFashion}/>
           
           <WomanCollection ladiesFashion = {ladiesFashion}/>
           <ChildrenCollections  ChildrenFashion = {ChildrenFashion}  />
           <Footer/>
        </div>
    )
}

export default MainPage;