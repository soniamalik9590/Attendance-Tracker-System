import React from 'react'
import "./signup-style.css";

export default function Signup() {
  return (
    <form action="signup.php" method="post">
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required/>
    </div>

    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required/>
    </div>

    <input type="submit" value="Login"/>
  </form>
    )
}
