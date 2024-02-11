const Contact: React.FC = () => {
    return (
        <div id="contact" className="mt-10 xl:ml-32 md:ml-28 sm:ml-9 text-left text-white"> {/* Add text-left class */}
            <h1 className="font-bold text-7xl mb-8">
                <span className="text-blue-300">Contact</span>
                <span className="text-green-300"> Me</span>
            </h1>

            <div className="text-2xl ">
                If you have any questions or would like to collaborate, please feel free to contact me:
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
                                CrissWillCarry
                            </span>
                            </a>
                        </div>
                        <div className="mt-4">
                            <a href='https://www.linkedin.com/in/cristian-barros-ferreira-2b5b84232/'>
                            <img src='/linkedin.png' alt='linkedin' className='inline' style={{ width: '10vh', height: '10vh' }} />
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
