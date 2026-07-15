
const ProjectItem = ({ projects }) => {

  const { name, image, description, technology, site, github } = projects;
  
  return (
    
    <li className={`h-full list-none ${!name ? 'hidden lg:block' : 'block'}`}>
      
        <div className="bg-white grid grid-rows-[auto_1fr_auto] h-full p-6 shadow-sm">
        
            {/* top section: title & image */}
            <div className="flex flex-col items-center w-full">

                {name ? (
                    <h3 className="text-xl mb-4">{name}</h3>
                ) : (
                    // aria-hidden="true" tells screen readers to ignore the empty placeholder box so it doesn't break accessibility for blind users
                    <div className="h-7 mb-4 w-full" aria-hidden="true"></div>
                )}

                <img 
                    src={image} 
                    alt="project picture" 
                    className="w-[85%] h-44 object-cover shadow-sm"
                />
            </div>

            {/* middle section: description; this row absorbs all variable height */}
            {description && (
                <div className="w-[85%] mx-auto flex flex-col justify-start items-start">
                    <p className="pt-4 pb-2 text-justify text-justify-inner-word">{description}</p>
                </div>
            )}

            {/* bottom section: technology used & buttons; starts at the EXACT same pixel height globally */}
            <div className="w-[85%] mx-auto mt-auto pt-1">

                {technology && (
                    <div className="min-h-15 md:mb-2">

                        <p className="text-justify text-justify-inner-word"><span className="font-bold text-lg">Technology Used: </span>{technology}</p>

                    </div>
                )}
          
                {(site && github) && (
                    <div className="grid grid-cols-2 gap-4 pb-3">

                        <div className="flex justify-start">

                            {/* rel="noopener" cuts the JavaScript connection between the original page and the newly opened tab preventing a malicious destination page from using JavaScript to hijack the ori8ginal tab and redirect users to a fake phishing site */}
                            {/* rel="noreferrer" makes the browser hide the HTTP referrer header so that the destination website will not see the URL of the page the user came from. Instead of 'Referral' and the URL the user came from in the web analytics of the new page, the new page owner will see that the user arrived at the site but will not say where they came from, it will say "Direct" */}
                            <a
                                href={site}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#008593] rounded-xl text-white py-2 w-full shadow-lg text-center inline-block"
                            >
                                Deployed Site
                            </a>
                        </div>

                        <div className="flex justify-end">
                            
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#008593] rounded-xl text-white py-2 w-full shadow-lg text-center inline-block"
                            >
                                Github
                            </a>
                    
                        </div>

                    </div>

                )}

            </div>

        </div>

    </li>
  );
};

export default ProjectItem;