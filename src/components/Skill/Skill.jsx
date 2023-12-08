import { FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";
import { SiCss3, SiDaisyui, SiExpress, SiFirebase, SiMongodb, SiMui, SiNetlify, SiTailwindcss, SiVercel } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandFramerMotion } from "react-icons/tb";
const Skill = () => {
    return (
        <div className="lg:h-[100vh]" id="skills">
            <SectionTitle heading={' technologies i can use'}></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-[80%] mx-auto">

                <div className="shadow-amber-300 shadow-md ">
                    <h3 className="text-white text-3xl my-5 lg:my-10 text-center font-semibold">Front-End</h3>
                    <div className="">
                        <div className="grid grid-cols-4 text-5xl gap-5 text-yellow-500 mb-10">
                            <div className="flex-col flex justify-center items-center">
                                <FaHtml5 />
                                <h5 className="text-center text-xs mt-1">HTML</h5>
                            </div>
                            <div className="flex-col flex justify-center items-center">
                                <SiCss3 />
                                <h5 className="text-center text-xs mt-1">CSS</h5>
                            </div>
                            <div className="flex-col flex justify-center items-center">
                                <SiTailwindcss />
                                <h5 className="text-center text-xs mt-1">TailwindCss</h5>
                            </div>
                            <div className="flex-col flex justify-center items-center">
                                <TbBrandJavascript />
                                <h5 className="text-center text-xs mt-1">JavaScript</h5>
                            </div>
                            <div className="flex-col flex justify-center items-center">
                                <FaReact />
                                <h5 className="text-center text-xs mt-1">React</h5>
                            </div>
                            <div className="flex-col flex justify-center items-center">
                                <SiMui />
                                <h5 className="text-center text-xs mt-1">MUI</h5>
                            </div>
                            <div className="flex-col flex justify-center items-center">
                                <TbBrandFramerMotion />
                                <h5 className="text-center text-xs mt-1">FramerMotion</h5>
                            </div>
                            <div className="flex-col flex justify-center items-center">
                                <SiDaisyui />
                                <h5 className="text-center text-xs mt-1">DaisyUi</h5>
                            </div>




                        </div>
                    </div>
                    {/* <div className="divider "></div> */}
                </div>
                <div className="shadow-amber-300 shadow-md">
                    <h3 className="text-white text-3xl my-5 lg:my-10 text-center font-semibold">Back-End</h3>
                    <div className="">
                        <div className="grid grid-cols-4 text-5xl gap-5 text-yellow-500 mb-10">
                            <div className="flex-col flex justify-center items-center ">
                                <FaNodeJs />
                                <h5 className="text-center text-xs mt-1">NodeJs</h5>
                            </div>
                            <div className="flex-col flex justify-center items-center">
                                <SiExpress />
                                <h5 className="text-center text-xs mt-1">ExpressJs</h5>
                            </div>
                            <div className="flex-col flex justify-center items-center">
                                <SiMongodb />
                                <h5 className="text-center text-xs mt-1">Mongodb</h5>
                            </div>
                            <div className="flex-col flex justify-center items-center">
                                <SiFirebase />
                                <h5 className="text-center text-xs mt-1">Firebase</h5>
                            </div>
                            <div className="flex-col flex justify-center items-center">
                                <SiNetlify />
                                <h5 className="text-center text-xs mt-1">Netlify</h5>
                            </div>
                            <div className="flex-col flex justify-center items-center">
                                <SiVercel />
                                <h5 className="text-center text-xs mt-1">Vercel</h5>
                            </div>
                            <div className="flex-col flex justify-center items-center">
                                <FaGithub />
                                <h5 className="text-center text-xs mt-1">Github</h5>
                            </div>





                        </div>
                    </div>
                    {/* <div className="divider"></div> */}
                </div>

            </div>
        </div>
    );
};

export default Skill;