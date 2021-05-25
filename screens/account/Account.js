import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserLogged from './UserLogged'
import UserGuest from './UserGuest'
import { auth } from '../../utils/firebaseConfig'

export default function Account() {
    const [login, setLogin] = useState(null)
    
    auth.onAuthStateChanged((user) => {
        user !== null ? setLogin(true) : setLogin(false)
    })

    if(login == null){
        return <Text>Cargando...</Text>
    }

    return login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})
