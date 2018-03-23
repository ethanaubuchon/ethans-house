import { Layout } from 'antd';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router'

import Colors from 'constants/colors';
import Navbar from 'layout/navbar'
import LoginPage from 'pages/login-page';
import SignupPage from 'pages/signup-page';

const { Content } = Layout;

const pageStyle = {
  height: '100%',
  // backgroundColor: Colors.secondary[0]
}

class Page extends React.Component {
  render() {
    return(
      <Layout style={pageStyle}>
        <Navbar />
        <Content style={pageStyle}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Redirect from="*" to="/login"/>
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default Page;
