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
                    <div className="fw-bold text-center fs-1 text-logo-gradient" style={{ marginTop: "130px",fontSize: "45px"  }} to="/Home">SafeZone</div>
                </div>
                <div className="row mt-3 flex-grow-1">
                    <div className="fw-bold text-center" style={{ fontSize: "70px" }} to="/Home">Real Alerts and Response</div>
                </div>
                <div className="row mt-3 flex-grow-1">
                    <div className="fw-bold text-center"  style={{ fontSize: "35px" }}to="/Home">Know Weather Forecasts and Disaster Alerts</div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <Link className="border-0 w-25 text-center fw-bold shadow getinfobtn"  style={{ fontSize: "20px" }} to="/Login">Get info by Your Location</Link>
                </div>
                <div className="row text-center" style={{ marginLeft: "400px",marginTop: "40px",marginRight: "400px" }} >
                    <div className="col-4" style={{ borderRight: "2px solid #000" }}>
                        <div className="fs-5" to="/Home">Weather Alerts</div>
                    </div>
                    <div className="col-4" style={{ borderRight: "2px solid #000"}}>
                        <div className="fs-5" to="/Home">Forecasts</div>
                    </div>
                    <div className="col-4">
                        <div className="fs-5" to="/Home">Community</div>
                    </div>
                </div>
            </div>
            <div className='home-container mt-5'>
                <div className='container text-center'>
                    <div className='row'>
                        <div className='col'>
                            <input typeof='text'></input>
                        </div>
                        <div className='col'>
                            <input typeof='text'></input>
                        </div>
                    </div>
                    <div className='row'>
                        <input typeof='text'></input>
                    </div>
                    <div className='row'>
                        <input typeof='text'></input>
                    </div>
                </div>
            </div>
        </>
    )
}
