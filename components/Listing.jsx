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
          
        }
      `}</style>
    </div>
  )
}

export default Listing