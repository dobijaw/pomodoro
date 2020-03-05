import React from 'react';
import styled from 'styled-components';

const HeadlineTag = ({ tag: Tag, children, ...props }) => (
  <Tag className={props.className}>{children}</Tag>
);

const Headline = styled(HeadlineTag)`
  display: block;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.importantText};
  font-size: ${({ width, theme }) => width || theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  letter-spacing: 0.08em;
  line-height: 1.5;
`;

export default Headline;
