import './Register.css'

export default function Register() {
  return (
    <div className="register-box-wrapper">

      <div className="register-box">
        <h2 className="register-title">Create Account</h2>
           
        <div className="register-input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />
        </div>

        <div className="register-input-group">
          <label>Email</label>
          <input type="text" placeholder="Enter your email" />
        </div>

        <div className="register-input-group">
          <label>Mobile Number</label>
          <input type="text" placeholder="Enter mobile number" />
        </div>

        <div className="register-input-group">
          <label>Password</label>
          <input type="password" placeholder="Create a password" />
        </div>

        <div className="register-input-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Re-enter password" />
        </div>

        <button className="register-btn">Register</button>

        <p className="register-footer-text">
          <a href="login" className="LOGIN">
          Already have an account? <span>Login</span></a>
        </p>
      </div>

    </div>
  );
}
