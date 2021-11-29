import Image from 'next/image'

interface CategoryProps{
    icon: string;
    title1: string;
    title2: string;
    total:string;
}

const Category = ({icon, title1, title2, total}:CategoryProps) => {
    return (
        <div className="px-2 pb-1 lg:pb-0">
            <div className="p-8">
                <div className="flex space-x-4 items-center mb-6">
                    <Image src={`/icon/ic-${icon}.svg`} width={60} height={60}/>
                    <p className="text-blue-800 mb-0">
                        {title1}<br/> {title2}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-blue-800 mb-1">
                        Total Spent
                    </p>
                    <p className="text-2xl text-blue-800 font-medium m-0">
                        Rp {total}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Category