import React from 'react';
import './registration.css';
function registration() {
    return (
        <div className="container">
            <div className="title">Registration</div>
                <div className="content">
                    <form action="#">
                     <div className="user-details">
                    <div className="input-box">
                        <span className="details">Company Name</span>
                        <input type="text" placeholder="Company Name" required></input>
                    </div>
                    <div className="input-box">
                        <span className="details">Company Mail</span>
                        <input type="text" placeholder="Company Mail" required></input>
                    </div>
                    <div className="input-box">
                        <span className="details">Company contact</span>
                        <input type="text" placeholder="Company contact" required></input>
                    </div>
                    <div className="input-box">
                        <span className="details">company Description</span>
                        <input type="text" placeholder="company Description" required></input>
                    </div>
                    <div className="input-box">
                        <span className="details">Admin Mails</span>
                        <input type="text" placeholder="" required></input>
                        <input type="text" placeholder="Subscription period" required></input>
                    </div>
                    <div className="box">
                        <span className="details">Company logo</span>
                        <input type="file" placeholder="upload here" required></input>
                    </div>
                    </div>
                </div>
                
                <div className="button-dark button">
                <input type="submit" value="Register"></input>
                </div>
                
            </div>
  );
}

export default Navbar;