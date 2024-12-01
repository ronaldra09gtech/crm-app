import React, { 
    Component, 
    Fragment 
} from 'react'
import { 
    Container,
    Row,
    Col,
    Button,
} from 'react-bootstrap'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'

export class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
          <div className="topBannerOverlay">
            <Container className='topContent'>
              <Row>
                <Col className='text-center'>
                  <h1 className="topTitle">Ronald Avila</h1>
                  <h4 className="topSubTitle">IT Professional Service Provider</h4>
                  <Button variant='primary'>Learn More</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    )
  }
}

export default TopBanner
