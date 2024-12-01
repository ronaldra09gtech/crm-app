import React, { 
    Component, 
    Fragment 
} from 'react'
import { 
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import designIcon from '../../asset/image/design.png';
import ecommerceIcon from '../../asset/image/ecommerce.png';
import webIcon from '../../asset/image/web.png';

export class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row> 
                <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                        <img className="ecommerceIcon" src={ecommerceIcon} alt="ecommerce"/>
                        <h2 className='serviceName'>Ecommerce</h2>
                        <p className='serviceDescription'>I will design and develop ecommerce online store website</p>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                        <img className="designIcon"src={designIcon} alt="design"/>
                        <h2 className='serviceName'>Web Design</h2>
                        <p className='serviceDescription'>Qualified web design and attractive effects which catches visitor's Eye.</p>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                        <img className="webIcon" src={webIcon} alt="web"/>
                        <h2 className='serviceName'>Web Development</h2>
                        <p className='serviceDescription'>Clean and fresh issue free code to make your website dynamic perfectly.</p>
                    </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Services
