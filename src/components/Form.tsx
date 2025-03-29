"use client";
import './Form.css';
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
  
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //extract name and value from event.target
    const { name, value } = e.target;
    //name element updates to the input value
    setClient((prevClient) => ({ ...prevClient, [name]: value }));

  };

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(client)

    //This grabs all the values from the client object and puts them into an array.
    //	.every() is an array method that checks every item in an array and returns true only if all items pass the test.
    // const isFormComplete = Object.values(client).every(
    //   (value) => value.trim() !== ""
    // );
    // if (!isFormComplete) {
    //   setError("Please fill all fields");
    // } else {
    //   setError("");
    //   console.log(client);
    // }
  };
  

  return (
    <form className="form-container shadow-2xl" onSubmit={handleClick}>
      <label htmlFor="first" className="first-last-label floating-label">
        First Name:
        <input
          value={client?.first}
          name="first"
          type="text"
          placeholder="enter first name"
          className="input validator input-md w-50"
          onChange={handleChange}
          required
        />
        Last Name:
        <input
          value={client?.last}
          name="last"
          type="text"
          placeholder="enter last name"
          className="input validator input-md w-50"
          onChange={handleChange}
          required
        />
      </label>


      <label htmlFor="company" className="floating-label">
        Company:
      </label>
      <input
        value={client?.company}
        name="company"
        type="text"
        placeholder="enter company name"
        className="input validator input-md"
        onChange={handleChange}
        required
      />

      <label htmlFor="email" className="floating-label">
        Email:
      </label>
      <input
        value={client?.email}
        name="email"
        type="email"
        placeholder="enter email"
        className="input validator input-md"
        onChange={handleChange}
        required
      />

      <label htmlFor="phone" className="floating-label">
        Phone:{" "}
      </label>

      <input
        value={client?.phone}
        name="phone"
        type="text"
        placeholder="phone number"
        className="input validator input-md"
        onChange={handleChange}
        required
      />

      <label htmlFor="date_time" className="floating-label">
        Preferred Date & Time
      </label>

      <input
        value={client?.date_time}
        name="date_time"
        type="text"
        placeholder="type date and time"
        className="input validator input-md"
        onChange={handleChange}
        required
      />

      <button className="btn btn-warning" type="submit">
        Get Started Now
      </button>
    </form>
  );
}

export default Form