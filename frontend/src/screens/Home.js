import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignupForm from './SignUp'
import LoginForm from './Login'
import { Link } from 'react-router-dom'

export default function Home() {

    const [auth, setAuth] = useState(false);

    return (
        <>
            <div className='container mt-5'>
                <div className='row mt-5'>
                    <div className="text-gradient fw-bold text-center fs-4" to="/Home">SafeZone</div>
                </div>
                <div className='row mt-3'>
                    <div className="fw-bold text-center fs-2" to="/Home">Real Alerts and Response</div>
                </div>
                <div className='row mt-3'>
                    <div className="fw-bold text-center fs-5" to="/Home">Know Weather  Forecasts and Disaster Alerts</div>
                </div>
                <div className="row mt-3 d-flex justify-content-center align-items-center h-100">
                    <Link className="border-0 w-25 text-center fw-bold shadow fs-5 getinfobtn" to="/Login">Get info by Your Location</Link>
                </div>
                <div className='row mt-4'>
                    <div className='col-4'>
                        <div className="text-center rounded fs-5" to="/Home">Weather Alerts</div>
                    </div>
                    <div className='col-4'>
                        <div className="text-center rounded fs-5" to="/Home">Forecasts</div>
                    </div>
                    <div className='col-4'>
                        <div className="text-center rounded fs-5" to="/Home">Community</div>
                    </div>
                </div>
            </div>
        </>
    )
}
