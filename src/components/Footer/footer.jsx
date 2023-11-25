import React from "react";

const Footer = () => {

    return (
        <div className="container bg-slate-500 max-w-full flex flex-row p-3 justify-evenly items-center">

            <ul className="list-disc">
                <li><a href="https://google.com" target="blank_" className="hover:text-blue-400">Twitter</a></li>
                <li><a href="https://google.com" target="blank_" className="hover:text-blue-400">Git</a></li>
                <li><a href="https://google.com" target="blank_" className="hover:text-blue-400">Youtube</a></li>
                <li><a href="https://google.com" target="blank_" className="hover:text-blue-400">LinkedIn</a></li>
                <li><a href="https://google.com" target="blank_" className="hover:text-blue-400">Mail</a></li>
            </ul>

            <ul className="list-disc">
            <li><a href="https://google.com" target="blank_">Hello</a></li>
                <li><a href="https://google.com" target="blank_">Git</a></li>
                <li><a href="https://google.com" target="blank_">Youtube</a></li>
                <li><a href="https://google.com" target="blank_">LinkedIn</a></li>
                <li><a href="https://google.com" target="blank_">Mail</a></li>
            </ul>

        </div>
    )

}

export default Footer;