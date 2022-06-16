import React, {useEffect, useState } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import defaultImg from './default_img.png'
const News = (props) => {
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [totalResults, setTotalResults] = useState(0)
  const capatalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  document.title = `${capatalize(props.category)} - News`;
  const newsUpdate = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true )
    let data = await fetch(url)
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }
  useEffect(() => {
    newsUpdate();
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    newsUpdate();
    // eslint-disable-next-line
  }, [page])
  
  const handlePreClick =()=> {
    setPage(page-1)
  }
  const handleNextClick =()=> {
    setPage(page+1)
  }
  return (
    <>
      {loading && <Spinner />}
      <div className="container my-3">
        <h1 className="text-center" style = {{margin : "70px 0 20px 0"}}>Top Headlines from {capatalize(props.category)}</h1>
        <div className="row">
          {!loading && articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <Newsitems title={element.title ? element.title.slice(0, 45) + "..." : ""} description={element.description ? element.description.slice(0, 88) + "..." : ""} imgUrl={element.urlToImage ? element.urlToImage : defaultImg} newsUrl={element.url} date={element.publishedAt.split("T")[0]} time={element.publishedAt.split("T")[1].slice(0, 5)} author={element.author ? element.author : 'Anonymous'} source={element.source.name ? element.source.name : "Unknown"} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark mx-3 my-3" onClick={handlePreClick} disabled={page <= 1}>&larr; Previous</button>
          <button type="button" className="btn btn-dark mx-3 my-3" onClick={handleNextClick} disabled={page + 1 > Math.ceil(totalResults / props.pagesize)}>Next &rarr;</button>
        </div>
      </div>
    </>
  )
}


News.defaultProps = {
  country: 'in',
  pagesize: 15,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}

export default News