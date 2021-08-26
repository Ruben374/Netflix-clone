import React, { useState, useEffect } from 'react'
import './App.css'
import Tmdb from './Tmdb'
import Header from './components/header'
import MovieRow from './components/movieRow'
import FeaturedMovie from './components/FeaturedMovie'
export default () => {

  const [movieList, setmovieList] = useState([])
  const [featuredData, setfeaturedData] = useState(null)
  const [blackHeader, setblackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {

      let list = await Tmdb.getHomelist()
      setmovieList(list)
      ///////
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setfeaturedData(chosenInfo)

    }

    loadAll()



  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 20) {
        setblackHeader(true)
      } else {
        setblackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }

  }, [])



  return (

    <div className='page'>

      <Header black={blackHeader} />
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }



      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito por Ruben André<br />
        Direitos de imagem para Netflix<br />
        Dados extraidos do site themoviedb.org

      </footer>
      {movieList.length <= 0 &&
        <div className='loading'>
          <img src='Netflix_LoadTime.gif' alt='load' width='600px' />

        </div>}
    </div>

  )
}
