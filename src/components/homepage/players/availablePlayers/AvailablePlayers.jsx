import React from 'react';
import Card from '../../../ui/Card';

const AvailablePlayers = ({players, coin, setCoin, selected, setSelected}) => {
  return (
    <div >
      <Card 
      players = {players}
      setCoin ={setCoin}
      coin = {coin}
      selected = {selected}
      setSelected ={setSelected}
      ></Card>
    </div>
  );
};

export default AvailablePlayers;