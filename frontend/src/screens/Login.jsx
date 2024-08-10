import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', data);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem("name", res.data.name);
            if (res.statusText === "OK") {
                navigate("/")
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email')} type="email" placeholder="Email" />
            <input {...register('password')} type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;