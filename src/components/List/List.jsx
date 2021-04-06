import React from 'react';
import { list } from './List.module.scss'

const List =  (props) => {
  const { items, render } = props;

  return (
    <ul className={`list-group ${list}`}>
      {items.map((item) => <li key={item.id} className={'list-item'}>{render(item)}</li> )}
    </ul>
  )
}

export default List;