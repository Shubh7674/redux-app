import {setUser} from '../redux/actions/userAction'
import React,{useEffect} from 'react'
import {connect} from 'react-redux'

function UserComponent(props){
    const {user, setUser}=props

    useEffect(()=>{
        setUser()
    },[setUser])

    function changeUser(){
        setUser()
    }

    return <>
        <button onClick = {changeUser}>CHANGE USER</button>
        <div>{user}</div>
    </>
}

const mapStateToProps =state =>({
    user : state.user.user
})

export default connect(mapStateToProps,{setUser})(UserComponent)