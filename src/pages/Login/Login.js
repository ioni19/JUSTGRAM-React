import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
      <body className="">
        <div className="flex-center">
          <div className="login-container">
            <div className="logo-wrapper flex-center">
              <span className="logo-text">Justgram</span>
            </div>
            <div className="form-wrapper">
              <div className="login-wrapper flex-center">
                <input
                  id="id-input"
                  className="login-input"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
              </div>
              <div className="login-wrapper flex-center">
                <input
                  id="pw-input"
                  className="login-input"
                  type="text"
                  placeholder="비밀번호"
                />
              </div>
              <div className="button-wrapper flex-center">
                <Link to="/main">
                  <button className="login-btn flex-center">로그인</button>
                </Link>
              </div>
            </div>
            <div className="extra-wrapper flex-center">
              <a className="find-pw">비밀번호를 잊으셨나요?</a>
            </div>
          </div>
        </div>
        <script src="./js/login.js"></script>
      </body>
  );
};

export default Login;
