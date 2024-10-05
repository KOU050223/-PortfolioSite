import './App.css'

function Link({github,link1_text,link1,link2_text,link2}) {

  return (
    <>
            <div className="card-link">
              <a href={github}>GitHub</a>
              <a href={link1} download={link1}>{link1_text}</a>
              <a href={link2}>{link2_text}</a>
            </div>
    </>
  )
}

export default Link