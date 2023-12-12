import { useState, useEffect } from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

const Education = () => {
    const [data, setData] = useState([]);
   
    useEffect(() => {
        fetch('/education.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
console.log(data);
    return (
        <div className="lg:h-[100vh]" id="education">
            <SectionTitle heading={'Education'} />
            <div className="shadow-amber-300 shadow-md w-[80%] border-2 lg:h-[68vh] flex justify-center items-center mx-auto lg:mx-20 rounded-lg border-yellow-600">

                    <div className="grid p-2 grid-cols-1 lg:grid-cols-2 w-full lg:w-[80%] mx-auto gap-6  "> {/* Fixed typo here */}
                        {
                            data.map((item, index) => (
                                <div key={index} className="">
                                    <div className="text-white space-y-2 flex  flex-col justify-center">
                                        <h3 className="text-xl font-bold text-amber-500">{item.degree}</h3>
                                        <h3>{item.subjects}</h3>
                                        <h3>{item.institute_name}</h3>
                                        <h3>{item.result} out of {item.out_of}</h3>
                                        <h3>{item.passing_year}</h3>
                                        <p className="divider"></p>
                                    </div>
                                  
                                </div>
                            ))}
                    </div>

            </div>
        </div>
    );
};

export default Education;
