import React from 'react';
import Card from '../../../ui/Card';

const AvailablePlayers = ({players}) => {
  return (
    <div >
      <Card 
      players = {players}
      ></Card>
    </div>
  );
};

export default AvailablePlayers;