import React from 'react';
import SelectedCard from '../../ui/SelectedCard';

const SelectPlayers = ({selected, setSelected,coin, setCoin}) => {
  return (
    <div className='w-full'>
      { selected.length === 0? 
      <div className='text-center bg-green-300 py-10 rounded max-w-310 mx-auto'>
      <h2 className='text-3xl font-bold mb-3'>No player select to yet</h2>
      <p>Go to available tab to select players</p>
      </div>
        : selected.map(players=> <SelectedCard 
        players = {players}
        selected={selected}
        setSelected = {setSelected}
        setCoin ={setCoin}
        coin = {coin}
        ></SelectedCard>)
      }
    </div>
  );
};

export default SelectPlayers;