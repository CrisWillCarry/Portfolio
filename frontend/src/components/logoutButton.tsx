const LogoutButton = () => {
    const handleLogout = () => {
     sessionStorage.clear();
     document.dispatchEvent(new Event('userLoggedOut'));
    };
  
    return (
      <button onClick={handleLogout} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
        Logout
      </button>
    );
  };
  
  export default LogoutButton;