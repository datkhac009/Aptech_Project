const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__copyright">
                    Copyright &copy; {new Date().getFullYear()}
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
