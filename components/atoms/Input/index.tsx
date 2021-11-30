interface InputProps{
    label: string;
}

const Input = ({label, ...nativeProps}:InputProps) => {
    return (
        <>
            <p className="text-lg font-medium text-blue-800 mb-2">
                {label}
            </p>
            <input className="w-full px-8 py-2 border border-solid focus-within:border-blue-800 focus-within:text-blue-800 outline-none text-white rounded-full text-lg"
                type="text" id="name" name="name" placeholder="Enter your name"
                {...nativeProps}    
            />
        </>
    )
}

export default Input