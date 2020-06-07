import React from 'react';
import PageTitle from 'components/atoms/PageTitle/PageTitle';

type TimerTemplateProps = {
  children: React.ReactNode;
  title: string;
};

const TimerTemplate = ({ children, title }: TimerTemplateProps) => {
  return (
    <>
      <PageTitle>{title}</PageTitle>
      <div>{children}</div>
    </>
  );
};

export default TimerTemplate;
