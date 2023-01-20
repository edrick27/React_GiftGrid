import React from 'react'
import PropTypes from "prop-types";


export const Gifitem = ({title , url}) => {

  return (
    <div className="card">        
        <img src={url} alt={title} ></img>
        <p>{title}</p>
    </div>
  )
}

Gifitem.PropTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}