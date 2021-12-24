import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image'
import { getGameCategory } from '../services/player';
import { setSignUp } from '../services/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const SignUpPhoto = () => {

    const [categories, setCategory] = useState([])
    const [favorites, setFavorites] = useState('')
    const [image, setImage] = useState('')
    const [imagePreview, setImagePreview] = useState('')
    const [localForm, setLocalForm] = useState({
        name: '',
        email: ''
    })
    const router = useRouter()

    const getGameCategoryAPI = useCallback(async () => {
        const data = await getGameCategory()
        setCategory(data)
        setFavorites(data[0]._id)
    }, [getGameCategory])

    useEffect(() => {
        getGameCategoryAPI()
        const getLocalForm:any = localStorage.getItem('user-form')
        setLocalForm(JSON.parse(getLocalForm))
    },[])

    const onSubmit = async () => {
        const getLocalForm:any = await localStorage.getItem('user-form')
        const form = JSON.parse(getLocalForm)
        const data = new FormData();

        data.append('image', image);
        data.append('email', form.email);
        data.append('name', form.name);
        data.append('username', form.name);
        data.append('password', form.password);
        data.append('phoneNumber', '082142931584');
        data.append('role', 'user');
        data.append('status', 'Y');
        data.append('favourite', favorites);

        const result = await setSignUp(data)
        if(result?.error === 1) {
            toast.error(result.message)
        }else{
            toast.success('Register is Success')
            router.push('/sign-up-success')
            localStorage.removeItem('user-form')
        }
    }

    return (
        <section className="w-full lg:w-1/3 lg:container lg:mx-auto lg:py-56 pt-32 pb-14">
            <div>
                <form action="">
                    <div className="md:block flex flex-col">
                        <div>
                            <div className="mb-6">
                                <div className="text-center">
                                    <label className="cursor-pointer rounded-full">
                                        <Image src={imagePreview ? imagePreview : "/icon/upload.svg"} width={120} height={120} className="rounded-full object-cover"/>
                                        <input className="invisible h-0 w-0" 
                                            id="avatar"
                                            type="file"
                                            name="avatar"
                                            onChange={(e:any) => {
                                                const img:any = e.target.files[0]
                                                setImagePreview(URL.createObjectURL(img))
                                                return setImage(img)
                                            }}
                                            accept="image/png, image/jpeg" />
                                    </label>
                                </div>
                            </div>
                            <h2 className="font-bold text-xl text-center text-blue-800 m-0">
                                {localForm.name}
                            </h2>
                            <p className="text-lg text-center text-blue-800 m-0">
                                {localForm.email}
                            </p>
                            <div className="py-14">
                                <label className="text-lg font-medium text-blue-800">
                                    Favorite Game
                                </label>
                                <select id="category" name="category" className="block w-full px-6 py-2 mt-4 rounded-full text-lg"
                                    aria-label="Favorite Game"
                                    value={favorites}
                                    onChange={(e:any) => setFavorites(e.target.value)}
                                >
                                    {
                                        categories.map((category:any) => {
                                            return <option key={category._id} value={category._id}>{category.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col mx-auto">
                            <button className="py-2 font-medium text-lg bg-blue-800 text-white rounded-full mb-4"
                                type="button"
                                onClick={onSubmit}
                            >
                                Create My Account
                            </button>
                            <button className="py-2 font-medium text-lg text-blue-800 bg-gray-200 rounded-full">
                                Terms & Conditions
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer/>
        </section>
    )
}

export default SignUpPhoto