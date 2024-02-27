interface InputProps {
    type: string,
    placeholder: string,
}

const Input = ({ type, placeholder }: InputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            required
            className="w-full max-w-lg py-1 px-4 rounded-lg dark:bg-dark-200 dark:text-gray-200 outline-none placeholde:text-gray-400 placeholder:dark:text-gay-600 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus: border-gray-400 focus:dark:border-gray-600 focus:invalid:border-2 focus:invalid:border-red-800 focus:dark:invalid:border-2 focus:invalid:dark:border-red-800"
        />
    )
}
export default Input;
