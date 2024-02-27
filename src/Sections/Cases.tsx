import Case from '../Components/Case'
import Rodrigo_img from '../assets/cases/case-01.png'
import Camila_img from '../assets/cases/case-02.png'
import Lucas_img from '../assets/cases/case-03.png'
import Fernanda_img from '../assets/cases/case-04.png'
export default function Cases() {
    return (
        <section className='m-10'>
            <h1 className="text-center text-xl font-bold mb-10">
                Conheça nossos
                <br />
                <span className="inter-900 text-blue-700 text-5xl lg:text-6xl">Cases de Sucesso</span>
            </h1>
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
           <Case
                name="Rodrigo"
                sub="Rodeo Games"
                src={Rodrigo_img}
            >
                Eu sempre gostei de jogos, mas não sabia como lançar o meu próprio. Foi quando eu descobri o curso "Start to App", que me mostrou o passo a passo para lançar meu produto no mercado. O curso foi muito prático e divertido, e eu aprendi tudo o que precisava para transformar a meu sonho em realidade.
            </Case>
            <Case
                name="Camila"
                sub="Cacuau!"
                src={Camila_img}
            >
                Eu trabalho na Cacuau!, uma empresa de chocolates finos, e eu queria criar um app para fidelizar os meus clientes e aumentar as vendas. Eu não tinha nenhuma experiência em programação, mas o curso "Start to App" me ensinou tudo o que eu precisava saber para criar um app incrível. O curso foi muito didático e interativo, e eu pude acompanhar o progresso do meu app a cada aula.
            </Case>
            <Case
                name="Lucas"
                sub="Lucky Sports"
                src={Lucas_img}
            >
                Eu sou o fundador da Lucky Sports, uma empresa de artigos esportivos, e eu queria criar um app para divulgar os meus produtos e interagir com os meus clientes. Eu achei o curso "Start to App" na internet e resolvi me inscrever. O curso foi uma das melhores decisões que eu já tomei, pois me mostrou como criar um app profissional e atraente. O curso foi muito prático e dinâmico, e eu aprendi desde a concepção até a divulgação do app, passando por todas as fases de design, desenvolvimento, teste e marketing.
            </Case>
            <Case
                name="Fernanda"
                sub="Fê Modas"
                src={Fernanda_img}
            >
                Eu sou a dona da Fê Modas, uma loja de roupas femininas, e eu queria criar um app para vender os meus produtos online e oferecer uma experiência personalizada para as minhas clientes. Eu não sabia por onde começar, mas o curso "Start to App" me guiou passo a passo para criar e lançar o meu app. O curso foi muito completo e atualizado, e eu aprendi tudo o que precisava para criar um app de qualidade e competitivo.
            </Case>
           </div>
        </section>
    )
}

