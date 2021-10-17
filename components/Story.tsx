import React from 'react'

interface Story {
  key: number;
  img: string;
  username: string;
}

function Story(props:Story){
  return (
    <div >
      <img className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110" src={props.img} alt={props.username} />
      <p className="text-xs w-14 truncate text-center">{props.username}</p>
    </div>
  )
}

export default Story
