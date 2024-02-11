import React, { useState, useEffect, useRef } from "react";

interface ReviewFormProps {
    onClose: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        username: "",
        picture: "",
        stars: 0,
        comment: ""
    });

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user') || "");
        const picture = user.picture;
        const username = user.name;
        setFormData({
            username: username,
            picture: picture,
            stars: 0,
            comment: ""
        });
    }, []);

    const formRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRatingChange = (stars: number) => {
        setFormData(prevState => ({
            ...prevState,
            stars
        }));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        

        fetch("http://localhost:8080/api/reviews", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then(response => response.status === 201 ? alert("Review submitted successfully") : alert("Failed to submit review"))
        .then(() => {
            onClose();
        })
        .catch(error => console.log(error))
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div ref={formRef} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-8 text-black bg-white rounded-lg shadow-lg mt-24">
            <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                    <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <button
                                key={value}
                                type="button"
                                onClick={() => handleRatingChange(value)}
                                className={`h-8 w-8 ${value <= formData.stars ? 'text-yellow-200' : 'text-gray-300'} focus:outline-none`}
                                style={{ filter: value <= formData.stars ? "brightness(150%)" : "brightness(100%)" }} // Add visual cue for selected stars
                            >
                                ⭐
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleInputChange}
                        rows={4}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewForm;
