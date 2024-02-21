import  { tech_stack } from "@/mocks/tech_stack";
import TechName from "./TechName";

const TechStack = () => {
    return (
        <div className="mt-5 flex flex-wrap justify-center gap-3">
            {tech_stack.map((item) => (
                <TechName name={item.nombre} key={item.id} />
            ))}
        </div>
    )
}

export default TechStack;