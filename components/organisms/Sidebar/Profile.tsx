import {useEffect, useState} from 'react'
import jwtDecode from 'jwt-decode'
import Cookies from 'js-cookie'

const Profile = () => {

    const [user, setUser] = useState({
        avatar: '',
        name: '',
        email: ''
    })

    useEffect(() => {
        const token = Cookies.get('token')
        if(token){
            const jwt_token = atob(token)
            const payload:any = jwtDecode(jwt_token)
            const userPayload = payload.player
            setUser(userPayload)
        }
    }, [])

    return (
        <div className="text-center pb-14 pr-8">
            <img src={`https://voucher-game-server.herokuapp.com/uploads/${user.avatar}`}
                className="mx-auto mb-6 h-24 w-24 rounded-full object-cover" 
            />
            <h2 className="font-bold text-xl text-blue-800 m-0">
                {user.name}
            </h2>
            <p className="text-blue-600 m-0">
                {user.email}
            </p>
        </div>
    )
}

export default Profile