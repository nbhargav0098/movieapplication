import {Component} from 'react'
import Slider from 'react-slick'

import './index.css'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
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
      'https://api.themoviedb.org/3/trending/all/day?api_key=a296c915c9f82c25cca95eab8568c3a2',
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
        <h1 className="trending-heading">Trending Now</h1>
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
