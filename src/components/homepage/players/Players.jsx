import React, { use } from 'react';
import AvailablePlayers from './availablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {
  const playersData = use(playersPromise)
  return (
    <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-310 mx-auto'>
      {
        playersData.map(players=> <AvailablePlayers 
        players ={players}
        ></AvailablePlayers>)
      }
    </div>
  );
};

export default Players;