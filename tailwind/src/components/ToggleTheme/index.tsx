import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"


const ToggleTheme = () => {
    const pageRef = document.documentElement.classList;
    // true caso o sistema use o tema dark e false para qualquer outro tema.
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [dark, setDark] = useState(systemPreference);

    useEffect(() => {
        dark && pageRef.add("dark");
    }, []);

    const toggle = () => {
    pageRef.toggle("dark");
    setDark(!dark);
    };

    return (
        <div className="hidden sm:block">
            <MoonIcon
                onClick={toggle}
                className="h-8 text-gray-100 cursor-pointer block dark:hidden"
            />
            <SunIcon
                onClick={toggle}
                className="h-8 text-gray-100 cursor-pointer hidden dark:block"
            />
        </div>
    )
}
export default ToggleTheme;
