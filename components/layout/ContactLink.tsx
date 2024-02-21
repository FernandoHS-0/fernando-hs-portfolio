import Link from "next/link";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const ContactLink = () => {
    return (
        <div className="flex flex-col items-center w-10 md:w-14 lg:w-20 pt-20 md:pt-10 gap-y-5 border-l-2 relative z-10 border-primary-lavender bg-base-dark">
            <Link href="http://www.linkedin.com/in/fernando-hs-dev"><PiLinkedinLogoFill color="#758BFF" className="text-2xl md:text-5xl"/></Link>
            <Link href="mailto:lfernando.hernandezs@hotmail.com"><MdEmail color="#758BFF" className="text-2xl md:text-5xl"/></Link>
        </div>
    )
}

export default ContactLink;