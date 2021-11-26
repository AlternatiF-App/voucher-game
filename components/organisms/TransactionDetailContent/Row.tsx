interface RowProps{
    label: string;
    value: string;
    className?: string;
}

const Row = ({label, value, className}:RowProps) => {
    return (
        <p className="text-lg color-palette-1 mb-20">
            {label} <span className={`purchase-details ${className}`}>{value}</span>
        </p>
    )
}

export default Row