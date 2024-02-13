import React, { useState, useEffect } from "react";
import ReviewBlock from "./components/ReviewBlock";
import LoginButton from "./components/loginButton";
import ReviewForm from "./components/ReviewForm";

const Reviews: React.FC = () => {
    const [reviews, setReviews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showReviewForm, setShowReviewForm] = useState(false); // State to manage the visibility of the review form

    useEffect(() => {
        getReviews();
    }, []);

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);


    const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

    const getReviews = () => {
        fetch(process.env.REACT_APP_API_URL+"reviews")
        .then(response => response.json())
        .then(data => setReviews(data))
        .catch(error => console.log(error));

        console.log(reviews);
    }

    const goToNextReview = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
                setIsTransitioning(false);
            }, 200);
        }
    };

    const goToPreviousReview = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex(prevIndex => (prevIndex - 1 + reviews.length) % reviews.length);
                setIsTransitioning(false);
            }, 200);
        }
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLeaveReviewClick = () => {
        setShowReviewForm(!showReviewForm);
        getReviews();
    };

    return (
        <div id="reviews" className="mt-10 flex justify-center items-center">
            <div className="w-2/3 xl:ml-32 md:ml-28 sm:ml-9 text-white border rounded-xl bg-blue-500 shadow-lg">
            <h1 className="font-bold text-7xl mb-8">
    
                Portfolio{" "}
                {rainbowColors.map((color, index) => (
                    <span key={index} style={{ color }}>
                        {index === 0 ? "R" : index === 1 ? "e" : index === 2 ? "v" : index === 3 ? "i" : index === 4 ? "e" : index === 5 ? "w" : "s"}
                    </span>
                ))}
            </h1>

                <div className="flex flex-row items-center justify-center">
                    {currentIndex > 0 && (
                        <button className="mr-4" onClick={goToPreviousReview}>
                            <span role="img" className="text-3xl" aria-label="Left Arrow">⬅️</span>
                        </button>
                    )}
                    {reviews.length > 0 && (
                        <div className={`transition-opacity ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                            <ReviewBlock
                                key={currentIndex}
                                comment={(reviews[currentIndex] as { comment: string }).comment}
                                stars={(reviews[currentIndex] as { stars: number }).stars}
                                name={(reviews[currentIndex] as { username: string }).username}
                                picture={(reviews[currentIndex] as { picture: string }).picture}
                                date={(reviews[currentIndex] as { date: string }).date}
                            />
                        </div>
                    )}
                    {currentIndex < reviews.length - 1 && (
                        <button className="ml-4" onClick={goToNextReview}>
                            <span role="img" className="text-3xl" aria-label="Right Arrow">➡️</span>
                        </button>
                    )}
                </div>
                {!isLoggedIn ? (
                    <div className="flex flex-col justify-center mt-4 mb-4 items-center">
                        <LoginButton onLogin={handleLogin} />
                        <div>*Needed to leave a review*</div>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center mt-4 mb-4 items-center">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleLeaveReviewClick}>
                            Leave a Review
                        </button>
                    </div>
                )}
            </div>
            {/* Conditionally render the review form modal */}
            {showReviewForm && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
                    <ReviewForm onClose={handleLeaveReviewClick}/>
                </div>
            )}
        </div>
    );
};

export default Reviews;
