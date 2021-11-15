import { useState } from 'react';
import AdminLogin from '../../../images/adminLogin.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        const sumbithandler = (e) => {
            e.preventDefault();
            
            if(email === 'charity@impact.finance' && password === '123456'){
                localStorage.setItem('emailofadmin',email);
                window.location.replace("/admindashboard");
               
            }else{
                alert("Wrong Email, please contact with developers")
            }
        
         }
    return(
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src={AdminLogin} alt="IMG"/>
				</div>

				<form className="login100-form validate-form" onSubmit={sumbithandler}>
					<span className="login100-form-title">
						Admin Login
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input 
                            className="input100" 
                            type="text" 
                            name="email" 
                            placeholder="Email"
                            onChange = {(e) => setEmail(e.target.value)}
                            />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input 
                            className="input100" 
                            type="password" 
                            name="pass" 
                            placeholder="Password"
                            onChange = {(e) => setPassword(e.target.value)}
                            />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Login
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>
    )
}

export default Login;