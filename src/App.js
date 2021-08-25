import React, { useState, useEffect } from 'react'
import './App.css'
import Tmdb from './Tmdb'
import MovieRow from './components/movieRow'
import FeaturedMovie from './components/FeaturedMovie'
export default () => {

  const [movieList, setmovieList] = useState([])
  const [featuredData, setfeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {

      let list = await Tmdb.getHomelist()
      setmovieList(list)
      ///////
      let originals=list.filter(i => i.slug === 'originals')
      let randomChosen=Math.floor(Math.random()* (originals[0].items.results.length-1))
      let chosen=originals[0].items.results[randomChosen]
      let chosenInfo=await Tmdb.getMovieInfo(chosen.id,'tv')
      setfeaturedData(chosenInfo)
      console.log(featuredData)
    }

    loadAll()



  }, [])



  return (

    <div className='page'>
    

    {featuredData&&
      <FeaturedMovie item={featuredData}/>
    }
      
    

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>

  )
}
