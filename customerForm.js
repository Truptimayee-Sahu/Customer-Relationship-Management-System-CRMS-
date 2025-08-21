   import React, { useState } from 'react';
   import axios from 'axios';

   const CustomerForm = () => {
       const [customer, setCustomer] = useState({
           FirstName: '',
           LastName: '',
           Email: '',
           Phone: '',
           Address: '',
           DateOfBirth: ''
       });

       const handleChange = (e) => {
           setCustomer({ ...customer, [e.target.name]: e.target.value });
       };

       const handleSubmit = async (e) => {
           e.preventDefault();
           await axios.post('http://localhost:5000/api/customers', customer);
           // Optionally reset the form or handle success
       };

       return (
           <form onSubmit={handleSubmit}>
               <input name="FirstName" onChange={handleChange} placeholder="First Name" required />
               <input name="LastName" onChange={handleChange} placeholder="Last Name" required />
               <input name="Email" onChange={handleChange} placeholder="Email" required />
               <input name="Phone" onChange={handleChange} placeholder="Phone" required />
               <input name="Address" onChange={handleChange} placeholder="Address" required />
               <input name="DateOfBirth" type="date" onChange={handleChange} required />
               <button type="submit">Add Customer</button>
           </form>
       );
   };

   export default CustomerForm;
   