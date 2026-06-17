
const ComingSoon = () => {
  return (
    <>
        {/* 
            * relative         -> creates a positioning anchor point so that any inner "absolute" children align relative to this box, instead of floating out into the rest of the app
            * grow             -> tells this element to expand vertically and absorb all available remaining empty space between the header/navbar and footer
            * min-h-0          -> allows this container to shrink down if needed, which prevents it from pushing the footer off the page, without breaking the layout
            * overflow-hidden  -> hard-clips any accidental pixel leaks at the container boundaries, stripping away vertical scrollbars instantly
        */}
        <div className="md:container mx-auto relative grow min-h-0 w-full overflow-hidden">

            {/* an invisible overlay box that handles the dead-center alignment 
                * absolute       -> detaches this div from the standard document flow so it can stretch independently without shifting the footer
                * inset-0        -> stretches this div to match all 4 corners (top, bottom, left, right) of the relative parent div perfectly
                * items-center   -> vertically centers inner component(s)
                * justify-center -> horizontally centers the inner component(s)
            */}
            <div className="absolute inset-0 flex items-center justify-center pt-6 p-4">

                {/* whitespace-nowrap -> explicitly commands the browser to lock the text to a single horizontal line, preventing "Coming Soon" from breaking onto two lines.*/}
                <h1 className="text-center text-6xl md:text-8xl lg:text-9xl whitespace-nowrap">Coming Soon</h1>

            </div> {/* Closes the invisible overlay box */}

            {/* 
                * min-h-[45vh]         -> Forces a minimum layout height of 45% of the viewport, ensuring this page component maintains a solid presence so the footer stays anchored at the bottom
                * pointer-events-none  -> Makes this layer completely unclickable so it can never accidentally block any user mouse clicks
                * invisible            -> Hides this element entirely from view so it functions purely as an invisible spacer block to safely preserve layout dimensions
            */}
            <div className="min-h-[45vh] pointer-events-none invisible"></div>
            
        </div>
    </>
  )
}

export default ComingSoon

//h-[calc(100dvh-var(--header-nav-footer-height,100%))]