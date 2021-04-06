import React from 'react';

import { itemList } from './ItemList.module.scss';

const ItemList = (props) => {
  const { item } = props;

  return (
    <div className={itemList}>
      <h4>{item.title}</h4>
      <p>{item.subtitle}</p>
      <p>{item.description}</p>
    </div>
  )
}

export default ItemList;
