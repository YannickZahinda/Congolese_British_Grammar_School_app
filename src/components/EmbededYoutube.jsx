import React from 'react'
// import { PropTypes } from '@mui/material'
import PropTypes from 'prop-types'

const EmbededYoutube = ({EmbedId}) => {
  return (
    <div className="embeded_youtube">
        <iframe 
         width="90%" 
         height="480" 
         src={`https://youtube.com/embed/${EmbedId}`}
         frameBorder="0" 
         allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; '
         allowFullScreen
         title='Cbgschool class session'
         style={{borderRadius : '12px'}}
        />
    </div>
  )
}

EmbededYoutube.propTypes = {
    EmbedId:PropTypes.string.isRequired
}

export default EmbededYoutube