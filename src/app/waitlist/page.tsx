'use client'
import React, { useEffect, useRef, useState } from 'react'
import Layout from './Layout'
import "../globals.css";
import CountrySelector from "../_Components/CountrySelector"
import Whitelogo from '../_Components/Whitelogo';
import axios from 'axios';
import { Modal } from "../_Components/Modal";



const page = () => {
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
    "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (Swaziland)", "Ethiopia", "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
    "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
    "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru",
    "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman",
    "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
    "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
    "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [username, setUserName] = useState("")
  const [email_address, setEmailAddress] = useState("")
  const [country, setCountry] = useState("")
  const [isButtonDisabled, setButtonState] = useState(false)
  const [showModal, setModalState] = useState(false)
  const [modalId, setModalId] = useState("")
  const [modalTitle, setModalTitle] = useState("")
  const [modalMessage, setModalMessage] = useState("")
  const modalRef = useRef<HTMLDialogElement | null>(null)


  useEffect(() => {
    if (showModal) {
      console.log("Modal should now be visible");
    }
  }, [showModal]); // This will trigger whenever `showModal` updates
  useEffect(() => {
    if (!username && !email_address && !country) {
      setButtonState(false);
      return; // Exit early
    } else {
      setButtonState(true);
    }
  }, [isButtonDisabled])
  async function handleSubmit(e: any) {
    e.preventDefault();
    setButtonState(true);

    console.log("Modal Id:", "modal_1");

    if (!username || !email_address || !country) {
      setButtonState(false);
      return; // Exit early
    }

    try {
      const response = await axios.post("https://morlabs-protocol-backend.onrender.com/api/v1/register", {
        username,
        email_address,
        country,
      });

      console.log(response);
      setModalMessage(response.data.message)
      setModalState(true); // Ensure this updates the state
      setTimeout(() => {
        window.location.href = "/"
      }, 500);
    } catch (error: any) {
      console.error(error);
      setModalMessage(error)

      // setModalState(true); // Open modal on error too
      console.log(showModal)
    }
  }
  return (

    <>
      <div className='bg-black h-screen'>
        {/* Logo Section */}
        <img src="morlabs-logo.png" alt="Morlabs Logo" className='p-3' onClick={() => { window.location.href = "/" }} />
        {/* Form Section */}
        <form className='flex text-white flex-col w-full max-w-2xl p-4 justify-center items-center mx-auto gap-y-8'>
          {/* Form Title */}
          <h3 className='text-2xl font-bold'>Join the Waitlist !</h3>
          {/* Full Name Input */}
          <div className='w-full'>
            <label htmlFor="full-name">Full Name</label>
            <input disabled={isButtonDisabled} required id="full-name" placeholder='John Doe' onChange={(e) => { setUserName(e.target.value) }} className='w-full px-5 py-3 rounded-md bg-transparent border' />
          </div>
          {/* Email Address Input */}
          <div className='w-full'>
            <label htmlFor="full-name">Email Address</label>
            <input disabled={isButtonDisabled} required type="email" id="full-name" placeholder='johndoe@example.com' onChange={(e) => { setEmailAddress(e.target.value) }} className='w-full px-5 py-3 rounded-md bg-transparent border' />
          </div>
          {/* Country Selector */}
          <div className="w-full">
            <label htmlFor="country">Select a country:</label><br />
            <select disabled={isButtonDisabled} className="bg-transparent w-full px-5 py-3 rounded-md border"
              id="country"
              value={country}
              onChange={(e) => { setCountry(e.target.value) }}
            >
              <option value="" className="bg-transparent text-white" disabled>Select a country</option>
              {countries.map((country, index) => (
                <option key={index} className="bg-transparent text-black" value={country}>{country}</option>
              ))}
            </select>
            {/* Submit Button */}
          </div>
          <button className='bg-green-700 disabled:bg-gray-300 py-4 px-6 rounded-md font-bold' disabled={isButtonDisabled} onClick={(e) => { handleSubmit(e) }}>{isButtonDisabled ? "Please Wait..." : "Submit"}</button>
        </form>
        <Modal handleClose={() => { setModalState(!showModal) }} isOpen={showModal}>
          <img src="/verified.png" alt="verified_icon" className='items-center w-[50px] h-[50px]' />
          {modalMessage}
        </Modal>
      </div>
    </>

  )
}

export default page
