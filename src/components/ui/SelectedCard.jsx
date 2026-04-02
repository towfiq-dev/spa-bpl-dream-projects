import React from 'react';
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
const SelectedCard = ({players, selected, setSelected, coin, setCoin}) => {
  const deleted =(playerToDelete)=>{
  toast.success('Successfully Deleted')
  const filterPlayers = selected.filter(
    (selectPlayer)=> selectPlayer.name !== playerToDelete.name
  )
  setSelected(filterPlayers)
  setCoin(coin + players.price)
  }
  return (
    
      <div className='flex justify-between items-center space-y-5 bg-gray-300 p-3 rounded mb-6'>
      <div className='flex items-center gap-3'>
      <div><img className= 'w-20 h-12 rounded' src={players.image} alt="" /></div>
      <div className='mb-1'>
        <h2 className='flex gap-1 items-center font-bold'> <FaUser></FaUser> {players.name}</h2>
        <p>{players.batingStyle}</p>
      </div>
      </div>
      <button className='btn'onClick={()=>deleted(players)}>
        <MdDelete size={20} color='red'></MdDelete>
      </button>
    </div>
    
  );
};

export default SelectedCard;