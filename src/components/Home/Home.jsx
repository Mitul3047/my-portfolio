import { useTypewriter, Cursor } from "react-simple-typewriter";
import SocialButton from "../SocialButton/SocialButton";

const Home = () => {
    const [text] = useTypewriter({
        words: ['React Developer', 'Frontend Developer', 'Mern Stack Developer', 'Full Stack Developer', 'Backend Developer'], // Fixed typo in the word "Developereloper"
        loop: {}, // Set loop to true for continuous typing
        typeSpeed: 120,
        deleteSpeed: 80,
        cursor: Cursor.BLOCK,
        // cursorStyle: '|', // Changed cursorStyle to match the correct property name
        // cursorWidth: 0.1,
        cursorColor: "#000000"
    });

    return (
        <div className='h-screen' id='home'>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-5xl font-bold">Hi!
                            <span className="text-[#fca311]"> Shehab Ahamed Chowdhury Mitul</span>
                        </h1>
                        <h2 className="mb-5 text-4xl">{text} <Cursor cursorStyle='|' /></h2> {/* Ensure the Cursor component is used correctly */}
                        <SocialButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
