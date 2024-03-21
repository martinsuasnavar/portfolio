import FadingSection from "./fading-section";

interface SubMenuProps {
    buttonArray: React.ReactNode[];
}

export default function SubMenu({ buttonArray }: SubMenuProps) {

    
    return (
        <nav className="z-2">
            <FadingSection subfix={'1'}>
            {buttonArray.map((button, index) => (
                <div key={index}>
                    {button}
                </div>
            ))}
            </FadingSection>
        </nav>
    );
}
