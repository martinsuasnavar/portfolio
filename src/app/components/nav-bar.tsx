"use client";

import WhiteBox from "./white-box";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import SubMenu from "./sub-menu";
import SubMenuButton from "./buttons/sub-menu-button";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface Option {
    code: string;
}

interface Internalization {
    switchLanguage: string;
}

export default function NavBar({switchLanguage} : Internalization) {
    const [languageMenu, setLanguageMenu] = useState(false);
    const [allowMenuClosing, setAllowMenuClosing] = useState(true);
    const router = useRouter();
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleLanguageMenu = () => {
        setLanguageMenu(!languageMenu);
    };

    const closeMenu = () => {
        setLanguageMenu(false);
    };

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            closeMenu();
        }
    }, [menuRef, closeMenu]);

    const setOption = async (option: Option) => {
        setAllowMenuClosing(false);
        await router.push(`/${option.code}`);
        setAllowMenuClosing(true);
    };

    useEffect(() => {
        if (allowMenuClosing) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [allowMenuClosing, handleClickOutside]);

    const options: Option[] = [
        { code: "en" },
        { code: "es" }
    ];

    const subMenuArray = [
        <section className="bg-black p-2 text-sm">{switchLanguage}</section>,
        
        <SubMenuButton key={options[1].code} onClick={() => setOption(options[1])}>
            <span className="flex justify-left ">
                <div><Image src="/logos/es.png" height={22} width={22} alt="es lang"/></div>
                <div className="ml-2">Español</div>
            </span>
        </SubMenuButton>,
        
        <SubMenuButton key={options[0].code} onClick={() => setOption(options[0])}>
            <span className="flex justify-left ">
                <div><Image src="/logos/en.png" height={22} width={22} alt="en lang"/></div>
                <div className="ml-2">English</div>
            </span>
        </SubMenuButton>

    ];

    return (
        <div className="">
            <nav className="max-w-full fixed top-0 left-0 w-full">
                <div className="p-2 bg-gradient-to-r from-indigo-950 to-pink-900">
                    <a  href="/"><WhiteBox >suasnavar.dev</WhiteBox></a>
                    <button onClick={toggleLanguageMenu} className="float-right transition-transform duration-300 transform hover:scale-105">
                        <Image
                            src="/language.png"
                            height={30}
                            width={30}
                            alt="language-switcher"
                        />
                    </button>
                </div>
                {languageMenu && (
                    <div className="float-right" ref={menuRef}>
                        <SubMenu buttonArray={subMenuArray} />
                    </div>
                )}
            </nav>
        </div>
    );
}