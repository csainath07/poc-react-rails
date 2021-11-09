import React,{FC, useEffect} from "react"

import axiosInstance from "../../utils/api.instance"

import './style.css'

interface Props {
  message: string
}

const Home:FC<Props> = ({message = ''}) => {
  useEffect(() => {
    const apiCall = async() => {
      try {
        await axiosInstance.get('/dashboard/tasks')
      } catch(err) {
        console.log('error')
        window.toastr && window.toastr.success("Error")
      }
    }
    apiCall();
  },[]);

  return (
    <h2 className="message">{message}</h2>
  )
}
export default Home
