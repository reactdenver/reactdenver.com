import axios from 'axios'

export const checkSlug = async () => {

  const headers = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: `Token token=${process.env.SECRET_ACCESS_TOKEN}`,
      Accept: 'application/json',
      "Content-Type": 'application/json'
    }
  }
  const url = 'https://api.tito.io/v3/react-denver/events'

      // get event slug
      const {data: eventData} = await axios(url, headers)
      let sortedEvents = eventData.events.sort((first, second) => 
      (first.start_date < second.start_date) ? 1 : (first.start_date > second.start_date) ? -1 : 0)
      const nextEventSlug = sortedEvents[0].slug
      if(eventData.events[0].title === 'web-testing'){
            console.log('something went wrong');
      }
      console.log(nextEventSlug);

      // get releaseID
      const {data: releaseData} = await axios(`https://api.tito.io/v3/react-denver/${nextEventSlug}/releases`, headers)
      const inPersonId = releaseData.releases[0].id
      const virtualId = releaseData.releases[1].id

      console.log(virtualId);

      // get question object
      // const {data: questions} = await axios(`https://api.tito.io/v3/react-denver/${nextEventSlug}/questions`, headers)
      // console.log(questions[0].title);
      const questions = []

      return {nextEventSlug, virtualId, inPersonId, questions, url}
    }