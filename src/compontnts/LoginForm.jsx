import React, { useState } from "react";
import { useLoginMutation } from "../redux/features/auth/authApiSlice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import styles from "./SignupForm.module.css"; // Import the CSS module

const LoginForm = () => {
  const navigate = useNavigate();
  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });
  const [login, { isError, isLoading, error, isSuccess }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        email: userInputs.email,
        password: userInputs.password,
      });

      const accessToken = data?.accessToken; // Use optional chaining
      console.log(accessToken);

      if (accessToken) {
        Cookies.set("accessToken", accessToken); // Added security options
        setUserInputs({
          email: "",
          password: "",
        });
         navigate("/dashboard");
      }
    } catch (err) {
      console.error("logging in  error:", err);
      // Error handled by RTK Query, see isError and error below
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {" "}
      {/* Apply form style */}
      {isError && (
        <div className={styles["error-message"]}>
          {" "}
          {/* Access style using bracket notation */}
          Error: {error?.data?.message || "Registration failed."}
        </div>
      )}
      <fieldset className={styles.fieldset}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={userInputs.email}
          onChange={(e) =>
            setUserInputs((prev) => ({ ...prev, email: e.target.value }))
          }
          className={styles.input}
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={userInputs.password}
          onChange={(e) =>
            setUserInputs((prev) => ({ ...prev, password: e.target.value }))
          }
          className={styles.input}
        />
      </fieldset>
      <button type="submit" disabled={isLoading} className={styles.button}>
        {" "}
        {/* Apply button style */}
        {isLoading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
};

export default LoginForm;
