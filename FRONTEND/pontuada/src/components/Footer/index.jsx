// pontuada\src\components\Footer\index.jsx


import './styles.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrap">
                <div className="footer__brand">
                    <strong>PharmaVida</strong>
                </div>
                <address className="footer__address">
                    Rua Dendezeiros, 123<br/>Salvador - BA
                </address>
                <div className="footer__copy">
                    © {new Date().getFullYear()} PharmaVida. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}

export default Footer;