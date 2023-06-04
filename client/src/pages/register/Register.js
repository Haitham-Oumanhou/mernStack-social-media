import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <img className="logo" src="assets/tile.png" alt="" />
          {/* <h3 className="loginLogo">Skulga</h3> */}
          <span className="loginDesc">
            Connect with Souls and the world around you on Skulga.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
          <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            
            <button className="loginRegisterButton">
                Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}