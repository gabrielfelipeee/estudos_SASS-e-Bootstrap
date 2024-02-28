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
            <input
                className="alura-input"
                type="text"
                placeholder="Insira seu nome"
                required
            />
            <input
                className="alura-input"
                type="email"
                placeholder="Insira seu email"
                required
            />
            <button
                type="submit"
                className="btn"
            >
                Seguir
            </button>
        </form>
    )
}
export default Form;