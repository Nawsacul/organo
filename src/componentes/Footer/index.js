import './Footer.css';

const Footer = () => {
    const links = [
        {
            redirecionamento: 'https://www.facebook.com/AluraCursosOnline/',
            alt: 'Link para o Facebook do Alura',
            imagem: '/imagens/fb.png'
        },
        {
            redirecionamento: 'https://twitter.com/AluraOnline',
            alt: 'Link para o Twitter do Alura',
            imagem: '/imagens/tw.png'
        },
        {
            redirecionamento: 'https://www.instagram.com/aluraonline/',
            alt: 'Link para o Instagram do Alura',
            imagem: '/imagens/ig.png'
        }
    ]

    return (
        <footer className='footer'>
            <div className='links'>
                {links.map(links =>
                <a key={links.alt} href={links.redirecionamento} alt={links.alt} target='_blank' rel="noreferrer">
                    <img src={links.imagem} alt={links.alt} />
                </a>
                )}
            </div>
            <img src='/imagens/logo.png' alt='Logo da Organo localizado no final da página' />
            <span>Desenvolvido por Alura.</span>
        </footer>
    );
}

export default Footer;