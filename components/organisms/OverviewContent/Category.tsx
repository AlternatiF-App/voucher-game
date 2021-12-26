import Image from 'next/image'
import NumberFormat from 'react-number-format'

interface CategoryProps{
    id: any;
    icon: string;
    name: string;
    value:number;
}

const Category = ({ id, icon, name, value}:CategoryProps) => {
    return (
        <div className="px-2 pb-1 lg:pb-0">
            <div className="p-8">
                <div className="flex space-x-4 items-center mb-6">
                    <Image src={`/icon/ic-${icon}.svg`} width={60} height={60}/>
                    <p className="text-blue-800 mb-0">
                        Category<br/> {name}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-blue-800 mb-1">
                        Total Spent
                    </p>
                    <p className="text-2xl text-blue-800 font-medium m-0">
                        <NumberFormat value={value} prefix="Rp. " displayType='text' thousandSeparator="." decimalSeparator="," />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Category