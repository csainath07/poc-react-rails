import React,{FC} from "react"

import './style.css'

interface Props {
  message: string
}

const Home:FC<Props> = ({message = ''}) => {
  return (
    <h2 className="message">{message}</h2>
  )
}
export default Home
