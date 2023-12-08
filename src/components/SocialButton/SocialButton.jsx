
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialButton = () => {
    return (
        <div className="space-x-4 flex items-center justify-center">
        <Link to=''><button className="btn border-white hover:border-[#fca311] bg-[#fca311] hover:text-[#fca311] text-xl text-white"><FaLinkedin /></button></Link>
        <Link to=''><button className="btn border-white hover:border-[#fca311] bg-[#fca311] hover:text-[#fca311] text-xl text-white"><FaGithub /></button></Link>
        <Link to=''><button className="btn border-white hover:border-[#fca311] bg-[#fca311] hover:text-[#fca311] text-xl text-white"><FaFacebook /></button></Link>
        <Link to=''><button className="btn border-white hover:border-[#fca311] bg-[#fca311] hover:text-[#fca311] text-xl text-white"><FaInstagram /></button></Link>

    </div>
    );
};

export default SocialButton;