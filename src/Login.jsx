import './Login.css'

export default function Login() {
  return (
    <div className="login-box-wrapper">

      <div className="login-box">
        <h2 className="login-title">Login</h2>

        <div className="login-input-group">
          <label>Email</label>
          <input type="text" placeholder="Enter your email" />
        </div>

        <div className="login-input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button className="login-btn">Login</button>

        <p className="login-footer-text">
          <a href="register" className="LOGIN">
          Don't have an account? <span>Create Account</span></a>
        </p>
      </div>

    </div>
  );
}







