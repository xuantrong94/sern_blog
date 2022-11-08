import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className="auth">
    <h1>Register</h1>
    <form>
      <input type="text" placeholder="username" required/>
      <input type="email" placeholder="email" required/>
      <button>Register</button>
      <span>
        You have an account? <Link to="/login">Register</Link>
      </span>
    </form>
  </div>
  )
}

export default Register