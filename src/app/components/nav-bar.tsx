"use client";

import WhiteBox from "./white-box";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import SubMenu from "./sub-menu";
import SubMenuButton from "./buttons/sub-menu-button";
import { useRouter } from "next/navigation";

interface Option {
    code: string;
}

export default function NavBar() {
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

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            closeMenu();
        }
    };

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
    }, [allowMenuClosing]);

    const options: Option[] = [
        { code: "en" },
        { code: "es" }
    ];

    const subMenuArray = [
        <SubMenuButton key={options[1].code} onClick={() => setOption(options[1])}>Español</SubMenuButton>,
        <SubMenuButton key={options[0].code} onClick={() => setOption(options[0])}>English</SubMenuButton>
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