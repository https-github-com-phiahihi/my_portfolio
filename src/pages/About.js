import React from "react";
import Work from "../components/Work";
import text_constants from "../constants/constants";

import { personalDetails, workDetails, eduDetails } from "../data";

function About() {
    return (
        <main id="about_me" className="container mx-auto max-width pt-10 pb-20 ">
            <section>
                <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    {text_constants.about}
                </h1>
                <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
            </section>
            <section>
                <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    {text_constants.workExperience}
                </h1>
                {React.Children.toArray(
                    workDetails.map(({ Position, Company, Location, Type, Duration }) => (
                        <Work
                            position={Position}
                            company={Company}
                            location={Location}
                            type={Type}
                            duration={Duration}
                        />
                    ))
                )}
            </section>
            <section>
                <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    {text_constants.education}
                </h1>
                {React.Children.toArray(
                    eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
                        <Work
                            position={Position}
                            company={Company}
                            location={Location}
                            type={Type}
                            duration={Duration}
                        />
                    ))
                )}
            </section>
        </main>
    );
}

export default About;