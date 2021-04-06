import React from 'react';
import { List, ItemList } from './../index';

// import styles from './BasicInformation.module.scss';
import { basicInformation } from './BasicInformation.module.scss';

const BasicInformation = (props) => {
  const { title, items } = props;

  return (
    <div className={basicInformation}>
      <h3>{title}</h3>
      <List items={items} render={(item) => <ItemList item={item} />} />
    </div>
  )
}

export default BasicInformation;