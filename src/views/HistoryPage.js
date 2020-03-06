import React from 'react';
import { connect } from 'react-redux';
import Title from 'components/atoms/Title/Title';
import UserTemplate from 'templates/UserTemplate';

// eslint-disable-next-line
const HistoryPage = ({ IAmPropsInYourComponent }) => (
  <UserTemplate>
    <Title onlyScreenreader>History</Title>
  </UserTemplate>
);

const mapStateToProps = state => {
  const { note } = state; // biore ze statu to ;p destrukturyzuje ze state globalnego
  return { IAmPropsInYourComponent: note }; // zwracam pdo nazwa jaka chce porpsa
};

export default connect(mapStateToProps)(HistoryPage);
