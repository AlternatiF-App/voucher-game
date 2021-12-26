import NumberFormat from 'react-number-format'
import Link from 'next/link'

interface TableRowProps{
    id: string;
    title: string;
    category: string;
    item:string;
    coinName: string;
    nominal:number;
    status:string;
    image:string;
    page?:string;
}

const TableRow = ({id, title, category, item, coinName, nominal, status, image, page}:TableRowProps) => {
    return (
        <tr>
            <th scope="flex items-center">
                <img className="float-left h-14 w-20 object-cover rounded-xl lg:mb-0 mb-3 mr-3"
                    src={`https://voucher-game-server.herokuapp.com/uploads/${image}`} alt=""/>
                <div className="my-3">
                    <p className="font-medium text-left text-blue-800 m-0">
                        {title}
                    </p>
                    <p className="text-xs font-normal text-left text-blue-600 m-0">
                        {category}
                    </p>
                </div>
            </th>
            <td>
                <p className="font-medium text-blue-800 m-0">
                    {item} {coinName}
                </p>
            </td>
            <td>
                <p className="font-medium text-left text-blue-800 m-0">
                    <NumberFormat value={nominal} prefix="Rp. " displayType='text' thousandSeparator="." decimalSeparator="," />
                </p>
            </td>
            <td>
                <div className='flex items-center space-x-2'>
                    {status === 'Pending' && <div className="float-left h-2 w-2 bg-yellow-600 rounded-full"></div>}
                    {status === 'Success' && <div className="float-left h-2 w-2 bg-green-600 rounded-full"></div>}
                    {status === 'Failed' && <div className="float-left h-2 w-2 bg-red-600 rounded-full"></div>}
                    <p className="font-medium text-left text-blue-800 m-0 relative">
                        {status}
                    </p>
                </div>
            </td>
            {
                page === 'transactions' && <td>
                    <Link href={`/member/transactions/${id}`}>
                        <a href=""
                            className="px-4 py-2 bg-gray-200 rounded-full text-sm">Details
                        </a>
                    </Link>
                </td>
            }
        </tr>
    )
}

export default TableRow