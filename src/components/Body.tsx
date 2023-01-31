import React from 'react'
import Graph from "./Graph";
import * as S from "../styled/index";

function Body() {
  return (
    <S.Body>
      <S.H1>Spending - Last 7 days</S.H1>

      <Graph />
      <S.Divider></S.Divider>

      <div>
        <S.Span>Total this month</S.Span>
        <S.Footer>
          <S.H1>$478.33</S.H1>
          <div>
            <div>+2.4%</div>
            <S.Span>from last month</S.Span>
          </div>
        </S.Footer>
      </div>
    </S.Body>
  )
}

export default Body