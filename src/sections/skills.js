import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import SectionContainer from '../components/layout/section-container';
import { H2, H4 } from '../components/headings';
import SectionDivider from '../components/section-divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faSass,
  faLess,
  faFigma,
  faPython,
  faNpm,
  faSlack
} from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { PSmall } from '../components/text';

const DevIcons = styled('div')(
  css({
    display: 'flex',
    flexWrap: 'wrap',
    py: 1,
    mb: 2
  })
);

const DevIcon = styled(FontAwesomeIcon)(
  css({
    fontSize: '4.8rem',
    color: 'text',
    mr: 2,
    mb: 2
  })
);

const WorkflowItems = styled('div')(
  css({
    display: 'flex',
    flexDirection: 'column',
    pl: 2
  })
);

const WorkflowItemContainer = styled('div')(
  css({
    display: 'flex',
    alignItems: 'center',
    fontSize: 0
  })
);

const WorkflowItemText = styled(PSmall)(
  css({
    ml: 1
  })
);

const WorkflowItem = ({ text }) => (
  <WorkflowItemContainer>
    <FontAwesomeIcon icon={faCheck} />
    <WorkflowItemText>{text}</WorkflowItemText>
  </WorkflowItemContainer>
);

const SkillsSection = () => {
  return (
    <>
      <SectionContainer>
        <H2>Skills</H2>
        <div>
          <H4>Programming Languages &amp; Tools</H4>
          <DevIcons>
            <DevIcon icon={faHtml5} />
            <DevIcon icon={faCss3Alt} />
            <DevIcon icon={faJsSquare} />
            <DevIcon icon={faReact} />
            <DevIcon icon={faNodeJs} />
            <DevIcon icon={faSass} />
            <DevIcon icon={faLess} />
            <DevIcon icon={faFigma} />
            <DevIcon icon={faPython} />
            <DevIcon icon={faNpm} />
            <DevIcon icon={faSlack} />
          </DevIcons>
        </div>
        <div>
          <H4>Workflow</H4>
          <WorkflowItems>
            <WorkflowItem text='Mobile-First, Responsive Design' />
            <WorkflowItem text='Cross Browser Testing &amp; Debugging' />
            <WorkflowItem text='Cross Functional Teams' />
            <WorkflowItem text='Agile Development &amp; Scrum' />
          </WorkflowItems>
        </div>
      </SectionContainer>
      <SectionDivider />
    </>
  );
};

export default SkillsSection;
