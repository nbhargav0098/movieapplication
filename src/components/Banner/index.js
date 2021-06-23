import {Component} from 'react'
import './index.css'

class Banner extends Component {
  state = {oneMovie: []}

  componentDidMount() {
    this.getRandomOriginals()
  }

  getRandomOriginals = async () => {
    const originalsUrl =
      'https://api.themoviedb.org/3/discover/tv?api_key=521230044599bb08045f4e9ff35fbad8'
    const response = await fetch(originalsUrl)
    const data = await response.json()
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results.length)]
    console.log(randomMovie)
    this.setState({oneMovie: randomMovie})
  }

  truncate = (str, n) => (str?.length > n ? `${str.substr(0, n - 1)}...` : str)

  render() {
    const {oneMovie} = this.state
    return (
      <header
        className="banner-container"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${oneMovie.backdrop_path}")`,
          backgroundPosition: 'center center',
        }}
      >
        <div className="banner-content">
          <h1 className="banner-heading">{oneMovie.original_name}</h1>
          <button className="banner-button" type="button">
            Play
          </button>
          <h1 className="banner-description">
            {this.truncate(oneMovie?.overview, 150)}
          </h1>
        </div>
        <div className="banner-fade-container" />
      </header>
    )
  }
}

export default Banner
