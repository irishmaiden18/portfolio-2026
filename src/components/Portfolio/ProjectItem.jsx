
const ProjectItem = ({ projects }) => {

  const { name, image, description, technology, site, github } = projects;
  
  return (
    
        // grid-rows-subgrid tells the child element (li) to inherit and align itself to the row tracks defined by its parent (ul) grid rather than creating its own grid, this keeps it consistent accross all cards. row-span-4 tells the child element (li) how many of the parent rows it can occupy
        // both the li and the div elements need the grid-rows-subgrid row-span-4 because subgrid can only inherit rows from its immediate parent, it can't skip a generatrion
        // ${!name ? 'hidden lg:block' : 'block'} hides the card when the project has no name on mobile devices, but shows the card on larger screens
        <li className={`h-full list-none grid grid-rows-subgrid row-span-4 max-w-md mx-auto md:max-w-none ${!name ? 'hidden lg:block' : 'block'}`}>
            <div className="bg-white grid grid-rows-subgrid row-span-4 p-6 shadow-sm">
                
                {/* row 1: title & image */}
                <div className="flex flex-col items-center w-full">
                    {name ? (
                        <h3 className="text-xl mb-4 text-center">{name}</h3>
                    ) : (
                        // aria-hidden="true" hides the div from screen readers when the name does not exist
                        <div className="h-7 mb-4 w-full" aria-hidden="true"></div>
                    )}
                    <img src={image} alt="project picture" className="w-[85%] h-44 object-cover shadow-sm" />
                </div>

                {/* row 2: description */}
                <div className="w-[85%] mx-auto flex flex-col justify-start items-start">
                    {description && <p className="pt-4 pb-2 text-left sm:text-justify">{description}</p>}
                </div>

                {/* row 3: technology used */}
                <div className="w-[85%] mx-auto pt-1">
                    {technology && (
                        <div className="mb-4 md:mb-2">
                            <p className="text-left text-lg">
                                <span className="font-bold">Technology Used: </span>{technology}
                            </p>
                        </div>
                    )}
                </div>

                {/* row 4: buttons (deployed site & github) */}
                <div className="w-[85%] mx-auto mt-auto">
                    {(site && github) && (
                        <div className="grid grid-cols-2 gap-4 pb-3">
                            {/* rel="noopener noreferrer" is a security and privacy safeguard used when opening external links in a new browser tab */}
                            <a href={site} target="_blank" rel="noopener noreferrer" className="bg-[#008593] rounded-xl text-white py-2 px-2 text-center w-full shadow-lg flex items-center justify-center leading-relaxed md:text-center md:inline-block">
                                Deployed Site
                            </a>
                            <a href={github} target="_blank" rel="noopener noreferrer" className="bg-[#008593] rounded-xl text-white py-2 w-full shadow-lg flex items-center justify-center leading-relaxed md:text-center md:inline-block">
                                Github
                            </a>
                        </div>
                    )}
                </div>

            </div>
        </li>
    );
};

export default ProjectItem;