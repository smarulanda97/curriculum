import { Container, Row, Col } from 'react-bootstrap';
import { Intro, ImageProfile, AboutMe, BasicInformation, SkillsInformation } from './components';
import { 
  itemsEducation, 
  itemsExperience, 
  itemsReference, 
  skillsProeficiency, 
  skillsPersonal, 
  skillsProfessional
} from './database'

import { columnLeft } from './App.module.scss';

function App() {
  return (
    <Container>
      <Row className={'justify-content-center'}>
        <Col md={6} className={columnLeft}>
          <Intro fullName={'Santiago M'} jobTitle={'Drupal developer'}/>

          <BasicInformation title={'Education'} items={itemsEducation}/>
          <BasicInformation title={'Experience'} items={itemsExperience}/>
          <BasicInformation title={'Reference'} items={itemsReference}/>
        </Col>
        <Col md={4}>
          <ImageProfile />
          <AboutMe description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'}/>

          <SkillsInformation title={'Professional Skill'} items={skillsProfessional} />
          <SkillsInformation title={'Proficiency Skill'} items={skillsProeficiency} />
          <SkillsInformation title={'Personal Skill'} items={skillsPersonal} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
