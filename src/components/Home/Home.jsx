import { useTypewriter, Cursor } from "react-simple-typewriter";
import SocialButton from "../SocialButton/SocialButton";

const Home = () => {
  const [text] = useTypewriter({
    words: ['React Developer', 'Frontend Developer', 'Mern Stack Developer', 'Full Stack Developer', 'Backend Developer'],
    loop: true, // Set loop to true for continuous typing
    typeSpeed: 120,
    deleteSpeed: 80,
    cursor: Cursor.BLOCK,
    cursorColor: "#000000"
  });

  const containerStyle = {
    backgroundImage: 'url(https://github.com/Mitul3047/Image-link-hosting-repo/blob/main/portfolio/Black%20Gold%20Black%20Friday%20Sale%20Banner.png?raw=true)',
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center',
    position: 'relative', // Ensure the parent div has a relative position
  };

  const overlayStyle = {
    position: 'absolute',
    inset: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value (last parameter) for darkness
  };

  return (
    <div id="home" className="hero min-h-screen relative shadow-amber-300 shadow-md" style={containerStyle}>
      <div className="absolute inset-0" style={overlayStyle}></div> {/* Dark overlay */}
      <div className="hero-content text-center text-neutral-content relative">
        <div className="max-w-m">
            <h2 className="text-5xl font-semibold mb-4">Hi! I am <span className="text-[#fca311]">Shehab Ahamed Chowdhury Mitul</span></h2>
          <h2 className="mb-10 text-4xl text-white font-semibold ">{text} <Cursor cursorStyle='|' /></h2>
          <SocialButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
