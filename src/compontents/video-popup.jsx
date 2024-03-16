import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import { FaPlay } from "react-icons/fa";

function Video_popup() {
    const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

    <button className="btn-primary " onClick={()=> setOpen(true)}><FaPlay /></button>
  </React.Fragment>
  )
}

export default Video_popup
