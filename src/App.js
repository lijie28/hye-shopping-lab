import React, { Component } from 'react';
// import './App.css';
import './App.less';
import { Layout, Menu, Breadcrumb } from 'antd';
// import 'antd/dist/antd.css';
// import 'antd/dist/antd.min.css';
import { ProductDetails } from './components/ProductDetails/ProductDetails'
import { ProductCard } from './components/ProductCard/ProductCard'
import { Welcome } from './components/Welcome/Welcome'
import { Col, Row } from 'antd';
import { WarmUp } from './components/WarmUp/WarmUp';
import { Instruction } from './components/Instruction/Instruction';
import { Questionnaire } from './components/Questionnaire/Questionnaire';
import { Demographics } from './components/Demographics/Demographics';
const { Header, Content } = Layout;

const ShowPage = {
  welcome: 'welcome',
  warmUp: 'warmUp',
  instruction: 'instruction',
  productCards: 'productCards',
  productDetails0: 'productDetails0',
  productDetails1: 'productDetails1',
  productDetails2: 'productDetails2',
  questionnaire: 'questionnaire',
  demographics: 'demographics',
  showCode: 'showCode'
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPage: ShowPage.welcome,
      recordMouseMoved: false,
      offerAScore: null,
      offerBScore: null,
      offerCScore: null,
    };
  }

  setShowPage = (showPage) => {
    this.setState({
      showPage: showPage
    })
  }

  nextPage = () => {
    if (this.state.showPage === ShowPage.welcome) {
      this.state.recordMouseMoved = false
      this.setShowPage(ShowPage.warmUp)
    } else if (this.state.showPage === ShowPage.warmUp) {
      this.state.recordMouseMoved = false
      this.setShowPage(ShowPage.instruction)
    } else if (this.state.showPage === ShowPage.instruction) {
      this.state.recordMouseMoved = true
      this.setShowPage(ShowPage.productCards)
    } else if (this.state.showPage === ShowPage.productCards) {
      this.state.recordMouseMoved = true
      this.setShowPage(ShowPage.productDetails0)
    } else if (this.state.showPage === ShowPage.productDetails0) {
      this.state.recordMouseMoved = true
      this.setShowPage(ShowPage.questionnaire)
    } else if (this.state.showPage === ShowPage.productDetails1) {
      this.state.recordMouseMoved = true
      this.setShowPage(ShowPage.questionnaire)
    } else if (this.state.showPage === ShowPage.productDetails2) {
      this.state.recordMouseMoved = false
      this.setShowPage(ShowPage.questionnaire)
    } else if (this.state.showPage === ShowPage.questionnaire) {
      this.state.recordMouseMoved = false
      this.setShowPage(ShowPage.demographics)
    }
  }

  backToMainPage = () => {
    this.setState({
      showPage: ShowPage.productCards
    })
  }

  getMousePos = (event) => {
    if (!this.state.recordMouseMoved) {
      return
    }
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
    if (this.state.showPage === ShowPage.productCards) {
      path = '';
    } else if (this.state.showPage === ShowPage.productDetails0) {
      path = 'product_0';
    } else if (this.state.showPage === ShowPage.productDetails1) {
      path = 'product_1';
    } else {
      path = 'product_2';
    }
    const products = this.props.products;
    const prices = this.props.prices;
    const ProductCards = () => (
      <Row gutter={24}>
        <Col span={8} onClick={() => {
          this.setShowPage(ShowPage.productDetails0)
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
          this.setShowPage(ShowPage.productDetails1)
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
          this.setShowPage(ShowPage.productDetails2)
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
      this.state.showPage === ShowPage.welcome ? <Welcome nextPage={this.nextPage} /> :
        this.state.showPage === ShowPage.warmUp ? <WarmUp nextPage={this.nextPage} data={data} /> :
          this.state.showPage === ShowPage.instruction ? <Instruction nextPage={this.nextPage} /> :
            this.state.showPage === ShowPage.questionnaire ? <Questionnaire nextPage={this.nextPage} data={data} products={products} prices={prices} /> :
              this.state.showPage === ShowPage.demographics ? <Demographics data={data} /> :
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
                          {this.state.showPage === ShowPage.productCards ? <ProductCards /> : null}
                          {this.state.showPage === ShowPage.productDetails0 ? <ProductDetails data={data} index={0} products={products} prices={prices} backToMainPage={this.backToMainPage} nextPage={this.nextPage} /> : null}
                          {this.state.showPage === ShowPage.productDetails1 ? <ProductDetails data={data} index={1} products={products} prices={prices} backToMainPage={this.backToMainPage} nextPage={this.nextPage} /> : null}
                          {this.state.showPage === ShowPage.productDetails2 ? <ProductDetails data={data} index={2} products={products} prices={prices} backToMainPage={this.backToMainPage} nextPage={this.nextPage} /> : null}
                        </Content>
                      </Layout>
                    </Layout>
                  </Layout>
                </html>
    );
  }
}

export default App;