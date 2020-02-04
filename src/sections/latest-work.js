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
        description='Soundsave is a web application designed to connect electronic music artists with electronic music fans. Artists can share their latest tracks, allowing users to download them for free. This provides a way for up and coming artists to mix, remix, and promote their favorite music to a much wider audience.'
        url='https://mixdown.netlify.com/'
      />
    </SectionContainer>
  );
};

export default LatestWorkSection;
