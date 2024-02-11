import React from "react";
import ReviewBlock from "./components/ReviewBlock";

const Reviews: React.FC = () => {
    const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

    return (
        <div id="reviews" className="mt-10 xl:ml-32 md:ml-28 sm:ml-9 text-white flex flex-col items-center justify-center">
            <h1 className="font-bold text-7xl mb-8">
                <span className="font-bold">
                    {rainbowColors.map((color, index) => (
                        <span key={index} style={{ color }}>
                            {index === 0 ? "R" : index === 1 ? "e" : index === 2 ? "v" : index === 3 ? "i" : index === 4 ? "e" : index === 5 ? "w" : "s"}
                        </span>
                    ))}
                </span>
            </h1>
            <ReviewBlock comment="Salamalekon" stars={4} name="Robert" picture="https://www.shutterstock.com/image-vector/cute-cartoon-rubber-duck-vector-600nw-2276837591.jpg" />
        </div>
    );
}

export default Reviews;
