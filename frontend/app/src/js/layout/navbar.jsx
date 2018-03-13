import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout
import Colors from 'constants/colors';

const barStyle = {
  backgroundColor: Colors.primary[0],
  padding: '0px 10px 0px 10px',
  margin: 0
};

const titleStyle = {
  color: 'white'
}

class NavBar extends React.Component {
  render() {
    return(
        <Header style={barStyle}>
          <h2 style={titleStyle}>Ethan's Home</h2>
        </Header>
    );
  }
}

export default NavBar;
