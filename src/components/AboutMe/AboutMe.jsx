import { FaDownload, FaPhone } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";
import { HashLink } from "react-router-hash-link";
import ResumePdf from "./Shehab_Ahamed_Chowdhury_Mitul_Resume.pdf";
const AboutMe = () => {
    return (
        <div className='' id="about">
            <SectionTitle heading={'About us'}></SectionTitle>
            <div className="flex flex-col lg:flex-row justify-between w-[80%] mx-auto gap-4 items-center">
                <img className="rounded-full w-[60%] lg:w-[30%]" src="https://avatars.githubusercontent.com/u/121333557?v=4" alt="" />
                <div className="max-w-3xl shadow-amber-300 shadow-md rounded-md p-4">
                    <p className="text-justify text-sm text-white">
                        Hello there! <br />
                        I'm<span className="text-yellow-500"> Shehab Ahamed Chowdhury Mitul</span>, a forward-thinking MERN stack developer with a unique background in Electrical and Electronic Engineering (EEE). While my academic journey began with circuits and signals, my passion lies in the world of web development. Since January 2023, I've been wholeheartedly immersed in the art and science of web development, and it has been an exhilarating ride. My coding journey commenced during my university days, and ever since, I've dedicated myself to honing my skills and exploring the expansive universe of coding.  For me, coding transcends mere instructions; it's a canvas to breathe life into ideas. I thrive on transforming concepts into functional, sleek, and user-friendly websites. My expertise revolves around the MERN stack – MongoDB, Express.js, React.js, and Node.js – an arsenal empowering me to craft robust and scalable web applications. Beyond the Code When I'm not engrossed in my code editor, I'm exploring the latest web development trends, experimenting with emerging technologies, and contributing to open-source projects. Embracing continuous learning, I'm always eager to expand my knowledge and stay at the forefront of innovation. Engineering Roots Despite pursuing Electrical and Electronic Engineering, I've found beauty in bridging the hardware-software gap. The analytical mindset cultivated through my engineering studies complements my coding skills, offering a holistic problem-solving approach.
                    </p>
                    <div className="text-yellow-500 flex justify-end gap-5 ">

                        {/* <a href="./Shehab_Ahamed_Chowdhury_Mitul_Resume.pdf" download="Shehab_Ahamed_Chowdhury_Mitul_Resume.pdf">
                            <button className="btn bg-[#fca311] text-white hover:bg-white hover:text-[#fca311]" title="Download Resume">
                                
                            </button>
                        </a> */}
                        <a href={ResumePdf} className="btn bg-[#fca311] text-white hover:bg-white hover:text-[#fca311]" title="Download Resume" download={"Shehab Ahamed Chowdhury Mitul"}>
                        <FaDownload />
                        </a>
                        <HashLink smooth to="#contact">
                            <button className="btn bg-[#fca311] text-white hover:bg-white hover:text-[#fca311]" title="Contact">
                                <FaPhone />
                            </button>
                        </HashLink>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
