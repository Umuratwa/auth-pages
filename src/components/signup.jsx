import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [signUpStatus, setSignUpStatus] = useState(null); // null for no message, 'success' for successful sign-up, 'error' for sign-up error
  const [formErrors, setFormErrors] = useState({}); // object to track form validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear validation error if the user starts typing in the field again
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Perform form validation
    const errors = {};
    if (!formData.name.trim() || !/^[a-zA-Z]+$/.test(formData.name)) {
      errors.name = 'Name must contain only letters';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password.trim() || formData.password.trim().length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      // Simulate a sign-up process (replace this with your actual sign-up logic)
      // For demonstration, we're just waiting for 1 second and then setting the sign-up status to 'success'
      // In a real application, you would send the form data to your backend for processing
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSignUpStatus('success');
    } catch (error) {
      console.error('Error signing up:', error.message);
      setSignUpStatus('error');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-400 border rounded-4xl">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {signUpStatus === 'success' && (
          <div className="text-green-600 mb-4">Sign up successful! You can now log in.</div>
        )}
        {signUpStatus === 'error' && (
          <div className="text-red-600 mb-4">Error signing up. Please try again.</div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.name && 'border-red-500'}`}
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {formErrors.name && <p className="text-red-500 text-xs italic">{formErrors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.email && 'border-red-500'}`}
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formErrors.email && <p className="text-red-500 text-xs italic">{formErrors.email}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${formErrors.password && 'border-red-500'}`}
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {formErrors.password && <p className="text-red-500 text-xs italic">{formErrors.password}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <p> Already have an account </p>
          <Link to ="/signin">Login here</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
