import React, { useState, useEffect } from "react";
import ReviewBlock from "./components/ReviewBlock";
import LoginButton from "./components/loginButton";
import ReviewForm from "./components/ReviewForm";

const Reviews: React.FC<{language: String}> = ({language}) => {
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
        fetch("https://portfolio-backend-q8g4.onrender.com/reviews")
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
            <div className="w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/3 text-white border rounded-xl bg-blue-500 shadow-lg p-4 relative">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
                    Portfolio{" "}
                    {rainbowColors.map((color, index) => (
                        <span key={index} style={{ color }}>
                            {index === 0 ? "R" : index === 1 ? "e" : index === 2 ? "v" : index === 3 ? "i" : index === 4 ? "e" : index === 5 ? "w" : "s"}
                        </span>
                    ))}
                </h1>

                <div className="flex flex-col items-center">
                    <div className="mb-4 flex items-center">
                        {currentIndex > 0 && (
                            <button className="mr-4" onClick={goToPreviousReview}>
                                <span role="img" className="text-2xl sm:text-3xl" aria-label="Left Arrow">⬅️</span>
                            </button>
                        )}
                        {reviews.length > 0 && (
                            <div className={`flex-grow transition-opacity ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
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
                                <span role="img" className="text-2xl sm:text-3xl" aria-label="Right Arrow">➡️</span>
                            </button>
                        )}
                    </div>
                    {!isLoggedIn ? (
                        <div className="flex flex-col justify-center items-center">
                            <LoginButton onLogin={handleLogin} />
                            <div className="text-sm">{language==='en'?<p>*Needed to leave a review*</p>:<p>*Nécessaire afin de laisser un avis*</p>}</div>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center">
                            <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleLeaveReviewClick}>
                                {language==='en'?<p>Leave a Review</p>:<p>Laisser un avis</p>}
                            </button>
                        </div>
                    )}
                </div>
            </div>
            
            {showReviewForm && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
                    <ReviewForm onClose={handleLeaveReviewClick}/>
                </div>
            )}
        </div>
    );
};

export default Reviews;
