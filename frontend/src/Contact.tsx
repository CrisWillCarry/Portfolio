const Contact: React.FC<{language: String}> = ({language}) => {
    return (
        <div id="contact" className="mt-10 xl:ml-32 md:ml-28 sm:ml-9 text-left text-white"> {/* Add text-left class */}
            <h1 className="font-bold text-7xl mb-8">
                <span className="text-blue-300">{language==='en'?<span>Contact</span>:<span>Contactez-</span>}</span>
                <span className="text-green-300">{language==='en'?<span> Me</span>:<span>Moi</span>}</span>
            </h1>

            <div className="text-2xl ">
                {language==='en'?<p>If you have any questions or would like to collaborate, please feel free to contact me:</p>:<p>Si vous avez des questions ou souhaitez collaborer, n'hésitez pas à me contacter:</p>}
            </div>
            <div className="text-xl mt-10">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col">
                        <div>
                             <a href="tel:+14388846245">
                            <img src="phone.gif" alt="phone" className="inline" style={{ width: '10vh', height: '10vh' }} />
                            <span className="ml-4">+1 (438)-884-6245</span>
                            </a>
                        </div>
                        <div className="mt-4">
                        <a href="mailto: cf93082@gmail.com">
                            <img src="email.gif" alt="email" className="inline -mt-10" style={{ width: '10vh', height: '10vh' }} />
                            <span className="ml-4">
                                cf93082@gmail.com
                            </span>
                        </a>
                        </div>
                        <div className=" mt-4">
                            <a href='https://github.com/CrisWillCarry'>
                            <img src='/github.png' alt='github' className='inline' style={{ width: '10vh', height: '10vh' }} />
                            <span className="ml-4">
                                Cris WillCarry
                            </span>
                            </a>
                        </div>
                        <div className="mt-4">
                            <a href='https://www.linkedin.com/in/cristian-barros-ferreira-2b5b84232/'>
                            <img src='/linkedIn.png' alt='linkedin' className='inline' style={{ width: '10vh', height: '10vh' }} />
                            <span className="ml-4">
                                Cristian Barros Ferreira
                            </span>
                            </a>
                        </div>
                        <div className="mt-8">
                            <img src="location.gif" alt="location" className="inline -mt-10" style={{ width: '10vh', height: '10vh' }} />
                            <span className="ml-4">Montreal, Quebec, Canada</span>
                        </div>
                    </div>
                    <div className="ml-0 xl:ml-auto md:mr-0 xl:mr-96">
                        <img src="contact.png" alt="contact" className="inline" style={{ width: '60vh', height: '60vh' }} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;
