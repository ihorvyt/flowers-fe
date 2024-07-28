import './Login.scss';
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {logUser} from "../../redux/slices/userSlice.js";
import {useDispatch, useSelector} from "react-redux";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

       dispatch(logUser({ email, password }))
           .then((res) => {
               if (res.payload) {
                   localStorage.setItem('token', res.payload);
                   navigate('/');
               } else {
                   alert('занято нахуй');
               }
           })
    };

    return (
        <div className="login-wrapper">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder=""
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                        <label htmlFor="username">Email</label>
                        <div className="bar"></div>
                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder=""
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <div className="bar"></div>
                    </div>
                    <div className="button-container">
                        <button type="submit">Login</button>
                    </div>
                    <Link to='/reg' className='register'>Do not have an account? Register now</Link>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;