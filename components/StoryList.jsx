import Listing from './Listing'

const StoryList = (props) => {
  const { stories } = props
  return (
    <div>
      {stories.map(story => {
          return <Listing title={story.title} url={story.url}/>
        })}
    </div>
  )
}

export default StoryList