import React from 'react'

const Newsitems = (props) => {
  let { title, description, imgUrl, newsUrl, date, author, time, source } = props;
  return (
    <>
      <div className="my-2">
        <div className="card" >
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-dark" style={{ left: "87%", zIndex: 1 }}>
              {source}
              <span className="visually-hidden"></span>
            </span>

            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">At {date} On {time}</small></p>
            <p className="card-text"><small className="text-muted">~{author}</small></p>
            <a href={newsUrl} rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Newsitems
