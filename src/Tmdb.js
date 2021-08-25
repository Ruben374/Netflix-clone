const API_KEY = '5b119d53fa5e770c3fc666d15d4c947f'
const API_BASE = 'https://api.themoviedb.org/3'



const basicFetch = async (endpoint) => {
    const request = await fetch(`${API_BASE}${endpoint}`)
    const json = await request.json()
    return json
}


export default {


    getHomelist: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do netflix',
                items: await basicFetch(`/discover/tv?with_network=213$languange=Pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'treding',
                title: 'Recomendados para Voçe',
                items: await basicFetch(`/trending/all/week?languange=Pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'topreted',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?languange=Pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&languange=Pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Comedy',
                title: 'comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&languange=Pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&languange=Pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&languange=Pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99&languange=Pt_BR&api_key=${API_KEY}`)
            }

        ];

    },
    getMovieInfo: async (movieId,Type) => {
        let info = {}
        if (movieId) {
            switch (Type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?languange=Pt_BR&api_key=${API_KEY}`)

                    break

                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?languange=Pt_BR&api_key=${API_KEY}`)
                    break
                    default:
                        info=null
                        break

            }
        }
        return info
    }

}