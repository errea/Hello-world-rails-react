import React from 'react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from '../redux/message/message'

const HelloWorld = () => {
  const dispatch = useDispatch()
  const message = useSelector(state => state.messageReducer.message)
  useEffect(() => {
    dispatch(getMessages())
}, [])
 
    return (
      <div>
      HelloWorld: {message.title}
      </div>
    );
  }



export default HelloWorld;
