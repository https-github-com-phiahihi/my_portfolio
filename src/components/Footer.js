import React from "react";
import text_constants from "../constants/constants";
function Footer() {
    return (
        <footer className="container mx-auto py-1 fixed bottom-0 max-w-[100%] bg-white dark:bg-dark-mode">
            <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
                {text_constants.clonedAndCodedBy} {"  "}
                <a
                    className="font-medium"
                    href="https://pavanmg.in"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Phi
                </a>{" "}
                {text_constants.with}
                <span className="text-gradient font-medium"> {text_constants.love}</span> &
                <span className="text-gradient font-medium"> {text_constants.coffee}</span>
            </p>
        </footer>
    );
}
export default Footer;