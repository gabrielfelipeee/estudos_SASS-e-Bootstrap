import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

const ToggleTheme = () => {
    const toggle = () => {
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className="hidden sm:block">
            <MoonIcon
                onClick={toggle}
                className="h-8 text-gray-100 block cursor-pointer dark:hidden"
            />
            <SunIcon
                onClick={toggle}
                className="h-8 text-gray-100 hidden cursor-pointer dark:block"
            />
        </div>
    )
}
export default ToggleTheme;
