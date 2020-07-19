import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import StoryList from '../components/StoryList'

class Index extends React.Component {
  constructor(props){
    super(props)
  }
  static async getInitialProps () {
    let stories;
    try {
      const response = await fetch('https://node-hnapi.herokuapp.com/news?page=1')
      stories = await response.json()
    } catch (error) {
      console.log(error)
      stories = []
    }
    return { stories: stories }
  }

  
  render() {
    const { stories } = this.props
    console.log(stories)
    if(stories.length === 0){
      return <Error statusCode={503}/>
    }
    return (
      <div>
        <h1>Hacker next</h1>
        <StoryList stories={stories}/>
      </div>
    )
  }
}

export default Index