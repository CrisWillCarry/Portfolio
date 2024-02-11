import React from "react";

interface ReviewBlockProps {
    comment: string;
    name: string;
    picture: string;
    stars: number;
}

const ReviewBlock: React.FC<ReviewBlockProps> = ({ comment, name, picture, stars }) => {
    return (
        <div className="flex flex-col text-gray-800 bg-white p-6 rounded-lg shadow-lg m-10 xl:w-1/2">
            <div className="flex flex-col  mb-4">
                <div className="flex flex-row">
                    <img src={picture} alt={name} className="w-16 h-16 rounded-full" />
                    <div className="ml-5 mt-3 text-3xl font-semibold">{name}</div>
                </div>
                <div className=" text-left mt-5 ml-24">{comment}</div>
                <div className="mt-2">
                    <div className="flex justify-end">
                        <div className="text-yellow-400">{stars}/5</div>
                        {[...Array(stars)].map((_, index) => (
                            <img key={index} src="/star.png" alt="star" className="w-6 h-6 ml-1" />
                        ))}
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default ReviewBlock;
