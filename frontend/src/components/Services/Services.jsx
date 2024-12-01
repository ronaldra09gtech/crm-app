import React, { 
    Component, 
    Fragment 
} from 'react'
import { 
    Container,
    Row,
    Col,
} from 'react-bootstrap'

export class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row>
                <Col>
                    <h1>One</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Two</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Three</h1>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Services
