import Link from 'next/link'

const Listing = (props) => {
  const {title, url, points, id, comments_count } = props.story
  console.log(props.story)
  return (
    <div className="story">
      <p className="story-title">
      <a href={url} target="_blank">{title}</a>
      </p>
      <div className="story-details">
        <span>{points || 0} points</span>
        <Link href={`/story?id=${id}`}><a>{ comments_count || 0 } comments</a></Link>
      </div>
      <style jsx>{`
        .story {
          padding 1em 0;
        }

        .story-title {
          font-size: 1rem;
          font-weight: 400;
          margin: 0;
          margin-bottom: 0.5em;
        }

        .story-title a {
          color: #333;
          text-decoration: none;
        }

        .story-title a:hover, .story-details a:hover {
          text-decoration: underline
        }

        .story-details {
          font-size: 03.rem;
          font-weight: bold
        }

        .story-details span {
          margin-right: 1em; 
        }

        .story-details a {
          color: #6600ff;
          text-decoration: none;
          
        }
      `}</style>
    </div>
  )
}

export default Listing