
import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = () => {
    return (
        <header className="flex justify-between items-center h-20 bg-gray-500 px-5 sm:m-5 sm:rounded-xl">
            <span className="text-gray-100">Olá, Usuário</span>
            <h1 className="text-gray-100 text-xl">Alura Newsletter</h1>
            <ToggleTheme />
        </header>
    )
}
export default Header;