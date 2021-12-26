import Input from "../../components/atoms/Input"
import Sidebar from "../../components/organisms/Sidebar"
// import {TrashIcon} from '@heroicons/react/outline'
import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'
import { updateProfile } from "../../services/member"
import { useRouter } from 'next/router'

const EditProfile = () => {

    const [user, setUser] = useState({
        id:'',
        name: '',
        email: '',
        avatar: '',
        phoneNumber:''
    })
    const [imagePreview, setImagePreview] = useState('/')
    const router = useRouter()

    useEffect(() => {
        const token = Cookies.get('token')
        if(token){
            const jwt_token = atob(token)
            const payload:any = jwtDecode(jwt_token)
            const userPayload = payload.player
            setUser(userPayload)
        }
    }, [])

    const onSubmit = async () => {
        const data = new FormData()

        data.append('image', user.avatar)
        data.append('name', user.name)
        data.append('phoneNumber', user.phoneNumber)
        const res = await updateProfile(data)
        if(res.error){
            toast.error(res.message)
        }else{
            Cookies.remove('token')
            router.push('/sign-in')
        }
    }

    return (
        <>
            <section className="w-full flex overflow-auto">
                <Sidebar activeMenu={'edit-profile'}/>
                <main className="w-3/4 h-screen overflow-y-auto hide-scroll-bar relative py-14">
                    <div className="lg:pl-0">
                        <h2 className="text-4xl font-bold text-blue-800 mb-8">Settings</h2>
                        <div className="rounded-2xl max-w-xl p-8">
                            <form action="">
                                <div className="flex">
                                    <div>
                                        <label id="avatar" className="cursor-pointer">
                                            {
                                                imagePreview === '/' ?
                                                (
                                                    <img className="h-24 w-24 object-cover rounded-full"
                                                        src={`https://voucher-game-server.herokuapp.com/uploads/${(user.avatar)}`}
                                                    />
                                                )
                                                : (
                                                    <img className="h-24 w-24 object-cover rounded-full"
                                                        src={imagePreview}
                                                    />
                                                )
                                            }
                                            <input className="invisible w-0 h-0" id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" 
                                                onChange={(e:any) => {
                                                    const img:any = e.target.files[0]
                                                    setImagePreview(URL.createObjectURL(img))
                                                    setUser({
                                                        ...user,
                                                        avatar:img
                                                    })
                                                }}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="pt-8">
                                    <Input 
                                        label={'Full Name'}
                                        value={user.name} 
                                        onChange={(e:any) => setUser({
                                            ...user,
                                            name: e.target.value
                                        })}
                                    />
                                </div>
                                <div className="pt-8">
                                    <Input label={'Email Address'} value={user.email} disabled/>
                                </div>
                                <div className="pt-8">
                                    <Input 
                                        label={'Phone Number'}
                                        value={user.phoneNumber} 
                                        onChange={(e:any) => setUser({
                                            ...user,
                                            phoneNumber: e.target.value
                                        })}
                                    />
                                </div>
                                <div className="flex flex-col pt-14">
                                    <button type="button" className="px-8 py-2 font-medium text-lg bg-blue-600 text-white rounded-full"
                                        onClick={onSubmit}    
                                    >
                                            Save My Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default EditProfile