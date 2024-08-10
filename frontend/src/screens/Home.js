import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h1 className="text-2xl font-bold mb-2">SafeZone</h1>
                    <p className="text-gray-700 mb-4">Real Alerts and Response</p>
                    <p className="text-gray-600 mb-6">Know Weather Forecasts and Disaster Alerts</p>
                    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-green-600">
                            Get Info by Your Location
                        </button>
                    </div>
                    <div className="mt-6 flex justify-around">
                        <button className="text-blue-500 hover:underline">Weather Alerts</button>
                        <button className="text-blue-500 hover:underline">Forecasts</button>
                        <button className="text-blue-500 hover:underline">Weather Alerts</button>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
