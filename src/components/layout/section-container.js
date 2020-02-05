import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import VisibilitySensor from 'react-visibility-sensor';

const SectionContainer = styled('div')(
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: [null, 'center'],
    py: [4, null, null, 3],
    px: [2, null, null, 3],
    maxWidth: '120rem',
    minHeight: '100vh'
  })
);

export default ({ children, setVisibleSection, id }) => {
  const sectionChange = isVisible => {
    if (isVisible) {
      setVisibleSection(id);
    }
  };

  return (
    <VisibilitySensor
      onChange={sectionChange}
      partialVisibility={true}
      offset={{ top: 0, bottom: 560 }}
    >
      <SectionContainer id={id}>{children}</SectionContainer>
    </VisibilitySensor>
  );
};
