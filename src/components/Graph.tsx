import React from 'react'
import * as S from "../styled/index";
import data from "../../data.json";
import { useState } from 'react';

export type Idata = {
  day: string;
  amount: number;
}

function Graph() {
  const [hovered, setHovered] = useState<any | number>(null);
  let shallowData = [...data];
  const maxAmount = shallowData.sort((a: Idata, b: Idata) => b?.amount - a?.amount)[0]?.amount;


  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setHovered(null);
  }
  return (
    <S.Graph>
      {data.map(({ day, amount }, index) => <div className='col' key={index}>
        <S.Column onMouseOver={() => setHovered(index)} onMouseOut={handleLeave} active={amount === maxAmount} amount={amount * 1.5}>
          {hovered == index && <S.PopUp>${amount}</S.PopUp>}
        </S.Column>
        <S.Span>{day}</S.Span>
      </div>)}
    </S.Graph>
  )
}

export default Graph