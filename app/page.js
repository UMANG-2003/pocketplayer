import React from 'react'
import Navbar from './component/Navbar'
import Player from './component/Player'
import SongView from './component/SongView'
function page() {
  return <>
  <Navbar></Navbar>
  <SongView></SongView>
  <Player></Player>
  </>
}

export default page