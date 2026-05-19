
const DuringDevelopment = () => {
    return(
        <>
            <div className="block sm:hidden text-4xl">XS</div>
            <div className="hidden sm:block md:hidden text-4xl">S</div>
            <div className="hidden md:block lg:hidden text-4xl">M</div>
            <div className="hidden lg:block xl:hidden text-4xl">L</div>
            <div className="hidden xl:block 2xl:hidden text-4xl">XL</div>
            <div className="hidden 2xl:block text-4xl">XXL</div>
            {/* Note: remove bootstrap immport from main.jsx, this file and uninstiall bootstrap with "npm uninstall bootstrap" */}
        </>
    )
}

export default DuringDevelopment