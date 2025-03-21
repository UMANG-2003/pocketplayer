import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Player() {
    const songs = [
        { song: "Shape of You" },
        { song: "Blinding Lights" },
        { song: "Bohemian Rhapsody" },
        { song: "Someone Like You" },
        { song: "Uptown Funk" },
        { song: "Believer" },
        { song: "Despacito" },
        { song: "Senorita" },
        { song: "Rolling in the Deep" },
        { song: "Bad Guy" },
        { song: "Shape of You" },
        { song: "Blinding Lights" },
        { song: "Bohemian Rhapsody" },
        { song: "Someone Like You" },
        { song: "Uptown Funk" },
        { song: "Believer" },
        { song: "Despacito" },
        { song: "Senorita" },
        { song: "Rolling in the Deep" },
        { song: "Bad Guy" },
        { song: "Shape of You" },
        { song: "Blinding Lights" },
        { song: "Bohemian Rhapsody" },
        { song: "Someone Like You" },
        { song: "Uptown Funk" },
        { song: "Believer" },
        { song: "Despacito" },
        { song: "Senorita" },
        { song: "Rolling in the Deep" },
        { song: "Bad Guy" },
        { song: "Shape of You" },
        { song: "Blinding Lights" },
        { song: "Bohemian Rhapsody" },
        { song: "Someone Like You" },
        { song: "Uptown Funk" },
        { song: "Believer" },
        { song: "Despacito" },
        { song: "Senorita" },
        { song: "Rolling in the Deep" },
        { song: "Bad Guy" },
        { song: "Shape of You" },
        { song: "Blinding Lights" },
        { song: "Bohemian Rhapsody" },
        { song: "Someone Like You" },
        { song: "Uptown Funk" },
        { song: "Believer" },
        { song: "Despacito" },
        { song: "Senorita" },
        { song: "Rolling in the Deep" },
        { song: "Bad Guy" },
        { song: "Shape of You" },
        { song: "Blinding Lights" },
        { song: "Bohemian Rhapsody" },
        { song: "Someone Like You" },
        { song: "Uptown Funk" },
        { song: "Believer" },
        { song: "Despacito" },
        { song: "Senorita" },
        { song: "Rolling in the Deep" },
        { song: "Bad Guy" },
      ];
      
  return (
    <div className=' mt-10 h-[50vh] overflow-y-scroll'>
        {
           songs.map((item, index) => {
            return (
              <div key={index} className='border-2 border-black p-2 m-1 flex justify-between items-center px-3'>
                <span>{item.song}</span>
                <FontAwesomeIcon icon={faPlay} className='w-7 border-2 border-black rounded-full py-1 px-2'></FontAwesomeIcon>
              </div>
            );
           })
        }
    </div>
  )
}

export default Player