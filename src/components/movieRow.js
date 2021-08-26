import React, { useState } from 'react'
import './movieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

export default (props) => {
  const [scrollX, setscrollX] = useState(-400)


  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0;
    }
    setscrollX(x)
  }
  const handleRightArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    let listw = props.items.results.length * 150
    if (window.innerWidth - listw) {
      x = (window.innerWidth - listw) - 60
    }
    setscrollX(x)
  }


  return (
    <div className="movieRow">
      <h2>{props.title}</h2>
      <div className='movieRow--left'  onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className='movieRow--right' onClick={handleRightArrow} >
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className='movieRow--listarea'>
        <div className='movieRow--list' style={{
          marginLeft: scrollX,
          width: props.items.results.length * 150
        }}>
          {props.items.results.length > 0 && props.items.results.map((item, key) => (
            <div key={key} className='movieRow--item'>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}