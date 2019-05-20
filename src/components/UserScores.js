import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { List, Card } from 'antd';


import { withFirebase, withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class UserScores extends Component {
  state = {
    userData: {
      "userId":1,
      "userName":"Rob",
      "userEmail":"rob@innovid.com",
      "userScore":29,
      "isUserVenmo":true,
      "moviesScroes":[
        {
          "movieId":1,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":2,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":3,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":4,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":5,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":6,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":7,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":8,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":9,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":10,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":11,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":12,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":13,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":14,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":15,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":16,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":17,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":18,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":19,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":20,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":21,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":22,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":23,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":24,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":25,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":26,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":27,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":28,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":29,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":30,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":31,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":32,
          "tomatometerScore":90,
          "audienceScode":55
        },
        {
          "movieId":33,
          "tomatometerScore":90,
          "audienceScode":55
        }
      ]
    },
    movieData: [
  {
    "movieName":"Aladdin",
    "movieId":1,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":90,
    "audienceScode":null
  },
  {
    "movieName":"Brightburn",
    "movieId":2,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":90,
    "audienceScode":55
  },
  {
    "movieName":"Rocketman",
    "movieId":3,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Ma",
    "movieId":4,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Dark Pheonix",
    "movieId":5,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Shaft",
    "movieId":6,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Men In Black: International",
    "movieId":7,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Toy Story 4",
    "movieId":8,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Annabelle Comes Home",
    "movieId":9,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Yesterday",
    "movieId":10,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Spiderman Far From Home",
    "movieId":11,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Midsommar",
    "movieId":12,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"21 Bridges",
    "movieId":13,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"The Lion King",
    "movieId":14,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Once Upon a Time in Hollywood",
    "movieId":15,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Hobbs and Shaw",
    "movieId":16,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"The Angry Birds Movie 2",
    "movieId":17,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Where'd You Go Burnadette",
    "movieId":18,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"The Informer",
    "movieId":19,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Angel Has Fallen",
    "movieId":20,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"IT Chapter 2",
    "movieId":21,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"The Goldfinch",
    "movieId":22,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Ad Astra",
    "movieId":23,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Downton Abbey",
    "movieId":24,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Rambo: Last Blood",
    "movieId":25,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Abominable",
    "movieId":26,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Judy",
    "movieId":27,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Joker",
    "movieId":28,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"The Woman in the Window",
    "movieId":29,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Are You Afraid of The Dark",
    "movieId":30,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Gemini Man",
    "movieId":31,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Zombieland 2",
    "movieId":32,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  },
  {
    "movieName":"Godzilla: King of the Monsters",
    "movieId":33,
    "rottenTomatoesID":987123,
    "releaseDate":"2019-05-22 00:00:00",
    "tomatometerScore":null,
    "audienceScode":null
  }
],
    maratData: {
  "scores" : [
    {
      "user_id": 571,
      "movie_id": "alladin",
      "tomatometer_score": 45,
      "audience_score": 45
    }
  ],
  "users" : [
    {
      "user_id": 571,
      "name": "Marat Atayev",
      "score": 29,
      "venmo": "venmo-id",
      "score_date": 12312312312,
      "email": "marat@innovid.com"
    }
  ],
  "movies": [
    {
      "movie_id": "alladin",
      "rt_link": "link-to-rotten-tomates-page"
    }
  ]
}
  }

  componentDidMount() {
    const {firestore } = this.props

    const uid = this.props.match.params.uid

    firestore.collection('pools')
    .get().then(qs => {
      qs.docs.map(q => {
        const users = q.data().users
        const user = users.find(x => x.userName === uid)
        return (this.setState({
          fsData: user
        }))
      })
    })
  }

  render() {
    const { movieData, fsData } = this.state
    // console.log(fsData)

    // console.log('state', this.state)
    return (
      <div className="container">
        {
          fsData === undefined ?
            <div>Loading...</div>
          :
            <div>
              <h1>{fsData.userName}'s Scores</h1>
              <List
                bordered
                dataSource={fsData.moviesScores}
                renderItem={item => {
                  // find movie details
                  const movie = movieData.find(movie => movie.movieId === item.movieId)

                  return (
                    <List.Item>
                      <List.Item.Meta
                        title = {movie.movieName}
                      />
                      {`
                        your Tomatometer Score ${item.tomatometerScore} vs ${movie.tomatometerScore} |
                        your Audience Score ${item.audienceScode} vs ${movie.audienceScode}
                      `}
                    </List.Item>
                  )}
                }
              />
            </div>
        }
        <h1>Version 2</h1>
        {
          fsData === undefined ?
            <div>Loading...</div>
          :
            <List
              grid={{gutter: 16, xs: 1, sm: 2, lg: 4}}
              dataSource={fsData.moviesScores}
              renderItem={item => {
                const movie = movieData.find(movie => movie.movieId === item.movieId)
                return (
                  <List.Item>
                    <Card title={movie.movieName}>
                      {`your Tomatometer Score ${item.tomatometerScore} vs ${movie.tomatometerScore}`}
                      <br /><br />
                      {`your Audience Score ${item.audienceScode} vs ${movie.audienceScode}`}
                    </Card>
                  </List.Item>
                )}
              }
            />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  withFirebase,
  withFirestore
)(UserScores);
