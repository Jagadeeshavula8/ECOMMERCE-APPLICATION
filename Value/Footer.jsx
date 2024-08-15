import React from "react";
// import  "../Pages/Footer.css"
const Footer = () =>{
    return(
        <div className="bg-black text-white" style={{listStyle : "none"}}>
            <div className="row">
            <div className="col-md-3">
                <img src="assets/Ajd.jpg" alt="" />
                <p className=" text-align">Aunty Shopping mall, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Aunty shopping app has managed to keep up without any hiccups.</p>
            </div>
            <div className="col-md-3">
                <h4>ONLINE SHOPPING</h4>
                <ul>
                        <li>
                            <a >Men</a>
                        </li>
                        <li>
                            <a  > Women</a>
                        </li>
                        <li>
                            <a  >KIds</a>
                        </li>
                        <li>
                            <a  >Home&Kichen</a>
                        </li>
                        <li>
                            <a  >Beauty</a>
                        </li>
                    </ul>
            </div>
            <div className="col-md-3">
                <h4> Connect with Us</h4>
                <ul>
                        <li>
                            <a >Facebook</a>
                        </li>
                        <li>
                            <a  > Twitter</a>
                        </li>
                        <li>
                            <a  >Instagram</a>
                        </li>
                        <li>
                            <a  >✆Whatsup</a>
                        </li>
                        
                    </ul>
            </div>
            <div className="col-md-3">
                <h4>Make Money with us</h4>
                <ul>
                        <li>
                            <a >Protect and Build Your Brand</a>
                        </li>
                        <li>
                            <a  >Become an Affliate</a>
                        </li>
                        <li>
                            <a  >Advetise Your Products</a>
                        </li>
                        <li>
                            <a  >Returns Centre</a>
                        </li>
                        <li>
                            <a  >About Us</a>
                        </li>
                    </ul>
            </div>
            </div>
             
            
        </div>
    )
}

export default Footer;