import React from 'react'
import Graph from "./Graph";
import * as S from "../styled/index";
import data from "../../data.json";
import { Idata } from './Graph';

function Body() {

  let totalAmount = data.reduce((acc: number, cur: Idata) => acc + cur.amount, 0);

  return (
    <S.Body>
      <S.H1>Spending - Last 7 days</S.H1>

      <Graph />
      <S.Divider></S.Divider>

      <div>
        <S.Span>Total this month</S.Span>
        <S.Footer>
          <S.H1>${totalAmount}</S.H1>
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