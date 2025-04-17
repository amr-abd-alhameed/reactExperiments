

import React, { useState } from "react";
import { useRegisterMutation } from "../redux/features/auth/authApiSlice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import styles from "./SignupForm.module.css"; // Import the CSS module

const SignupForm = () => {
  const navigate = useNavigate();
  const [userInputs, setUserInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [register, { isError, isLoading, error, isSuccess }] =
    useRegisterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register({
        first_name: userInputs.first_name,
        last_name: userInputs.last_name,
        email: userInputs.email,
        password: userInputs.password,
      });

      const accessToken = data?.accessToken; // Use optional chaining

      if (accessToken) {
        Cookies.set("accessToken", accessToken, {
          secure: true,
          httpOnly: true,
          sameSite: "strict",
        }); // Added security options
        setUserInputs({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        });
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Registration error:", err);
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
        {" "}
        {/* Apply fieldset style */}
        <label htmlFor="first_name" className={styles.label}>
          first_name
        </label>{" "}
        {/* Apply label style */}
        <input
          type="text"
          id="first_name"
          name="first_name"
          required
          value={userInputs.first_name}
          onChange={(e) =>
            setUserInputs((prev) => ({ ...prev, first_name: e.target.value }))
          }
          className={styles.input} // Apply input style
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <label htmlFor="last_name" className={styles.label}>
          last_name
        </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          required
          value={userInputs.last_name}
          onChange={(e) =>
            setUserInputs((prev) => ({ ...prev, last_name: e.target.value }))
          }
          className={styles.input}
        />
      </fieldset>
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
          minLength={6}
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

export default SignupForm;
