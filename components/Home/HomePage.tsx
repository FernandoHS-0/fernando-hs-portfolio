const HomePage = () => {
    return (
        <>
            <div className="flex flex-col text-center">
                <div className="w-3/4 xl:w-2/6 mx-auto">
                    <h1 className="kanit-regular uppercase text-xl md:text-2xl mb-2">fernando hernández</h1>
                    <h2 className="text-primary-lavender text-lg md:text-xl">Software Engineer, Web Dev, UX/UI Designer</h2>
                </div>
                <p className="w-3/4 xl:w-2/6 mx-auto mt-10 text-sm">
                    Since I was a teenager I enjoyed a lot being in the computer and mess around with the themes of Windows, and since then I've always had this urge to have UIs that are something you really enjoy using and make you stand out from the rest. Fast-forward to my university years, I discovered the UX/UI field and that alongside my love for programming I decided to go that path to create new experiences.
                </p>
            </div>
        </>
    )
}

export default HomePage;