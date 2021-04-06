import { intro } from './Intro.module.scss';
import PropTypes from 'prop-types';

const Intro = (props) => {
  const { fullName, jobTitle } = props;

  return (
    <div className={intro}>
      <h1 className={'text-white'}>{fullName}</h1>
      <h2 className={'text-secondary'}>{jobTitle}</h2>
    </div>
  )
}

Intro.propTypes = {
  fullName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
}

export default Intro;