import React from "react";

interface ReviewBlockProps {
    comment: string;
    name: string;
    picture: string;
    stars: number;
    date: string;
}

const ReviewBlock: React.FC<ReviewBlockProps> = ({ comment, name, picture, stars, date }) => {
    return (
        <div className="transition-opacity duration-500 bg-white p-6 rounded-lg shadow-lg m-10 text-black ">
            <div className="flex flex-col">
                <div className="flex flex-row items-center mb-4">
                    <img src={picture} alt="" className="w-16 h-16 rounded-full" />
                    <div className="ml-5 flex-grow">
                        <div className="font-semibold">{name}</div>
                        <div className="text-gray-400">{date}</div>
                    </div>
                </div>
                <div className="text-left">{comment}</div>
                <div className="flex justify-end mt-5">
                    <div className="text-yellow-400">{stars}/5</div>
                    {[...Array(stars)].map((_, index) => (
                        <img key={index} src="/star.png" alt="star" className="w-6 h-6 ml-1" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewBlock;
