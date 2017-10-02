import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker} from 'antd';
import {Layout, Button, Menu} from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;





class App extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {nav: "/"};
  }
  handleSelect(e) {
    console.log(e);
    console.log(`selected ${e.key}`);
    this.setState({nav: `/${e.key}`});
  }
  render() {
    return (
      <div className="App">

        <Layout>
          <Header>
            <div className="logo" />
          </Header>
          <Layout>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
            >
              <Menu mode="inline" onSelect={this.handleSelect}>
                <Menu.Item key="chronograf">Chronograf</Menu.Item>
                <Menu.Item key="rabbitmq">RabbitMQ</Menu.Item>
                <Menu.Item key="consul">Consul</Menu.Item>
                <Menu.Item key="airflow">Airflow</Menu.Item>
                <Menu.Item key="celery">Celery</Menu.Item>
                <Menu.Item key="grafana">Grafana</Menu.Item>
                <Menu.Item key="kibana">Kibana</Menu.Item>
              </Menu>
            </Sider>
            <Content><MainBody src={this.state.nav}/></Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>

      </div>
    );
  }
}

class MainBody extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <iframe src={this.props.src} title="mainBody"></iframe>
    );
  }
}

export default App;
