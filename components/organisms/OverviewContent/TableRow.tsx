interface TableRowProps{
    title: string;
    category: string;
    item:number;
    nominal:string;
    status:string;
    image:string;
    page?:string;
}

const TableRow = ({title, category, item, nominal, status, image, page}:TableRowProps) => {
    return (
        <tr>
            <th scope="flex items-center">
                <img className="float-left lg:mb-0 mb-3 mr-3" src={`/img/${image}.png`}
                    width="80" height="60" alt=""/>
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
                    {item} Gold
                </p>
            </td>
            <td>
                <p className="font-medium text-left text-blue-800 m-0">
                    Rp {nominal}
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
                    <a href="../member/transactions-detail.html"
                        className="px-4 py-2 bg-gray-200 rounded-full text-sm">Details</a>
                </td>
            }
        </tr>
    )
}

export default TableRow