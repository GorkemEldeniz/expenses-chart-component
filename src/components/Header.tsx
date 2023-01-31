import React from 'react'
import * as S from "../styled/index";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <S.Header>
      <div>
        <span>My balance</span>
        <h1>$921.48</h1>
      </div>
      <img src={logo} alt="Logo" />
    </S.Header>
  )
}

export default Header