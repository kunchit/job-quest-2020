import React, { useEffect, useState } from 'react'
import { CssBaseline, Container, Typography } from '@material-ui/core'
import axios from 'axios'

import JokeCard from './JokeCard'
import JokeForm from './JokerForm'


function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios(`http://api.icndb.com/jokes/random/5`)
      .then(res => setJokes(res.data.value))
  }, [])


  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <Typography variant='h3' align='center' style={{ marginTop: 24 }}>
          The jokes
        </Typography>

        <JokeForm setJokes={setJokes} />
        <JokeCard jokes={jokes} />
      </Container>
    </div>
  );
}

export default App;
