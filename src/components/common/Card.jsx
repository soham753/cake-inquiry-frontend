import React from "react";

const Card = () => {
  return (
    <div className="login-card">
      <h2 className="login-title"> Cake Admin Login</h2>

      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>

        <button type="submit">Login</button>
      </form>

    </div>
  );
};

export default Card;
