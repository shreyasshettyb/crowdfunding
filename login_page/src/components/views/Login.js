import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../utilities/Forms";


const Login  = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [validate, setValidate] = useState({});



    const validateLogin = () => {
        let isValid = true;
    
        let validator = Form.validator({
          email: {
            value: email,
            isRequired: true,
            isEmail: true,
          },
          password: {
            value: password,
            isRequired: true,
            minLength: 6,
          },
        });
    
        if (validator !== null) {
          setValidate({
            validate: validator.errors,
          });
    
          isValid = false;
        }
        return isValid;
      };
    
      const authenticate = (e) => {
        e.preventDefault();
    
        const validate = validateLogin();
    
        if (validate) {
          setValidate({});
          setEmail("");
          setPassword("");
          alert("Successfully Login");
        }
      };







    return (
        <div className="container">
            <div className="TagLine">
                <h1>Every Fund Matters.</h1>
                <img src={require('./background.png')} alt="Donate Please!!!" />
            </div>
            <div className="row col-lg-6 col-md-12 col-sm-12 col-12 login-content">
                <div className="col-lg-10 offset-lg-2 col-md-10 offset-md-1 col-sm-12 offset-sm-2 col-12 login-form">
                    <h4>Login</h4>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group col-lg-8 offset-lg-2 col-md-6 offset-md-3 col-sm-6 offset-sm-3 login-btn">
                        <input type="submit" className="btn btn-primary form-control" value="Submit" />
                    </div>
                    <div className="forgot-password">
                        <p>ForgotPassword?<a href="/ForgotPassword">Click here</a></p>
                    </div>
                    <div>
                        <h4>or</h4>
                    </div>
                     <div className="form-group col-lg-8 offset-lg-2 col-md-6 offset-md-3 col-sm-6 offset-sm-3 glogin-btn">
                        <a className="btn btn-primary form-control" href="https://www.google.co.in">
                            <img width="15px" alt="Google login" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                            Sign in with Google
                        </a>
                    </div> 
                    <div className="create-account">
                        <p>Dont have an account?</p>
                        <a href="/Register">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default Login;