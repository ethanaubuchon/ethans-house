import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout
import Colors from 'constants/colors';

import Navbar from 'layout/navbar'

const pageStyle = {
  height: '100%'
};

class Page extends React.Component {
  render() {
    return(
      <Layout style={pageStyle}>
        <Navbar />
        <Content style={pageStyle}>
          This is a system designed to control Ethan's House!
          <br />
          Is it updating?
        </Content>
      </Layout>
    );
  }
}

export default Page;
