interface SubMenuProps {
    buttonArray: React.ReactNode[];
}

export default function SubMenu({ buttonArray }: SubMenuProps) {

    
    return (
        <nav className="">
            {buttonArray.map((button, index) => (
                <div key={index}>
                    {button}
                </div>
            ))}
        </nav>
    );
}
