import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import bg1 from './bg1.jpg'
import bg2 from './bg2.jpg'
import bg3 from './bg3.jpg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

function Carousell() {
  return (
    <div>
        <Carousel slide={false} variant="dark" indicators={false}>
      <Carousel.Item>
      <div class="car-c">
        <div className="car-b">
      <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title 2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
      </Carousel.Item>
      <Carousel.Item>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title 3</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carousell