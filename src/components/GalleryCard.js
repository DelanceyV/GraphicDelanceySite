import { Card, CardText, CardImg, CardTitle, CardBody, CardColumns, CardGroup } from 'reactstrap'
import { Component } from 'react'
import { PIECES } from '../shared/pieces'

class GalleryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieces: PIECES
    };

  }

  render() {
    const Pieces = (this.state.pieces.map((piece) => 
      (piece.linkTo) ?
        (<Card key={piece.id}>
            <a href={piece.linkTo} target='_blank' rel="noreferrer">
              <CardImg
                top
                width="100%"
                src={require(`../images/gallery/${piece.image}`).default}
                alt={piece.name}
              />
            </a>
            <CardBody>
              <CardTitle tag='h3'>{piece.name}</CardTitle>
              <CardText>{piece.description}</CardText>
            </CardBody>
          </Card>)
      :
        (<Card key={piece.id}>
            <CardImg
                top
                width="100%"
                src={require(`../images/gallery/${piece.image}`).default}
                alt={piece.name}
              />
            <CardBody>
              <CardTitle tag='h3'>{piece.name}</CardTitle>
              <CardText>{piece.description}</CardText>
            </CardBody>
          </Card>)
      ))

    return (
      <>
      <style type="text/css">
        {`
          .card {
            width: 15rem;
          }
          .card:hover {
            width: 18rem;
            margin-left: -.5rem;
          }
        `}
      </style>
      <CardColumns>
        {Pieces}
      </CardColumns>
      </>
    );
  }

}

export default GalleryCard;

