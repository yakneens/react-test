import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker} from 'antd';
import {Layout, Button, Menu} from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/chronograf" component={() => <Home src="/chronograf" />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
          >
           <Menu>
             <Link to="/chronograf">chronograf</Link>
             <Link to="/">Home</Link>
           </Menu>
         </Sider>
      </Layout>
      <Content>
        <MainBody src={this.props.src} />
      </Content>
      <Footer>footer</Footer>
     </Layout>
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
