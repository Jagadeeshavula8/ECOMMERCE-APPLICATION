import React from "react";
import '../Pages/Banners.css';
 
 
const Banners = () =>{
    return(
      
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="assets/Boybanner.avif" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-md-block">
    				<h1 class="heads">MENS FULLY COLLECTIONS</h1>
    				<a className="btn btn-orangered bradius-0 pad-10 "  class='ok' >SHOP NOW</a>
    			 </div>
          </div>
           
          <div class="carousel-item">
            <img src="assets/Women.avif" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-md-block">
    				<h1 class="heads">WOMENS FULLY COLLECTIONS</h1>
    				<a className="btn btn-orangered bradius-1 pad-10 "  class='ok' >SHOP NOW</a>
    			 </div>
          </div>
           
          <div class="carousel-item">
            <img src="assets/Kids.avif" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-md-block">
    				<h1 class="heads">KIDS FULLY COLLECTIONS</h1>
    				<a className="btn btn-orangered bradius-1 pad-10 " class='ok' >SHOP NOW</a>
    			 </div>
          </div>
           
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> 
         
 
      </div>
               
    )
}

export default Banners;