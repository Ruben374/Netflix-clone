import React from 'react'
import './FeaturedMovie.css'

export default (props) => {

    let firstDate = new Date(props.item.first_air_date)
    let genres = []
    let description=props.item.overview
    if(description.length>160){
        description=description.substring(0, 160)+'...'
    }
    
    for (let i in props.item.genres) {
        genres.push(props.item.genres[i].name)
    }
    return (
        <section className='featured' style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://image.tmdb.org/t/p/original${props.item.backdrop_path})` }}>

            <div className="featured--vertical">
                <div className='featured--horizontal'>
                    <div className='featured--name'>
                        {props.item.original_name}
                    </div>
                    <div className='featured--info'>

                        <div className='featured--points'>{props.item.vote_average} points</div>
                        <div className='featured--year'>{firstDate.getFullYear()} </div>
                        <div className='featured--season'>{props.item.number_of_seasons} season{props.item.number_of_seasons != 1 ? 's' : ''}</div>
                    </div>
                    <div className='featured--description'>
                        {description}
                    </div>
                    <div className='featured--buttons'>
                        <a href={`/watch/${props.item.id}`} className='featured--watchButton'>► Assitir Agora</a>
                        <a href={`/list/add/${props.item.id}`}className='featured--myListButton'>+ Minha Lista</a>
                    </div>
                    <div className='featured--genres'><strong>Gêneros:</strong>{genres.join(', ')}...</div>


                </div>
            </div>

        </section>
    )
}