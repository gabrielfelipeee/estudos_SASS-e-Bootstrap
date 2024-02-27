import { IUser } from "../../shares/interfaces/IUser";

import Input from "./Input";


const Form = ({ onSubmit }: { onSubmit: (userData: IUser) => void }) => {

    const safeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const name = (event.target as HTMLFormElement).getElementsByTagName('input')[0].value;
        const email = (event.target as HTMLFormElement).getElementsByTagName('input')[1].value;
        onSubmit({ name, email });
    }

    return (
        <form
            onSubmit={safeSubmit}
            className="flex flex-col justify-center items-center gap-10 w-full mt-64 px-8"
        >
            <Input
                type="text"
                placeholder="Insira seu nome"
            />
            <Input
                type="email"
                placeholder="Insira seu email"
            />
            <button
                type="submit"
                className="px-8 py-2 bg-alura-100 dark:bg-dark-200 rounded-full font-bold text-gray-200 uppercase hover:animate-pulse hover:shadow-md hover:shadow-gray-500"
            >
                Seguir
            </button>
        </form>
    )
}
export default Form;