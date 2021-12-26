import NumberFormat from 'react-number-format'

interface RowProps{
    label: string;
    value: string | number;
    className?: string;
}

const Row = ({label, value, className}:RowProps) => {
    return (
        <p className="text-base lg:text-lg text-blue-500 mb-6">
            {label} 
            <span className={`float-right ${className}`}>
                {
                    typeof value === 'string' 
                        ? value
                        : (<NumberFormat value={value} prefix="Rp. " displayType='text' thousandSeparator="." decimalSeparator="," />)
                }
            </span>
        </p>
    )
}

export default Row