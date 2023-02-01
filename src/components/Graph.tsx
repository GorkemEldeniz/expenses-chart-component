import React from 'react'
import * as S from "../styled/index";
import data from "../../data.json";
import { useState } from 'react';

function Graph() {
  const [hovered, setHovered] = useState<any | number>(null);

  return (
    <S.Graph>
      {data.map(({ day, amount }, index) => <div className='col' key={index}>
        <S.Column onMouseOver={() => setHovered(index)} active={index == 3} amount={amount * 1.5}>
          {hovered == index && <S.PopUp>${amount}</S.PopUp>}
        </S.Column>
        <S.Span onMouseOver={() => setHovered(index)} >{day}</S.Span>
      </div>)}
    </S.Graph>
  )
}

export default Graph