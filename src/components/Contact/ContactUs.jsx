import  { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import SocialButton from '../SocialButton/SocialButton';
import Footer from '../Footer/Footer';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/users', formData);
            console.log('Post request successful', response.data);

            // Show success message using SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your message has been sent successfully.',
            });

            // Clear the form after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            console.error('Error submitting form data:', error);

            // Show error message using SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There was an error while sending your message. Please try again later.',
            });
        }
    };

    return (
        <div className="lg:h-[100vh] flex flex-col" id="contact">
            <SectionTitle heading={'Contact Me'}></SectionTitle>

            <div className=" w-full p-4 flex-grow">
                <div className=" flex flex-col justify-evenly items-center  lg:flex-row-reverse">
                    <div className="text-center lg:text-left mb-5">
                        <div className="text-left text-white space-y-5 mb-6">
                            <p className="flex items-center gap-4">
                                <FaPhone className="text-yellow-600" /> +880 130 5820034
                            </p>
                            <p className="flex items-center gap-4">
                                <FaEnvelope className="text-yellow-600" /> shehabchowdhury@gmail.com
                            </p>
                            <p className="flex items-center gap-4">
                                <FaLocationArrow className="text-yellow-600" /> Dhaka, Bangladesh
                            </p>
                        </div>
                        <SocialButton />
                    </div>

                    <div className="w-full max-w-sm">
                        <form className="space-y-2" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    className="input input-warning input-bordered"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-warning input-bordered"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="subject"
                                    className="input input-warning input-bordered"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <textarea
                                    className="textarea textarea-warning"
                                    placeholder="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn text-base text-white bg-[#fca311]">
                                    Send
                                </button>
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
