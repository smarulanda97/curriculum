import React from 'react';
import { Image } from 'react-bootstrap';

import { imageProfile } from './ImageProfile.module.scss';

class ImageProfile extends React.Component {
  render() {
    return (
      <div className={imageProfile}>
        <Image src={`${process.env.PUBLIC_URL}/assets/images/profile-avatar.png`} alt=""/>
      </div>
    )
  }
}

export default ImageProfile;