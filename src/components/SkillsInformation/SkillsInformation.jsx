import React from 'react';
import { List, ItemSkill } from './../index';

import { skillsInformation } from './SkillsInformation.module.scss';

function SkillsInformation(props) {
  const { title, items } = props;

  return (
    <div className={skillsInformation}>
      <h3>{title}</h3>
      <List items={items} render={(item) => <ItemSkill item={item} />} />
    </div>
  )
}

export default SkillsInformation