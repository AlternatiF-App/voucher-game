import Image from 'next/image'
import Link from 'next/link'

const SignUpPhoto = () => {
    return (
        <>
            <section className="w-full lg:w-1/3 lg:container lg:mx-auto lg:py-56 pt-32 pb-14">
                <div>
                    <form action="">
                        <div className="md:block flex flex-col">
                            <div>
                                <div className="mb-6">
                                    <div className="text-center">
                                        <label className="cursor-pointer rounded-full">
                                            <Image src="/icon/upload.svg" width={120} height={120}/>
                                            <input className="invisible h-0 w-0" id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                                        </label>
                                    </div>
                                </div>
                                <h2 className="font-bold text-xl text-center text-blue-800 m-0">
                                    Ahmad Fanani
                                </h2>
                                <p className="text-lg text-center text-blue-800 m-0">
                                    ahmad@fanani.com
                                </p>
                                <div className="py-14">
                                    <label className="text-lg font-medium text-blue-800">
                                        Favorite Game
                                    </label>
                                    <select id="category" name="category" className="block w-full px-6 py-2 mt-4 rounded-full text-lg"
                                        aria-label="Favorite Game">
                                        <option value="" disabled selected>Select Category</option>
                                        <option value="fps">First Person Shoter</option>
                                        <option value="rpg">Role Playing Game</option>
                                        <option value="arcade">Arcade</option>
                                        <option value="sport">Sport</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col mx-auto">
                                <Link href="/sign-up-success">
                                <button className="py-2 font-medium text-lg bg-blue-800 text-white rounded-full mb-4">
                                        Create My Account
                                </button>
                                </Link>
                                <button className="py-2 font-medium text-lg text-blue-800 bg-gray-200 rounded-full">
                                        Terms & Conditions
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default SignUpPhoto