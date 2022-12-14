import React from "react";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.scss";

const Login = () => {
  const [idInput, setIdInput] = useState("");
  const [pwInput, setPwInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const onChange = (event) => {
    const { value } = event.target;
    const { id } = event.target;
    id === "id" ? setIdInput(value) : setPwInput(value);
    idInput.includes("@") && pwInput.length > 4
      ? setIsValid(false)
      : setIsValid(true);
  };
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main");
  }
  return (
    <div className="container">
      <div className="login-container">
        <div className="logo-wrapper">
          <span className="logo-text">Justgram</span>
        </div>
        <div className="form-wrapper">
          <div className="input-wrapper">
            <input
              id="id"
              onChange={onChange}
              value={idInput}
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              autocomplete="off"
            />
          </div>
          <div className="input-wrapper">
            <input
              id="pw"
              onChange={onChange}
              value={pwInput}
              type="text"
              placeholder="비밀번호"
              autocomplete="off"
            />
          </div>
          <div className="button-wrapper">
              <button
                className={isValid ? "disabled" : "active"}
                disabled={isValid}
                onClick = {goToMain}
              >
                로그인
              </button>
          </div>
        </div>
        <div className="extra-wrapper">
          <a className="find-pw">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
