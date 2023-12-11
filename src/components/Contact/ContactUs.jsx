import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";
import SocialButton from "../SocialButton/SocialButton";
import Footer from "../Footer/Footer";


const ContactUs = () => {
    return (
        <div className="lg:h-[100vh] flex flex-col" id="contact">
            <SectionTitle heading={'Contact Me'}></SectionTitle>

            <div className=" w-full p-4 flex-grow">
                <div className=" flex flex-col justify-evenly items-center  lg:flex-row-reverse">
                    <div className="text-center lg:text-left mb-5">
                        <div className="text-left text-white space-y-5 mb-6">
                        <p className="flex items-center gap-4"><FaPhone className="text-yellow-600"/> +880 168 5980481</p>
                        <p className="flex items-center gap-4"><FaEnvelope className="text-yellow-600"/> shehabchowdhury@gmail.com</p>
                        <p className="flex items-center gap-4"><FaLocationArrow className="text-yellow-600"/> Dhaka,Bangladesh</p>

                        </div>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        <SocialButton />
                    </div>



                    <div className=" w-full max-w-sm  ">
                        <form className="space-y-2">
                            <div className="form-control">

                                <input type="text" name="name" placeholder="name" className="input input-warning input-bordered" required />
                            </div>
                            <div className="form-control">

                                <input type="email" name="email" placeholder="email" className="input input-warning input-bordered" required />
                            </div>
                            <div className="form-control">

                                <input type="text" name="subject" placeholder="subject" className="input input-warning input-bordered" required />

                            </div>
                            <div className="form-control">

                                <textarea className="textarea textarea-warning" placeholder="Message" required></textarea>


                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-base text-white bg-[#fca311]">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;