import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import SectionContainer from '../components/layout/section-container';
import { H2, H3, H4 } from '../components/headings';
import { PSmall } from '../components/text';

const WorkItemContainer = styled('div')(
  css({
    mb: 3
  })
);

const WorkItemDescription = styled(PSmall)(
  css({
    mb: 2
  })
);

const WorkItemUrl = styled('a')(
  css({
    fontSize: 0,
    color: 'primary',
    fontWeight: 'medium'
  })
);

const WorkItem = ({ heading, subheading, description, url }) => (
  <WorkItemContainer>
    <H3>{heading}</H3>
    <H4>{subheading}</H4>
    <WorkItemDescription>{description}</WorkItemDescription>
    <WorkItemUrl href={url} target='_blank'>
      {url}
    </WorkItemUrl>
  </WorkItemContainer>
);

const LatestWorkSection = () => {
  return (
    <SectionContainer>
      <H2>Latest Work</H2>
      <WorkItem
        heading='soundsave'
        subheading='React / NodeJS / Express'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec magna at urna mattis tincidunt. Vivamus accumsan justo at dolor efficitur ornare. Ut ornare sem ac arcu mattis porttitor. Praesent ex justo, ultrices sed ligula non, varius egestas metus.'
        url='https://github.com/dvcolin/soundsave-frontend'
      />
    </SectionContainer>
  );
};

export default LatestWorkSection;
