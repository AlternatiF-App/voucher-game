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
        <div className="flex space-x-4 lg:block lg:text-center pb-4 lg:pb-14 lg:pr-8">
            <div>
                <img src={`https://voucher-game-server.herokuapp.com/uploads/${user.avatar}`}
                    className="mx-auto mb-6 h-12 w-12 lg:h-24 lg:w-24 rounded-full object-cover" 
                />
            </div>
            <div>
                <h2 className="font-bold text-xl text-blue-800 m-0">
                    {user.name}
                </h2>
                <p className="text-blue-600 m-0">
                    {user.email}
                </p>
            </div>
        </div>
    )
}

export default Profile