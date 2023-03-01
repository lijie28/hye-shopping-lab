import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import { ProductDetails } from './components/ProductDetails/ProductDetails'
import { ProductCard } from './components/ProductCard/ProductCard'
import { Welcome } from './components/Welcome/Welcome'
import { Col, Row } from 'antd';
import { WarmUp } from './components/WarmUp/WarmUp';
import { Instruction } from './components/Instruction/Instruction';
const { Header, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: true,
      warmUp: false,
      instruction: false,
      showProductCards: false,
      showProductDetails0: false,
      showProductDetails1: false,
      showProductDetails2: false
    };
  }

  skipWelcome = () => {
    this.setState({
      welcome: false,
      warmUp: true,
      instruction: false,
      showProductCards: false,
      showProductDetails0: false,
      showProductDetails1: false,
      showProductDetails2: false
    })
  }

  skipWarmUp = () => {
    this.setState({
      welcome: false,
      warmUp: false,
      instruction: true,
      showProductCards: false,
      showProductDetails0: false,
      showProductDetails1: false,
      showProductDetails2: false
    })
  }

  skipInstruction = () => {
    this.setState({
      welcome: false,
      warmUp: false,
      instruction: false,
      showProductCards: true,
      showProductDetails0: false,
      showProductDetails1: false,
      showProductDetails2: false
    })
  }

  backToMainPage = () => {
    this.setState({
      welcome: false,
      warmUp: false,
      instruction: false,
      showProductCards: true,
      showProductDetails0: false,
      showProductDetails1: false,
      showProductDetails2: false
    })
  }

  getMousePos = (event) => {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    var timestamp = Date.now();
    const eventKey = 'mouse_move';
    const data = this.props.data;
    data[eventKey].push(`${timestamp},${x},${y}`);
    console.log(`${timestamp}, x: ${x} y: ${y}`)
  }

  render() {
    const data = this.props.data;
    let path;
    if (this.state.showProductCards) {
      path = '';
    } else if (this.state.showProductDetails0) {
      path = 'product_0';
    } else if (this.state.showProductDetails1) {
      path = 'product_1';
    } else {
      path = 'product_2';
    }
    const products = this.props.products;
    const prices = this.props.prices;
    const ProductCards = () => (
      <Row gutter={24}>
        <Col span={8} onClick={() => {
          this.setState({
            showProductCards: false,
            showProductDetails0: true,
            showProductDetails1: false,
            showProductDetails2: false
          })
        }}>
          <a>
            <ProductCard
              data={data}
              index={0}
              products={products}
              prices={prices} />
          </a>
        </Col>
        <Col span={8} onClick={() => {
          this.setState({
            showProductCards: false,
            showProductDetails0: false,
            showProductDetails1: true,
            showProductDetails2: false
          })
        }}>
          <a>
            <ProductCard
              data={data}
              index={1}
              products={products}
              prices={prices} />
          </a>
        </Col>
        <Col span={8} onClick={() => {
          this.setState({
            showProductCards: false,
            showProductDetails0: false,
            showProductDetails1: false,
            showProductDetails2: true
          })
        }}>
          <a>
            <ProductCard
              data={data}
              index={2}
              products={products}
              prices={prices} />
          </a>
        </Col>
      </Row>
    )
    return (
      this.state.welcome ? <Welcome skipWelcome={this.skipWelcome} /> :
        this.state.warmUp ? <WarmUp skipWarmUp={this.skipWarmUp} /> :
          this.state.instruction ? <Instruction skipInstruction={this.skipInstruction} /> :
            <html onMouseMove={this.getMousePos}>
              <Layout>
                <Header className='shopping-header'>
                  <a to="/" onClick={this.backToMainPage}>
                    <h1 style={{
                      color: "#fadb14"
                    }}>Shopping</h1>
                  </a>
                </Header>
                <Layout>
                  <Layout>
                    <Breadcrumb style={{ margin: '16px 0', padding: '0 24px 0 24px' }}>
                      <Breadcrumb.Item onClick={this.backToMainPage}>
                        <a to="/" >Home</a>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item>{path}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                      className="site-layout-background"
                      style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        backgroundColor: '#ffffff'
                      }}
                    >
                      {this.state.showProductCards ? <ProductCards /> : null}
                      {this.state.showProductDetails0 ? <ProductDetails data={data} index={0} products={products} prices={prices} backToMainPage={this.backToMainPage} /> : null}
                      {this.state.showProductDetails1 ? <ProductDetails data={data} index={1} products={products} prices={prices} backToMainPage={this.backToMainPage} /> : null}
                      {this.state.showProductDetails2 ? <ProductDetails data={data} index={2} products={products} prices={prices} backToMainPage={this.backToMainPage} /> : null}
                    </Content>
                  </Layout>
                </Layout>
              </Layout>
            </html>
    );
  }
}

export default App;