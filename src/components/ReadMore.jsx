import React, {useState} from 'react'

const ReadMore = ({children}) => {
  
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadmore = () => {
    setIsReadMore(!isReadMore);
  }


  return (
    <div>
        <p className='text'>
            {isReadMore ?  text.slice(0, 200) : text }
            <span onClick={toggleReadmore} className="read-or-hide">
                {isReadMore ? "...lire la suite" : " reduire"}
            </span>
        </p>
    </div>
  )
}

export default ReadMore