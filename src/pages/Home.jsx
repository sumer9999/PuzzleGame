import React, { Fragment } from 'react';

import { Game } from '@Components';
import { GameFactoryConsumer } from '@Elements';
  

const Home = ({ eventType }) => {
  return (

      <GameFactoryConsumer>
        {({ values, methods }) => {
          return (
            <Fragment>
              <br />
              <Game eventType={eventType} {...values} {...methods} />
              <br />
            </Fragment>
          );
        }}
      </GameFactoryConsumer> 

  );
};
 
export default Home
