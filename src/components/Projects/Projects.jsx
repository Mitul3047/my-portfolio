import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
const Projects = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/public/projects.json');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <div id='projects'>
            <SectionTitle heading={"Projects"}></SectionTitle>
            <div className='flex flex-col gap-4 justify-center items-center'>
                {loading ? (
                    <p>Loading...</p>
                ) : data.length > 0 ? (
                    data.map((project) => (
                        <div key={project.project_id} className="flex justify-center items-center rounded-xl  text-white  shadow-yellow-500 w-full max-w-5xl flex-col lg:flex-row">
                            <div className="w-2/5 flex justify-center items-cente">
                                <img src={project.project_img} alt="card-image" className="object-cover  w-full" />
                            </div>
                            <div className="p-6">
                                <h6 className="block text-2xl mb-4 font-sans text-amber-500 antialiased font-semibold leading-relaxed tracking-normal  uppercase">
                                    {project.project_name}
                                </h6>
                                <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-white">
                                    {project.description}
                                </p>
                                {/* Display technologies used */}
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.technologies_used.map((tech, index) => (
                                        <button className='btn bg-[#fca311] text-white hover:text-yellow-500 hover:bg-white' key={index}>{tech}</button>
                                    ))}
                                </div>
                                {/* Links */}
                                <div className='flex gap-4'>
                                    <div className='flex hover:border-b-2  items-center justify-center'>
                                        <Link to={project.live_link} target="_blank" rel="noopener noreferrer">Live Demo</Link>
                                        <span className='text-yellow-600'><IoIosArrowForward /></span>
                                    </div>
                                    <div className='flex hover:border-b-2  items-center justify-center'>
                                        <Link to={project.git_client_link} target="_blank" rel="noopener noreferrer">Client Repo</Link>
                                        <span className='text-yellow-600'><IoIosArrowForward /></span>
                                    </div>
                                    <div className='flex hover:border-b-2  items-center justify-center'>
                                        <Link to={project.git_server_link} target="_blank" rel="noopener noreferrer">Server Repo</Link>
                                        <span className='text-yellow-600'><IoIosArrowForward /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No projects available.</p>
                )}
            </div>
        </div>
    );
};

export default Projects;
