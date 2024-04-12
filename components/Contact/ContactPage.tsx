const ContactPage = () => {
    return (
        <div className="w-3/4 xl:w-full mx-auto text-center">
            <h1 className="kanit-regular uppercase text-xl md:text-2xl mb-2">let&apos;s get in touch</h1>
            <p className="mt-5 text-sm">Let&apos;s work together to create new things.</p>
            <p className="text-sm">Message me and I&apos;ll reach you back as soon as I can</p>
            <div className="mt-5 flex justify-center gap-5">
                <button className="px-16 py-2 bg-primary-lavender text-white hover:scale-105 duration-300">Email me</button>
                <button className="px-16 py-2 bg-primary-lavender text-white hover:scale-105 duration-300">LinkedIn</button>
            </div>
        </div>
    )
}

export default ContactPage;