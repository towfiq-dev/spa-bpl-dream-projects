import React, { use, useState } from 'react';
import AvailablePlayers from './availablePlayers/AvailablePlayers';
import SelectPlayers from './SelectPlayers';

const Players = ({playersPromise, setCoin, coin}) => {
  const playersData = use(playersPromise)
  const [selectedType, setSelectedType] = useState('available')
  const [selected, setSelected] = useState([])
  return (
    <div>
      <div className='flex justify-between items-center max-w-310 mx-auto mt-15'>
      {selectedType === 'available'?
      <h2 className='text-black font-bold text-2xl'>Available Players</h2>:
      <h2 className='text-black font-bold text-2xl'>Selected Players{selected.length}/{playersData.length}</h2>
      }
      <div className='flex gap-2 items-center justify-center'>
        <button onClick={()=> setSelectedType('available')} className={`btn  ${selectedType === 'available'? 'bg-yellow-300' : ''}`}>Available</button>
        <button onClick={()=> setSelectedType('selected')} className={`btn  ${selectedType === 'selected'? 'bg-yellow-300' : ''}`}>Selected{selected.length}</button>
        </div>
      </div>
      <div className={`max-w-310 mx-auto mt-10 ${selectedType === 'available' ? 'grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'block'}`}>
      {
        selectedType === 'available'? 
        (
          playersData.map(players=> <AvailablePlayers 
        players ={players}
        selectedType ={selectedType}
        setCoin ={setCoin}
        coin = {coin}
        selected = {selected}
        setSelected ={setSelected}
        ></AvailablePlayers>)
        )
        :
        <SelectPlayers 
        selected = {selected}
        setSelected ={setSelected}
        setCoin ={setCoin}
        coin = {coin}
        ></SelectPlayers>
      }
    </div>
    </div>
  );
};

export default Players;