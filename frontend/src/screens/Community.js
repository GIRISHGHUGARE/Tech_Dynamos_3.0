import React, { useState } from 'react';

export default function Community() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage(''); // Clear the input after sending
    }
  };

  return (
    <>
      <div className="container border bg-white rounded shadow-sm mt-4 p-3">
        {/* Internal CSS */}
        <style>{`
          .chat-area {
            max-height: 300px; 
            overflow-y: scroll;
            padding: 15px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            background-color: #f8f9fa;
            border-radius: 8px;
          }
          .chat-area::-webkit-scrollbar {
            width: 8px;
          }
          .chat-area::-webkit-scrollbar-thumb {
            background-color: #ccc;
            border-radius: 10px;
          }
          .send-section {
            border-top: 1px solid #ddd;
            padding: 10px;
            background-color: #ffffff;
          }
          .send-section .form-control {
            flex-grow: 1;
            border-radius: 20px;
          }
          .send-section .btn-success {
            border-radius: 20px;
          }
          .btn-custom {
            border: 2px solid #0d6efd; /* Border color matching the blue outline */
            background-color: #e9ecef; /* Light gray background */
            color: #0d6efd; /* Text color matching the blue outline */
            border-radius: 20px; /* Rounded corners */
            padding: 5px 15px; /* Padding for a better appearance */
          }
          .btn-custom:hover {
            background-color: #f8f9fa; /* Slightly lighter gray on hover */
          }
        `}</style>

        <div className="row mx-2 mb-4 p-3 d-flex flex-row align-items-center border rounded bg-light shadow-sm">
          <div className="col-6">
            <h3 className="mb-0">Chat By Location</h3>
            <span><p className="text-muted small mb-0">Powered by SafeZone</p></span>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button className="btn btn-custom shadow-sm">
              Choose Location
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="chat-area">
          {/* Add more content here to demonstrate the scrollable area */}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus laborum delectus incidunt, praesentium ratione non magnam! Recusandae sequi veritatis mollitia id adipisci est asperiores non quo, obcaecati maxime incidunt vel.
        </div>

        {/* Send Message Section */}
        <div className="row mx-auto d-flex flex-row send-section">
          <form onSubmit={handleSubmit} className="d-flex w-100">
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="Enter your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="btn btn-success ms-2 shadow-sm">
              <i className="bi bi-send"></i> Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
