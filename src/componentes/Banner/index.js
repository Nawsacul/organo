import './Banner.css';

const Banner = () => {
    //JSX (Parece HTML mas não é. O React vai tentar entender o que está escrito aqui e tentar fazer o append no DOM, tipo um document.createElement('img') e por ai vai.)
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo" />
        </header>
    );
}

export default Banner;