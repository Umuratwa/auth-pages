// import React, { useState } from 'react';

// const Form =() =>{
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Message:</label>
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;
