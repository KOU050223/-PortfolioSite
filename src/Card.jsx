import './App.css'

function Card({img,title,text}) {

  return (
    <>
        <img className="card-img" src={img} alt="" />
        <div className="card-content">
        <p className="card-title">{title}</p>
        <p className="card-text"dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
    </>
  )
}

export default Card