import { useEffect, useRef } from "react";
import { jwtDecode } from 'jwt-decode';

const LoginButton = () => {
    const googleButton = useRef<HTMLDivElement>(null); // Change useRef type to HTMLDivElement
    let google: any = null;

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = () => {
            (window as any).google.accounts.id.initialize({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                callback: handleGoogleLogin,
            });
            google = (window as any).google;
            google.accounts.id.renderButton(googleButton.current, {
                size: 'medium',
                locale: 'en'
            });


          
        };
        document.body.appendChild(script);
    }, []);

    const handleGoogleLogin = (response: any) => {
      const userObject: { email: string , name : string, picture : string} = jwtDecode(response.credential);
      const user = {
        email: '',
        name: '',
        picture: ''
      }; 
      user.email = userObject.email;
      user.name = userObject.name;
      user.picture = userObject.picture;
      sessionStorage.setItem('user', JSON.stringify(user));
      console.log(user)

      document.dispatchEvent(new Event('userLoggedIn'));
    };

    const handleGoogleButtonClick = () => {
       
        google.accounts.id.prompt(); 
    
    };

    return (
            <div
                ref={googleButton}
                onClick={handleGoogleButtonClick}
                className="flex justify-center items-center bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Icon" className="w-6 h-6 mr-2" />
                Login with Google
            </div>
    );
};

export default LoginButton;
