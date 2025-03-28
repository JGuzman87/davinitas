"use client";

import {useState} from 'react';

interface Client {
  first: string,
  last: string,
  company: string,
  email: string,
  phone: string,
  date_time: string
}



const Form = () => {

  const [client, setClient] = useState <Client>({first: '', last: '', company: '', email: '', phone: '' , date_time: '' })
  const [error, setError] = useState('');
  

  const handleChange = (e:any) => {

//extract name and value from event.target
    const {name, value } = e.target;
//name element updates to the input value
 setClient(prevClient => ({...prevClient, [name]: value}));

    // if (e.target.name === 'first') {
    //   setClient({...client, first: e.target.value});
    // } else if(e.target.name === 'last') {
    //   setClient({...client, last: e.target.value});
    // }else if (e.target.name === 'company') {
    //   setClient({...client, company: e.target.value});
    // } else if(e.target.name === 'email') {
    //   setClient({...client, email: e.target.value})
    // }else if(e.target.name === 'phone') {
    //   setClient({...client, phone: e.target.value})
    // }else if(e.target.name === 'date_time') {
    //   setClient({...client, date_time: e.target.value})
    // }

  }

  const handleClick = (e:any) => {
    e.preventDefault();

    //This grabs all the values from the client object and puts them into an array.
    //	.every() is an array method that checks every item in an array and returns true only if all items pass the test.
    const isFormComplete = Object.values(client).every(
      (value) => value.trim() !== ""
    ); 
    if (!isFormComplete) {
     setError('Please fill all fields');
    } else {
      setError('');
      console.log(client);
    }
  }
  

  return (
    <form className="form-container shadow-2xl">
      <label className="floating-label">
        <span>First</span>
        <input
          value={client?.first}
          name="first"
          type="text"
          placeholder="enter first name"
          className="input input-md"
          onChange={handleChange}
        />
      </label>
      <label className="floating-label">
        <span>Last</span>
        <input
          value={client?.last}
          name="last"
          type="text"
          placeholder="enter last name"
          className="input input-md"
          onChange={handleChange}
        />
      </label>
      <label className="floating-label">
        <span>Company</span>
        <input
          value={client?.company}
          name="company"
          type="text"
          placeholder="enter company name"
          className="input input-md"
          onChange={handleChange}
        />
      </label>

      <label className="floating-label">
        <span>email</span>
        <input
          value={client?.email}
          name="email"
          type="email"
          required
          placeholder="enter email"
          className="input validator input-md"
          onChange={handleChange}
        />
        <div className="validator-hint">Enter valid email address</div>
      </label>
      <label className="floating-label">
        <span>Phone</span>
        <input
          value={client?.phone}
          name="phone"
          type="text"
          placeholder="phone number"
          className="input input-md"
          onChange={handleChange}
        />
      </label>
      <label className="floating-label">
        <span>date & time</span>
        <input
          value={client?.date_time}
          name="date_time"
          type="text"
          placeholder="type date and time"
          className="input input-md"
          onChange={handleChange}
        />
      </label>
      <button className="btn btn-warning" onClick={handleClick}>
        Get Started Now
      </button>
      <p style={{ color: "red" }}>{error}</p>
    </form>
  );
}

export default Form