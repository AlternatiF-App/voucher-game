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
        <tr className="align-middle">
            <th scope="row">
                <img className="float-start me-3 mb-lg-0 mb-3" src={`/img/${image}.png`}
                    width="80" height="60" alt=""/>
                <div className="game-title-header">
                    <p className="game-title fw-medium text-start color-palette-1 m-0">
                        {title}
                    </p>
                    <p className="text-xs fw-normal text-start color-palette-2 m-0">
                        {category}
                    </p>
                </div>
            </th>
            <td>
                <p className="fw-medium color-palette-1 m-0">
                    {item} Gold
                </p>
            </td>
            <td>
                <p className="fw-medium text-start color-palette-1 m-0">
                    Rp {nominal}
                </p>
            </td>
            <td>
                <div>
                    {status === 'Pending' && <span className="float-start icon-status pending"></span>}
                    {status === 'Success' && <span className="float-start icon-status success"></span>}
                    {status === 'Failed' && <span className="float-start icon-status failed"></span>}
                    <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                        {status}
                    </p>
                </div>
            </td>
            {
                page === 'transactions' && <td>
                    <a href="../member/transactions-detail.html"
                        className="btn btn-status rounded-pill text-sm">Details</a>
                </td>
            }
        </tr>
    )
}

export default TableRow