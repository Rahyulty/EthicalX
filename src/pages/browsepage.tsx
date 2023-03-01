import React from "react";
import { Container, Grid, Card, Row, Text, Col } from '@nextui-org/react';

const data = [
  { name: 'EthicalXpress Black Tee', price: '$9.99', image: 'https://theecohub.com/wp-content/uploads/2021/06/eco-friendly-t-shirts-tentree-455x683.jpg' },
  { name: 'Plant Wrappers 1', price: '$49.99', image: 'https://footwearnews.com/wp-content/uploads/2021/04/Reebok_FloatrideEnergyGrow-1.jpg?w=700&h=437&crop=1' },
  { name: 'Model III Jeans', price: "$11.99", image: 'https://www.thegoodtrade.com/wp-content/uploads/2023/01/sustainable-jeans.jpg' }
  // add more items here
];

const BrowsePage = () => {
  return (
    <Container>
      <Grid.Container gap={2} justify="flex-start">
        {data.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={item.image}
                  objectFit="cover"
                  width="100%"
                  height={340}
                  alt={item.name}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="flex-start">
                  <Col>
                    <Text b>{item.name}</Text>
                  </Col>
                  <Col>
                    <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                      {item.price}
                    </Text>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
}

export default BrowsePage;
