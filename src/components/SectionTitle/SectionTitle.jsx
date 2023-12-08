

// eslint-disable-next-line react/prop-types
const SectionTitle = ({ heading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8 pt-20">
            <h3 className="text-3xl uppercase border-b-2 py-4 border-[#fca311] text-[#fca311]">{heading}</h3>
        </div>
    );
};

export default SectionTitle;