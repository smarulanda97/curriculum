import React from 'react'
import { itemSkill } from './ItemSkill.module.scss';

function ItemSkill(props) {
  const { item } = props;

  return (
    <div className={itemSkill}>
      <div>
        <h4>{item.title}</h4>
      </div>
      <div>
        <p>{item.experiencie}</p>
      </div>
    </div>
  )
}

export default ItemSkill;