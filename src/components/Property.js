import React, {useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Property = ({key, img, title, address, price, description}) => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const goToNext = () => {
        console.log('Next button clicked');
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        console.log('prev button clicked');
        sliderRef.current.slickPrev();
    };
    return (
        <div
            className="inline-block ml-10 mb-10 w-[274px] h-[420px] bg-gray-100 rounded-lg overflow-hidden relative hover:cursor-pointer transition duration-300 hover:bg-gray-200">
            <Slider ref={sliderRef} {...settings}>
                {img && img.map(response=>(
                    <div>
                        <img
                            src={response.link}
                            alt={response.id}
                            className="w-full h-[260px] object-cover rounded-t-lg"
                        />
                    </div>
                ))}
            </Slider>


            <div className="absolute bottom-0 w-full p-3  box-border">
                <h1 className="text-lg font-segoe-ui font-bold text-left">{title}</h1>
                <p className="text-md font-segoe-ui text-left">{address} </p>
                <p className="text-sm font-segoe-ui text-left">{description}</p>
                <div className="text-2xl font-bold text-right mt-3">{price}</div>
            </div>

            <button onClick={goToPrev}
                    className="absolute top-1/3 left-4 transform -translate-y-1/2 bg-transparent p-2 rounded-full  transition duration-300 hover:bg-green-500">
                {/* Left arrow SVG */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
            </button>

            <button onClick={goToNext}
                    className="absolute top-1/3 right-4 transform -translate-y-1/2 bg-transparent p-2 rounded-full transition duration-300 hover:bg-green-500">
                {/* Right arrow SVG */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
            </button>
        </div>
    );
};

export default Property;
