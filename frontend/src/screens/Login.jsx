import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Login.css"

const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            const res = await axios.post('https://safe-zonneeeee-backend.vercel.app/api/auth/login', data,{
                withCredentials: true
            });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem("name", res.data.name);
            console.log(res.data);
            console.log(res);


            if (res.status === 200) {
                navigate("/")
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('email')} type="email" placeholder="Email" />
                <input {...register('password')} type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form> */}

            <div className='login'>
                <div className="loginForm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="header">
                            <span className='title'>Login / Signup</span>
                            <span className="desc">Now you can login get access to
                                <br /><span>community and chats</span>
                            </span>
                        </div>
                        <div className="form">
                            <span className='label'>Login</span>
                            <div className="email">
                                <label>Enter your Email : </label>
                                <input {...register('email')} type="email" placeholder="Email" />
                            </div>
                            <div className="password">
                                <label>Enter your Password : </label>
                                <input {...register('password')} type="password" placeholder="Password" />
                            </div>
                            <div className="button">
                                <button type="submit">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="formImg">
                    <img src="./login.jpg" />
                </div>
            </div>
        </>
    );
};

export default LoginForm;