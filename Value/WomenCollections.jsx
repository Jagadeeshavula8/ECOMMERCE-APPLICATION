import React from "react";

 const WomanCollection = (props) => {
    const {title,image1, image2,image3,image4,image5,image6} = props.ladiesFashion
 
    
    return (
            <div className="collectonSection ">
                 <h2>{title}</h2>
                 <div className="bannerbox">
                 <img src="assets/Women.avif" alt="" />
            </div>   
                 
             <div className="WomenImages">
                <img src= {image1} alt="title" />
                <img src={image2} alt="title" />
                <img src={image3} alt="title" />
                <img src={image4} alt="title" />
                <img src={image5} alt="title" />
                <img src={image6} alt="title" />
                 
             </div>    
            </div>
    )
 }

 export default WomanCollection;