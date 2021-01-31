import React, { useState, useMemo } from 'react'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: "18px 0",
        '& > *': {
            margin: theme.spacing(3)
        }
    }
}))

function useJokerForm() {
    const validationSchema = useMemo(() => (
        yup.object().shape({
            firstname: yup.string().required(),
            lastname: yup.string().required(),
        })
    ), [])

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(validationSchema)
    });


    return {
        register,
        errors,
        handleSubmit
    }
}


function JokerForm(props) {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const classes = useStyles();

    const { register, handleSubmit, errors } = useJokerForm();


    const onSubmit = () => {
        axios(`http://api.icndb.com/jokes/random/5?firstName=${firstname}&lastName=${lastname}`)
            .then(res => props.setJokes(res.data.value))

    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} noValidate className={classes.form}>
            <TextField
                id="firstname"
                label="firstname"
                name="firstname"
                defaultValue={firstname}
                onChange={e => setFirstName(e.target.value)}
                inputRef={register}
                error={!!errors.firstname}
                helperText={errors.firstname && errors.firstname.message}
            />

            <TextField
                id="lastname"
                label="lastname"
                name="lastname"
                defaultValue={lastname}
                onChange={e => setLastName(e.target.value)}
                inputRef={register}
                error={!!errors.lastname}
                helperText={errors.lastname && errors.lastname.message}
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
        </Button>
        </form>
    )
}

export default JokerForm