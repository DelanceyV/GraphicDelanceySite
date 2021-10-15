import { Component, useRef } from 'react';
import { Col, Form, FormGroup, Input, Card, CardTitle, CardText, CardBody, Button } from 'reactstrap';
import { INFO } from '../shared/reachOutInfo';
import emailjs from 'emailjs-com';

class ReachOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: INFO
    };
  }

  render() {

    const ReachOut = (this.state.info.map(info => {
      return(
        <div className="center">
          <Form id="GDForm" ref="GDForm">
            <FormGroup row>
              <Col>
                <Input
                  type="string"
                  name="name"
                  id="name"
                  placeholder="What is your Name?"
                  className="form rainbow"
                />
              </Col>
              <Col>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Please"
                  className="form rainbow"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col className="message">
                <Input 
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Hi! I'm still working on the functionality of this form. If you need to contact me please email GraphicDelancey@gmail.com. Until then, Have fun typing in RAINBOW!!"
                  className="form rainbow"
                />
              </Col>
            </FormGroup>
            <span className="center">
            {/* onClick={emailjs.sendForm('service_ee0728l', 'template_39hhkfa', '#GDForm')} */}
            <Button size="xxl">(don't) Send It!</Button>
            </span>
          </Form> 
          <style type="text/css">
          {`
            .btn-xxl {
              padding: 1rem 1.5rem;
              font-size: 2rem;
            }
          `}
        </style>         
        </div>
      )
    }))
    return (
      <>
      <style type="text/css"> 
      {
        `.rainbow {
          color: white;
          background: -webkit-linear-gradient(left, rgba(243, 143, 187), rgba(228, 164, 85), rgba(255, 246, 139), rgba(130, 182, 106), rgba(121, 116, 169));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
        }
        .card {
          margin: 1rem;
          padding: 1rem;
          flex-basis: 45%;
          width: 18rem;
          text-align: center;
          text-decoration: none;
          color: white;
          background: -webkit-linear-gradient(left, rgb(133, 48, 85), rgba(228, 164, 85), rgba(255, 246, 139), rgba(130, 182, 106), rgba(121, 116, 169));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-color: transparent;
          border: .01em solid rgba(255, 255, 255, 0.171);
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        } `
      }
      </style>
        {ReachOut}
      </>
    );
  }
}

export default ReachOut;
