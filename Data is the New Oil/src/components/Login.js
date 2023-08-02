import React, { useState } from 'react';

const LoginForm = () => {
  const [name, setName] = useState('Name...');
  const [email, setEmail] = useState('Email...');
  const [password, setPassword] = useState('Password...');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto bg-yellow-100 p-6 rounded-md border border-orange-500">
     <h2 className="text-2xl mb-4 text-center text-orange-500">LOGIN</h2>
      <div className="mb-4">
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
      >
        Submit
      </button>
    </form>
    </>
  );
};

export default LoginForm;