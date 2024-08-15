import React from "react";
import { Link } from "react-router-dom";
// const Header  = () =>{
    class Header extends React.Component{
        constructor(props){
          console.log("props from parent",props);
          super(props);
          this.state ={
            Store : 'Store',
            Men :'Men',
            Women : 'Women',
            Kids : 'Kids',
            Brands :'Brands'
          }
        }
      
      
        render() {
           const{Store, Men,Women,Kids,Brands} =this.state;
    return(
        
         
        <nav  className="navbar navbar-expand-lg navbar-light bg-white">
        <div  className="container-fluid">
          {/* <a class="navbar-brand" href="#"> <img src="assets/.jpg" alt="" /> </a> */}
          <Link to= "/Lobby" className='navbar-brand'><img src="assets/Ajd1.jpg" alt=""/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Men</a> */}
                <Link to="/Store" className="nav-link">{Store}</Link>
              </li>
              <li className="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Men</a> */}
                <Link to="/Men" className="nav-link">{Men}</Link>
              </li>
              <li className="nav-item">
                {/* <a class="nav-link" href="#">Women</a> */}
                <Link to="/Women" className="nav-link">{Women}</Link>
              </li>
              <li className="nav-item">
                {/* <a class="nav-link  " href="#"  >Kids</a> */}
                <Link to="/Kids" className="nav-link">{Kids}</Link>
              </li>
              <li className="nav-item ">
              <Link to="/Brands" className="nav-link">{Brands}</Link>
             </li>
             </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }



}

export default Header;

 //  <div className="headerSection">
        //     <div className="left">
        //         <div className="title">
        //             <h2>Shopping Mall</h2>
        //         </div>
        //     </div>
        //     <div className="center">
        //         <ul>
        //             <li>Woman </li>
        //             <li>Men</li>
        //             <li>children</li>
        //             <li>Beauty</li>
        //         </ul>
        //     </div>
        //     <div className="search">
        //         <input type="text" placeholder='search...' />
        //     </div>
        //     <div className="right">
        //         <div className="signig">
        //             signing / signup
        //         </div>
        //         <div className="cart">
        //             cart
        //         </div>
        //     </div>
        //  </div>