import React from 'react';
import PropTypes from 'prop-types';

import { aboutMe } from './AboutMe.module.scss';

function AboutMe(props) {
  const { description } = props;

  return (
    <div className={aboutMe}>
      <h3 className={'bg-primary text-white'}>About me</h3>
      <p>{description}</p>
    </div>
  )
}

AboutMe.propTypes = {
  description: PropTypes.string.isRequired
}

export default AboutMe;