import { useRef } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const userRef = useRef();

  return (
    <>
      <section>
        <h1>Register</h1>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            required
          />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />

          <label htmlFor="confirm_pwd">Confirm Password:</label>
          <input type="password" id="confirm_pwd" />

          <button>Sign Up</button>
        </form>
        <p>
          Already registered?
          <br />
          <span className="line">
            <Link to="/">Sign In</Link>
          </span>
        </p>
      </section>
    </>
  );
};

export default Register;
