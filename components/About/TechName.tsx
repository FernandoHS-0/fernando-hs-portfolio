import { FC } from "react";

interface Props {
    name: string;
}

const TechName: FC<Props> = ({name}) => {
    return (
        <div className="text-primary-lavender border border-primary-lavender py-2 px-10 text-sm hover:bg-primary-lavender hover:text-white hover:duration-300">
            {name}
        </div>
    )
}

export default TechName;