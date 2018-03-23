import { Button, Card, Col, Icon, Input, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom'

import Colors from 'constants/colors';

const cardStyle = {
  maxWidth: 1000,
  marginTop: 20,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 10,
  borderRadius: 10,
  backgroundColor: Colors.primary[0],
  border: 0,
  color: 'white',
  fontSize: 16
};

const formInputStyle = {
  margin: 10
};

const loginStyle = {
  margin: 10,
  width: '100%',
  border: 0,
  color: 'gray'
};

const signupStyle = {
  margin: 10,
  width: '100%',
  border: 0,
  backgroundColor: Colors.tertiary[0],
  color: 'lightgray'
};

class LoginPage extends React.Component {
  render() {
    return(
      <Card style={cardStyle}>
        <Row type="flex">
          <Col xs={24} sm={24} md={14}>
            <h1 style={{color: 'white'}}>Ethan's Home!</h1>
            <p>
              Welcome to Ethan's Home! This application is designed to allow
              Ethan and guests to access various guests to access application
              available on the network.
            </p>
          </Col>
          <Col xs={24} sm={24} md={10}>
            <Row>
              <Input
                placeholder="Email"
                type="email"
                name="email"
                style={formInputStyle}
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            </Row>
            <Row>
              <Input
                placeholder="Password"
                type="password"
                style={formInputStyle}
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <Button style={loginStyle}>
                  <Icon type="login" style={{ color: 'gray' }} /> Login
                </Button>
              </Col>
              <Col span={12}>
                <Button style={signupStyle}>
                  <Link to="/signup">
                    <Icon type="user" style={{ color: 'lightgray' }} /> Sign Up
                  </Link>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default LoginPage;
