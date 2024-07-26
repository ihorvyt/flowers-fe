import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className={"footer-content-wrapper"}>
            <div className={"shop-description"}>
                <img src='/icons/logo.svg'/>
                <div className="text">
                    <p>
                        Ми квіткова студія, яка тільки-тільки відкрилась у Жопі, але вже
                        завоювала серця багатьох відвідувачів. І все тому, що ми
                        працюємо на результат, ми докладаємо зусиль аби знайти підхід до
                        кожного, ми, навіть, намагаємось відгадати ваші думки.
                    </p>
                </div>
            </div>
            <div className="social-media">Соц. мережі</div>
            <div className="email-sender">
                <div className="follow-us-text">Слідкуйте за новинками та акціями:</div>
                <div className="email-input">
                    <input type="email" placeholder="Ведіть свій e-mail"/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;
