import React from 'react';

function Login() {
  return (
    <div id="login-wrapper">
      <form>
        <div className="form-group">
          <label htmlFor="username">使用者名稱</label>
          <input type="text" name="username" id="username"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">密碼</label>
          <input type="text" name="password" id="password"/>
        </div>
      </form>
    </div>
  )
}

export default Login;