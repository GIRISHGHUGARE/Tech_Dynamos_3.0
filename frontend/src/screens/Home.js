import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignupForm from './SignUp'
import LoginForm from './Login'
import { Link } from 'react-router-dom'

export default function Home() {
    let userName = localStorage.getItem('name')
    const [auth, setAuth] = useState(false);
    return (
        <>
            {/* <div>
            {userName}
        </div> */}
            <div className="home-container mt-3 vh-100" >
                <div className="row flex-grow-1" >
                    <div className="fw-bold text-center fs-1 text-logo-gradient" style={{ marginTop: "130px", fontSize: "45px" }} to="/Home">SafeZone</div>
                </div>
                <div className="row mt-3 flex-grow-1">
                    <div className="fw-bold text-center" style={{ fontSize: "70px" }} to="/Home">Real Alerts and Response</div>
                </div>
                <div className="row mt-3 flex-grow-1">
                    <div className="fw-bold text-center" style={{ fontSize: "35px" }} to="/Home">Know Weather Forecasts and Disaster Alerts</div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <Link className="border-0 w-25 text-center fw-bold shadow getinfobtn" style={{ fontSize: "20px" }} to="/Login">Get info by Your Location</Link>
                </div>
                <div className="row text-center" style={{ marginLeft: "400px", marginTop: "40px", marginRight: "400px" }} >
                    <div className="col-4" style={{ borderRight: "2px solid #000" }}>
                        <div className="fs-5" to="/Home">Weather Alerts</div>
                    </div>
                    <div className="col-4" style={{ borderRight: "2px solid #000" }}>
                        <div className="fs-5" to="/Home">Forecasts</div>
                    </div>
                    <div className="col-4">
                        <div className="fs-5" to="/Home">Community</div>
                    </div>
                </div>
            </div>
            <div className="fw-bold text-center fs-1 text-logo-gradient" style={{ marginTop: "10px", fontSize: "45px" }} to="/Home"><h2>Emergency Contact Details :</h2></div>
            <div className='row mb-3'>
                <div className='col'>
                    <input type='text' className='form-control rounded' placeholder='First Name' />
                </div>
                <div className='col'>
                    <input type='text' className='form-control rounded' placeholder='Last Name' />
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col'>
                    <input type='text' className='form-control rounded' placeholder='Phone Number' />
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col'>
                    <input type='text' className='form-control rounded' placeholder='Email Address' />
                </div>
            </div>
            <div className="btn d-flex justify-content-center">
            <button className="border-0 w-25 text-center fw-bold shadow getinfobtn" style={{ fontSize: "20px" }} >Submit</button>
            </div>
        </>
    )
}
