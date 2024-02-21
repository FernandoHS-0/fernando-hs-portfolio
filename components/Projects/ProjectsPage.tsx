import Projects from "./Projects";

const ProjectsPage = () => {
    return (
        <div className="w-3/4 mx-auto">
            <h1 className="uppercase kanit-regular text-xl text-center md:text-2xl mb-2">my projects</h1>
            <Projects />
            <div className="bg-primary-lavender bg-opacity-30 text-center text-white mt-5 p-20">
                <p>WIP</p>
            </div>
        </div>
    )
}

export default ProjectsPage;