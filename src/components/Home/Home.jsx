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
        // <div className='' id='home'>
        //     <div className=" " style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
        //         <div className=" bg-opacity-60"></div>
        //         <div className=" text-center text-neutral-content">
        //             <div className="max-w-5xl">
        //                 <h1 className="mb-5 text-5xl font-bold text-white">Hi! I am
        //                     <span className="text-[#fca311]"> Shehab Ahamed Chowdhury Mitul</span>
        //                 </h1>
        //                 <h2 className="mb-10 text-4xl text-white font-semibold ">{text} <Cursor cursorStyle='|' /></h2> {/* Ensure the Cursor component is used correctly */}
        //                 <SocialButton />
        //             </div>
        //         </div>
        //     </div>
      
        // </div>
  <h2>lkk</h2>
        );
};

export default Home;
