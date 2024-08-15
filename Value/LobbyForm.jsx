import React,{useState, useStste} from "react";
import { useNavigate ,Link} from "react-router-dom"; 
function LobbyForm(){
    const navigate = useNavigate();
    const [initialData, updateData] = useState({
        email : '',
        password : ''
    });

    function onChangeHandler(e){
        e.preventDefault();
        updateData({...initialData,[e.target.name] : e.target.value});
     
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        localStorage.setItem('email','Jagadeesh@123');
        localStorage.setItem('password',253545);
        const emailData = localStorage.getItem('email').toString();
        const passwordData = localStorage.getItem('password').toString();
        console.log(emailData);
        console.log(passwordData);
          

        if (initialData.email === "" || initialData.password === ""){
            alert("Please enter the Email & Password");
            navigate('/');
        } else if (initialData.email === emailData && initialData.password === passwordData){
            alert("Login Successfully");
            navigate('/Store');
        } else{
            alert("Please Check Entered Email & Password");
            navigate('/');
        }
    }
    return(
        <div className="d-flex justify-content">
            
                <form onSubmit={onSubmitHandler}>
                <label className="form-label">Email</label>
                <input type="text" 
                size={50 }
                className="form-control"
                name="email"
                
                value={initialData.email}
                onChange={onChangeHandler}
                />
                <label className="form-label">Password</label>
                <input type="text" 
                className="form-control"
                name="password"
                value={initialData.password}
                onChange={onChangeHandler}
                />
                <button style={{'marginTop' : '20px'}}> Login</button>
                <Link to = '/Register'></Link>
                </form>
            
        </div>
    )
}

export default LobbyForm;