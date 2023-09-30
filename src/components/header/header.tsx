import style from './header.module.css'

export function Header(){
    

    return (
        <header className={style.header}>
            <div className={style.containerInfosHeader}>
                <h3>
                    LeRosa.Dev
                </h3>

                {/* Páginas do Site */}
                <nav>
                    <ul>
                        <li>Página Inicial</li>
                        <li>Produtos</li>
                        <li>Sobre mim</li>
                        <li>Contato</li>
                    </ul>
                </nav>

                {/* Redes Sociais    */}
                <nav>
                    <ul>
                        <li>Linkdin</li>
                        <li>GitHub</li>
                        <li>Instagram</li>
                    </ul>
                </nav>
            </div>
        </header>
        )
}