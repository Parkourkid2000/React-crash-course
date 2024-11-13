import { useParams } from 'react-router-dom'
import React,  { useEffect } from 'react';

function Users() {
    const { name } = useParams()

    useEffect(() => {
    }, [])
    console.log(name)
return <h1> {name}</h1>
}

export default Users