import {Component} from 'react'
import Slider from 'react-slick'

import './index.css'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
}

export default class OriginalsRow extends Component {
  constructor(props) {
    super(props)
    this.state = {netflixOriginals: []}
  }

  componentDidMount() {
    this.fetchNetflixOriginalsData()
  }

  fetchNetflixOriginalsData = () => {
    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=521230044599bb08045f4e9ff35fbad8&language=en-US',
    )
      .then(response => response.json())
      .then(response => {
        this.setState({netflixOriginals: response.results})
      })
  }

  renderSlider = () => {
    const {netflixOriginals} = this.state

    return (
      <Slider {...settings}>
        {netflixOriginals.map(movie => {
          const movieImage = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
          return (
            <div className="react-slick-item" key={movie.id}>
              <img
                className="poster"
                src={movieImage}
                width="100%"
                height="100%"
                alt="originals"
              />
            </div>
          )
        })}
      </Slider>
    )
  }

  render() {
    const {netflixOriginals} = this.state

    return (
      <div className="slick-app-container">
        <h1 className="top-rated-heading">Top Rated</h1>
        <div className="slider-container">
          {netflixOriginals.length ? (
            this.renderSlider()
          ) : (
            <p style={{textAlign: 'center'}}>Loading...................</p>
          )}

          <Slider {...settings} />
        </div>
      </div>
    )
  }
}
