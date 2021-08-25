import React from 'react'
import './movieRow.css'

export default (props) => {
    return (
        <div className="movieRow">
            <h2>{props.title}</h2>
            <div className='movieRow--listarea'>
              <div className='movieRow--list'>
              {props.items.results.length > 0 && props.items.results.map((item,key)=>(
                  <div key={key} className='movieRow--item'>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}></img>
                  </div>
                ))}
              </div>
            </div>
        </div>
    )
} 