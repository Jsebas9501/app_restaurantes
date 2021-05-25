import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserLogged from './UserLogged'
import UserGuest from './UserGuest'
import { auth } from '../../utils/firebaseConfig'
import Loading from '../../components/Loading'

export default function Account() {
    const [login, setLogin] = useState(null)
    
    auth.onAuthStateChanged((user) => {
        user !== null ? setLogin(true) : setLogin(false)
    })

    if(login == null){
        return <Loading isVisible={true} text="Cargando..."/>
    }

    return login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})
