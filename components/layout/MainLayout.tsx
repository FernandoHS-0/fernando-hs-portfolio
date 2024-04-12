import { FC, ReactNode } from "react";
import VerticalNav from "./VerticalNav";
import ContactLink from "./ContactLink";

interface Props{
    children: ReactNode;
}

const MainLayout:FC<Props> = ({children}) => {
    return(
        <div className="flex h-screen overflow-hidden">
            <VerticalNav />
            <main className="w-full h-screen flex justify-center items-center text-white relative">
                <div className="relative z-10">
                    {children}
                </div>
                <div className="noise-bg" />
            </main>
            <ContactLink />
        </div>
    );
}

export default MainLayout;