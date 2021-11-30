import Input from "../../components/atoms/Input"
import Sidebar from "../../components/organisms/Sidebar"
import {TrashIcon} from '@heroicons/react/outline'

const EditProfile = () => {
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
                                    <div className="relative mr-6">
                                        <img src="/img/avatar-1.png" width="96" height="96" />
                                        <div
                                            className="avatar-overlay absolute w-24 h-24 bg-blue-900 rounded-full opacity-0 hover:opacity-100 cursor-pointer top-0 flex justify-center items-center transition-all duration-300 ease-linear">
                                            <TrashIcon className="h-5 w-5" fill="none" stroke="currentColor"/>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="cursor-pointer">
                                            <img src="/icon/upload.svg" width={96} height={96}/>
                                            <input className="invisible w-0 h-0" id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                                        </label>
                                    </div>
                                </div>
                                <div className="pt-8">
                                    <Input label={'Full Name'}/>
                                </div>
                                <div className="pt-8">
                                    <Input label={'Email Address'}/>
                                </div>
                                <div className="pt-8">
                                    <Input label={'Phone'}/>
                                </div>
                                <div className="flex flex-col pt-14">
                                    <button type="submit" className="px-8 py-2 font-medium text-lg bg-blue-600 text-white rounded-full"
                                        role="button">
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