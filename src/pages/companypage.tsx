import React from "react";
import { Container, Grid, Text, Button, Image, Card } from '@nextui-org/react';

const info = [
  { title: "Our Misson", Description: "hello" }
];

const Company = () => {
  return (
    <Container>
      <Grid.Container gap={4} justify="flex-start">
        {info.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card>
              <Card.Body css={{ p: 0}}>
                <Text>{item.Description}</Text>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  )
}


export default Company