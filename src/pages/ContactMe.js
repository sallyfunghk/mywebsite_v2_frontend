import { useState, useEffect } from 'react'
import axios from 'axios';

import "../styles/global.css"
import "../styles/contact_me.css"

export default function ContactMe() {

    const backendURL = "https://sallyfunghk.com/apis/post_contact.php";

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [comment, setComment] = useState("");

    const submitData = {
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "phone_num": phoneNum,
        "company_name": companyName,
        "comment": comment,
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log('handleSubmit()')
        const response = await fetch(backendURL,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(submitData)
        });
        if(response.ok){
            const json = await response.json();
            console.log(json);
            if(json.err_code == 0){
                console.log("err code 0");
                document.getElementById("contact-form").reset();
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNum('');
                setCompanyName('');
                setComment('');
            }
            alert(json.message);
        }
    }

    const resetForm = async(e) => {
        e.preventDefault();
        await document.getElementById("contact-form").reset();
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNum('');
        setCompanyName('');
        setComment('');
    }

    return (
        <div id="contact-me">
            <div className="heading">
                <h1>Contact Me</h1>
            </div>

            <form id="contact-form" autoComplete="off">
                <div className='descr'>
                    <p>
                        If you have anything want to share with me, please feel free to contact me by below form:
                    </p>
                    <p>
                        <span className='required'>* Must be filled in</span>
                    </p>
                </div>

                <div className='row'>
                    <div className='field-group'>
                        <label htmlFor="first-name">First Name<span className='required'>*</span></label>
                        <input id="first-name" type="text" onChange={(e)=>{setFirstName(e.target.value)}}></input>
                    </div>
                    <div className='field-group'>
                        <label htmlFor="last-name">Last Name<span className='required'>*</span></label>
                        <input id="last-name" type="text" onChange={(e)=>{setLastName(e.target.value)}}></input>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='field-group'>
                        <label htmlFor="email">Email<span className='required'>*</span></label>
                        <input id="email" type="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
                    </div>
                    <div className='field-group'>
                        <label htmlFor="phone-num">Phone</label>
                        <input id="phone-num" type="tel" onChange={(e)=>{setPhoneNum(e.target.value)}}></input>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='field-group'>
                        <label htmlFor="company-name">Company Name</label>
                        <input id="company-name" type="text" onChange={(e)=>{setCompanyName(e.target.value)}}></input>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='field-group'>
                        <label htmlFor="comment">Comment<span className='required'>*</span></label>
                        <textarea id="comment" onChange={(e)=>{setComment(e.target.value)}}></textarea>
                    </div>
                </div>
                
                <div className='row'>
                    <button className='btn-normal' onClick={handleSubmit}>Submit</button>
                    <button className='btn-reverse' onClick={resetForm}>Reset</button>
                </div>
            </form>
            
        </div>
    );
}