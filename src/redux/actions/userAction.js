import json from '../../static/sample_user_data.json'

export const setUser = () =>dispatch => {
    let users = json['users']
    const randomIndex = Math.floor(Math.random()*users.length)
    const randomUser = users[randomIndex]
    const email = randomUser['email']

    dispatch({
        type:'SET_USER',
        payload: email
    })
}