import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, Space, Checkbox, Button } from 'antd';
import 'antd/dist/antd.css';
import { ProductDetails } from './components/ProductDetails/ProductDetails'
import { ProductCard } from './components/ProductCard/ProductCard'
import { Welcome } from './components/Welcome/Welcome'
import { Col, Row } from 'antd';
import { WarmUp } from './components/WarmUp/WarmUp';
import { Instruction } from './components/Instruction/Instruction';
import { Questionnaire } from './components/Questionnaire/Questionnaire';

import type { CheckboxChangeEvent } from 'antd/es/checkbox';
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
    if (this.state.showPage == ShowPage.welcome) {
      this.setShowPage(ShowPage.warmUp)
    } else if (this.state.showPage == ShowPage.warmUp) {
      this.setShowPage(ShowPage.instruction)
    } else if (this.state.showPage == ShowPage.instruction) {
      this.setShowPage(ShowPage.productCards)
    } else if (this.state.showPage == ShowPage.productCards) {
      this.setShowPage(ShowPage.productDetails0)
    } else if (this.state.showPage == ShowPage.productDetails0) {
      this.setShowPage(ShowPage.questionnaire)
    } else if (this.state.showPage == ShowPage.productDetails1) {
      this.setShowPage(ShowPage.questionnaire)
    } else if (this.state.showPage == ShowPage.productDetails2) {
      this.setShowPage(ShowPage.questionnaire)
    } else if (this.state.showPage == ShowPage.questionnaire) {
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

  offerAOnChange = (e: CheckboxChangeEvent) => {
    this.setState({
      offerAScore: e.target.tabIndex
    })
  };

  offerBOnChange = (e: CheckboxChangeEvent) => {
    this.setState({
      offerBScore: e.target.tabIndex
    })
  };

  offerCOnChange = (e: CheckboxChangeEvent) => {
    this.setState({
      offerCScore: e.target.tabIndex
    })
  };

  render() {
    const data = this.props.data;
    let path;
    if (this.state.showPage == ShowPage.productCards) {
      path = '';
    } else if (this.state.showPage == ShowPage.productDetails0) {
      path = 'product_0';
    } else if (this.state.showPage == ShowPage.productDetails1) {
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
    const Questionnaire = () => (
      <div>
        <Row gutter={24}>
          <Col span={8} onClick={() => {
            // this.setShowPage(ShowPage.productDetails0)
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
            // this.setShowPage(ShowPage.productDetails1)
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
            // this.setShowPage(ShowPage.productDetails2)
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

        <Space >
          <div className='box'>
            <br />
            <br />Offer A
            <br />Offer B
            <br />Offer C
          </div>
        </Space>
        <Space>
          <div className='box'>Not Irritated<br />1
            <br /><Checkbox checked={this.state.offerAScore == 1} onChange={this.offerAOnChange} tabIndex={1} />
            <br /><Checkbox checked={this.state.offerBScore == 1} onChange={this.offerBOnChange} tabIndex={1} />
            <br />
            <Checkbox checked={this.state.offerCScore == 1} onChange={this.offerCOnChange} tabIndex={1} />
          </div>
        </Space>
        <Space>
          <div className='box'><br />2
            <br /><Checkbox checked={this.state.offerAScore == 2} onChange={this.offerAOnChange} tabIndex={2} />
            <br /><Checkbox checked={this.state.offerBScore == 2} onChange={this.offerBOnChange} tabIndex={2} />
            <br />
            <Checkbox checked={this.state.offerCScore == 2} onChange={this.offerCOnChange} tabIndex={2} />
          </div>
        </Space>
        <Space>
          <div className='box'><br />3
            <br /><Checkbox checked={this.state.offerAScore == 3} onChange={this.offerAOnChange} tabIndex={3} />
            <br /><Checkbox checked={this.state.offerBScore == 3} onChange={this.offerBOnChange} tabIndex={3} />
            <br />
            <Checkbox checked={this.state.offerCScore == 3} onChange={this.offerCOnChange} tabIndex={3} />
          </div>
        </Space>
        <Space>
          <div className='box'><br />4
            <br /><Checkbox checked={this.state.offerAScore == 4} onChange={this.offerAOnChange} tabIndex={4} />
            <br /><Checkbox checked={this.state.offerBScore == 4} onChange={this.offerBOnChange} tabIndex={4} />
            <br />
            <Checkbox checked={this.state.offerCScore == 4} onChange={this.offerCOnChange} tabIndex={4} />
          </div>
        </Space>
        <Space>
          <div className='box'><br />5
            <br /><Checkbox checked={this.state.offerAScore == 5} onChange={this.offerAOnChange} tabIndex={5} />
            <br /><Checkbox checked={this.state.offerBScore == 5} onChange={this.offerBOnChange} tabIndex={5} />
            <br />
            <Checkbox checked={this.state.offerCScore == 5} onChange={this.offerCOnChange} tabIndex={5} />
          </div>
        </Space>
        <Space>
          <div className='box'><br />6
            <br /><Checkbox checked={this.state.offerAScore == 6} onChange={this.offerAOnChange} tabIndex={6} />
            <br /><Checkbox checked={this.state.offerBScore == 6} onChange={this.offerBOnChange} tabIndex={6} />
            <br />
            <Checkbox checked={this.state.offerCScore == 6} onChange={this.offerCOnChange} tabIndex={6} />
          </div>
        </Space>
        <Space>
          <div className='box'>Irritated<br />7
            <br /><Checkbox checked={this.state.offerAScore == 7} onChange={this.offerAOnChange} tabIndex={7} />
            <br /><Checkbox checked={this.state.offerBScore == 7} onChange={this.offerBOnChange} tabIndex={7} />
            <br />
            <Checkbox checked={this.state.offerCScore == 71} onChange={this.offerCOnChange} tabIndex={7} />
          </div>
        </Space>
        <br />
        {((this.state.offerAScore == null) || (this.state.offerBScore == null) || (this.state.offerCScore == null)) ? <Button size="large" type="primary" disabled>Proceed</Button> : <Button size="large" type="primary" onClick={this.nextPage}>Proceed</Button>}
      </div>
    )
    return (
      this.state.showPage == ShowPage.welcome ? <Welcome nextPage={this.nextPage} /> :
        this.state.showPage == ShowPage.warmUp ? <WarmUp nextPage={this.nextPage} /> :
          this.state.showPage == ShowPage.instruction ? <Instruction nextPage={this.nextPage} /> :
            this.state.showPage == ShowPage.questionnaire ? <Questionnaire /> :
              this.state.showPage == ShowPage.demographics ? <Demographics data={data} /> :
                // this.state.showPage == ShowPage.questionnaire ? <Questionnaire data={this.data} products={this.products} prices={this.prices} nextPage={this.nextPage} /> :
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
                          {this.state.showPage == ShowPage.productCards ? <ProductCards /> : null}
                          {this.state.showPage == ShowPage.productDetails0 ? <ProductDetails data={data} index={0} products={products} prices={prices} backToMainPage={this.backToMainPage} nextPage={this.nextPage} /> : null}
                          {this.state.showPage == ShowPage.productDetails1 ? <ProductDetails data={data} index={1} products={products} prices={prices} backToMainPage={this.backToMainPage} nextPage={this.nextPage} /> : null}
                          {this.state.showPage == ShowPage.productDetails2 ? <ProductDetails data={data} index={2} products={products} prices={prices} backToMainPage={this.backToMainPage} nextPage={this.nextPage} /> : null}
                        </Content>
                      </Layout>
                    </Layout>
                  </Layout>
                </html>
    );
  }
}

export default App;