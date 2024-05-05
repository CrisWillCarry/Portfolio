const Footer: React.FC<{languague: String}> = ({languague}) => {
    return (
      <footer className="text-white p-4 text-center mt-10">
        
        <div>
          <p>© 2024 Cristian Barros Ferreira</p>
          {languague==='en'?<p>All Rights Reserved</p>:<p>Tous droits réservés</p>}
        </div>
      </footer>
    );
  };
  
  export default Footer;
  