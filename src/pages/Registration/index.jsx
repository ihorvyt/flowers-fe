import { useState } from 'react'; // Add useEffect and useState imports
import './Registration.scss';
import UserDataForm from './UserDataForm.jsx';
import PasswordForm from './PasswordForm.jsx';
import {Header} from "../Components/Header/Index.jsx";
import {useDispatch} from "react-redux";
import {regUser, setUserInfo} from "../../redux/slices/userSlice.js";
import {useNavigate} from "react-router-dom";

const RegistrationPage = () => {
    const [shwoPasswdForm, setShwoPasswdForm] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInputs, setUserInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSetInfo = () => {
        dispatch(setUserInfo(userInputs))

        dispatch(regUser({
            firstName: userInputs.firstName,
            lastName: userInputs.lastName,
            email: userInputs.email,
            password: userInputs.password
        }))
            .then((res) => {
                if (res.payload) {
                    localStorage.setItem('token', res.payload.access_token);
                    navigate('/');
                    alert('yes yes yes');
                } else {
                    alert('неправильно нахуй');
                }
            });
    }

    return (
        <>
            <Header />
            <div className="form-wrapper">
                {
                    shwoPasswdForm ?
                        <PasswordForm
                            handleSetInfo={handleSetInfo}
                            userInputs={userInputs}
                            setUserInputs={setUserInputs}
                        />
                        : <UserDataForm
                            userInputs={userInputs}
                            setUserInputs={setUserInputs}
                            setShwoPasswdForm={setShwoPasswdForm}
                        />
                }
            </div>
        </>
    );
};

export default RegistrationPage;