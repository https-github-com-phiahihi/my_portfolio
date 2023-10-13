import React from "react";
import { techStackDetails } from "../data";
import text_constants from "../constants/constants";

function Technologies() {
    const {
        html,
        css,
        js,
        react,
        redux,
        tailwind,
        flutter,
        rn,
        firebase,
        dart,
        vscode,
        git,
        github,
        npm,
        postman,
        figma,
    } = techStackDetails;
    return (
        <main id="technologies" className="container mx-auto max-width pt-10 pb-20 ">
            <section >
                <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    {text_constants.techStack}
                </h1>
                <p className="text-content py-2 lg:max-w-3xl">
                    {text_constants.technologiesIveBeenWorkingWithRecently}
                </p>
            </section>
            <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
                <img src={html} title="html" alt="" />
                <img src={css} title="CSS" alt="" />
                <img src={js} title="JavaScript" alt="" />
                <img src={react} title="React" alt="" />
                <img src={redux} title="Redux" alt="" />
                <img src={tailwind} title="Tailwind CSS" alt="" />
                <img src={dart} title="Dart" alt="" />
                <img src={flutter} title="Flutter" alt="" />
                <img src={rn} title="React Native" alt="" />
                <img src={firebase} title="Firebase" alt="" />
            </section>
            <section>
                <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    {text_constants.tools}
                </h1>
            </section>
            <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
                <img src={vscode} title="Visual Studio Code" alt="" />
                <img src={git} title="Git" alt="Git" />
                <img src={github} title="Github" alt="Github" />
                <img src={figma} title="Figma" alt="Figma" />
                <img src={npm} title="NPM" alt="NPM" />
                <img src={postman} title="Postman" alt="Postman" />
            </section>
        </main>
    );
}

export default Technologies;