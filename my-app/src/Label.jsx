import React from 'react';

function Label(){
    return(
        <>
        <label for="identity" id="selfidentity">Name :</label>
        <br/>
        <input type="name" name="Name" id="Identity" placeholder="Kindly Enter your Name"/>
        <br/>
        <label for="email" id="head">Email-Address :</label>
            <br />
             <input type="email" name="Email" id="name" placeholder="Kindly Enter your Email address" autocomplete="Email"/>
             <br/>
             <label for="password" id="last">Password :</label>
             <input type="password" name="Password" id="password" placeholder="Please Enter your Password" required/>
             <br/>
             <label for="password" id="cpass">Confirm-Password :</label>
             <input type="password" name="confirmPassword" id="cpassword" placeholder="Please Confirm your Password"/>
        </>
    );
}
export default Label;