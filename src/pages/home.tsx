import React from "react";
import { Container, Grid, Text, Button, Image } from '@nextui-org/react';

const Home = () => {
  return (
    <Container fluid>
      <Grid.Container gap={3} alignItems="center" direction="column">
        <Grid xs={24} md={12}>
          <Text h1>Welcome to EthicalX</Text>
        </Grid>
        <Grid>
          <Text>
            We are a company dedicated to promoting ethical and sustainable practices in the world of commerce.
          </Text>
        </Grid>
        <Grid>
          <Button color="secondary">
            Learn more
          </Button>
        </Grid>
        <Grid xs={24} md={12}>
          <Image src="https://atmos.earth/wp-content/uploads/2020/10/atmos-ethical-fashion-11-720x904.jpg"/>
          <Image src="https://images.squarespace-cdn.com/content/v1/55455477e4b0325625f37297/1563003666885-TPZNJBC41NHDPCPNJJLJ/sustainable-ethical-fashion-editorials-lavender-hill-pelush-linen.jpg"/>
          <Image src="https://www.thegoodtrade.com/wp-content/uploads/2023/01/size2Binclusive2Bclothing2Bbrands2Bbig2Bbud2Bpress2B28129.jpg"/>

        </Grid>
      </Grid.Container>
    </Container>
  );
}

export default Home;
