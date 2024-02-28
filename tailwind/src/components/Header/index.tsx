import { IUser } from '../../shares/interfaces/IUser';

import ToggleTheme from '../ToggleTheme';


interface HeaderProps {
    user: IUser | null; // IUser ou nulo
}

const Header = ({ user }: HeaderProps) => {
    return (
        <header className="flex justify-between items-center h-20 sm:m-5 sm:rounded-xl bg- px-5 bg-alura-200 dark:bg-dark-200">
            <span className="text-gray-100">
                Olá, {user?.name || "Usuário"}
            </span>
            <h1>Alura Newsletter</h1>
            <ToggleTheme />
        </header>
    );
};
export default Header;
