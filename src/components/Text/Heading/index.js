import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const HeadingWrapper = styled.div`
    margin: 0.5rem 2rem;
`;

const Heading = ({children}) => {
  return (<HeadingWrapper>
    <Typography style={{fontWeight: 'bold'}} variant="h4">{children}</Typography>
  </HeadingWrapper>);
}

export default Heading
