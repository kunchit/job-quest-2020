import React from 'react'
import { Typography, Card, CardContent, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    card: {
        marginBottom: theme.spacing(2)
    }
}))


function JokeCard(props) {
    const classes = useStyles();
    const { jokes } = props;

    return (
        <div>
            {jokes.map((joke, index) => {
                return <Card key={index} className={classes.card}>
                    <CardContent>
                        <Typography variant='body1'>
                            {joke.joke}
                        </Typography>
                    </CardContent>
                </Card>
            })}
        </div>
    )

}

export default JokeCard;