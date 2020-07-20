import Listing from './Listing'

const StoryList = (props) => {
  const { stories } = props
  return (
    <div className="story-list">
      {stories.map(story => {
          return <Listing story={story}/>
        })}

        <style jsx>{`
        .story-list {
          padding: 0 1em;
        }
      `}</style>
    </div>
  )
}

export default StoryList