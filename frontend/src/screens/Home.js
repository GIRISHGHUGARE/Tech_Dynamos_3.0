import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignupForm from './SignUp'
import LoginForm from './Login'

export default function Home() {
    
    const [auth, setAuth] = useState(false);

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <div>
                    <SignupForm />
                    <LoginForm setAuth={setAuth} />
                </div>
                {/* <div className="container">
                    <div className="title">
                        <h3>Real Alerts and Response</h3>
                        <p>Know Weather Forecasts and Disaster Alerts</p>
                        <div className="btnGetInfo">
                            <button className="btn">
                                Get Info by Your Location
                            </button>
                        </div>
                        <div className="linkButton">
                            <button className="linkBtn">
                                Weather Alerts
                            </button>
                            <button className="linkBtn">
                                Forecasts
                            </button>
                            <button className="linkBtn">
                                Weather Alerts
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
