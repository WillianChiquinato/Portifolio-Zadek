<template>
    <teleport to="body">
        <div id="fade" v-if="internalShow" :class="{ show: isOpen }" @click="closeModal"></div>
        <div id="modal" ref="modal" v-if="internalShow" :class="{ show: isOpen }" role="dialog" aria-modal="true">
            <div class="modal-header">
                <button class="close-button" type="button" @click="closeModal" aria-label="Fechar modal">
                    <span aria-hidden="true">x</span>
                </button>
            </div>

            <div class="modal-content">
                <section class="slider">
                    <div class="slider-shell">
                        <button type="button" class="slider-nav" @click="prevSlide" :disabled="totalSlides < 2"
                            aria-label="Imagem anterior">
                            <span aria-hidden="true">&lt;</span>
                        </button>

                        <div class="slider-frame">
                            <transition name="slide-fade" mode="out-in">
                                <img :key="`${projeto?.id}-${currentSlide}`" class="slider-image"
                                    :src="currentSlideImage"
                                    :alt="`Imagem ${currentSlide + 1} do projeto ${projeto?.nome || ''}`" />
                            </transition>
                        </div>

                        <button type="button" class="slider-nav" @click="nextSlide" :disabled="totalSlides < 2"
                            aria-label="Próxima imagem">
                            <span aria-hidden="true">&gt;</span>
                        </button>
                    </div>

                    <div class="slider-indicators" v-if="totalSlides > 1">
                        <button v-for="(image, index) in projeto?.imagens" :key="`indicator-${index}`" type="button"
                            class="indicator" :class="{ active: currentSlide === index }" @click="goToSlide(index)"
                            :aria-label="`Ir para imagem ${index + 1}`">
                        </button>
                    </div>
                </section>

                <h2 class="modal-title">{{ projeto?.nome }}</h2>

                <div class="modal-body">
                    <p>{{ projeto?.descricao }}</p>
                </div>

                <div v-if="projeto?.trailerVideo" class="video-section">
                    <h3 class="modal-subtitle">Video Trailer</h3>
                    <div class="videoContent">
                        <iframe :src="projeto?.video" title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>

                <h3 class="modal-subtitle">Envolvidos no projeto</h3>
                <div class="envolvidos-container">
                    <div v-for="envolvido in projeto?.envolvidos" :key="envolvido.id" class="envolvidos-content">
                        <img :src="envolvido.image" alt="Envolvido" class="fotoEnvolvidos">
                        <h4 class="titulo-envolvidos">{{ envolvido.name }}</h4>
                        <div class="envolvidos-link-container">
                            <a :href="normalizeLink(envolvido.link)" class="envolvidos-link" target="_blank"
                                rel="noopener noreferrer">{{ envolvido.link }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import fotoTestePreta from '@/assets/imagens/FundoPreto.png';

// Foto dos projetos.
import Lilith1 from '@/assets/imagens/Lilith1.png';
import Lilith2 from '@/assets/imagens/Lilith2.png';
import Lilith3 from '@/assets/imagens/Lilith3.png';
import Lilith4 from '@/assets/imagens/Lilith4.png';
import Lilith5 from '@/assets/imagens/Lilith5.png';
import Lilith6 from '@/assets/imagens/Lilith6.png';
import Lilith7 from '@/assets/imagens/Lilith7.png';
import VarzeaPlay1 from '@/assets/imagens/VarzeaPlay1.jpeg';
import VarzeaPlay2 from '@/assets/imagens/VarzeaPlay2.jpeg';
import VarzeaPlay3 from '@/assets/imagens/VarzeaPlay3.jpeg';
import VarzeaPlay4 from '@/assets/imagens/VarzeaPlay4.jpeg';
import VarzeaPlay5 from '@/assets/imagens/VarzeaPlay5.jpeg';
import PortalSt1 from '@/assets/imagens/PortalSt1.png';
import PortalSt2 from '@/assets/imagens/PortalSt2.png';
import PortalSt3 from '@/assets/imagens/PortalSt3.png';
import PortalSt4 from '@/assets/imagens/PortalSt4.png';
import PortalSt5 from '@/assets/imagens/PortalSt5.png';
import CasaDaBatian1 from '@/assets/imagens/CasaDaBatian1.png';
import CasaDaBatian2 from '@/assets/imagens/CasaDaBatian2.png';
import CasaDaBatian3 from '@/assets/imagens/CasaDaBatian3.png';
import CasaDaBatian4 from '@/assets/imagens/CasaDaBatian4.png';
import BlackBrothers1 from '@/assets/imagens/BlackBrothers1.png';
import BlackBrothers2 from '@/assets/imagens/BlackBrothers2.png';
import BlackBrothers3 from '@/assets/imagens/BlackBrothers3.jpg';
import Companhia0 from '@/assets/imagens/Companhia0.png';
import Companhia2 from '@/assets/imagens/Companhia2.png';
import Companhia3 from '@/assets/imagens/Companhia3.png';
import Spotify from '@/assets/imagens/Spotify1.png';
import Spotify2 from '@/assets/imagens/Spotify2.jfif';
import Spotify3 from '@/assets/imagens/Spotify3.jfif';
import ChatBotDart from '@/assets/imagens/ChatBot1.jpg';
import ChatBotDart2 from '@/assets/imagens/ChatBot2.jpg';
import ChatBotDart3 from '@/assets/imagens/ChatBot3.jfif';
import EnerisPlanet from '@/assets/imagens/Eneris1.jpeg';
import EnerisPlanet2 from '@/assets/imagens/Eneris2.jpeg';
import EnerisPlanet3 from '@/assets/imagens/Eneris3.jpeg';
import Catastroph1 from '@/assets/imagens/Catastroph1.png';
import Catastroph2 from '@/assets/imagens/Catastroph2.jpeg';
import Catastroph3 from '@/assets/imagens/Catastroph3.jpeg';
import SubstratoStation1 from '@/assets/imagens/Substrato1.png';
import SubstratoStation2 from '@/assets/imagens/Substrato2.png';
import SubstratoStation3 from '@/assets/imagens/Substrato3.png';
import DiarioMartin from '@/assets/imagens/DiarioMartin1.png';
import DiarioMartin2 from '@/assets/imagens/DiarioMartin2.png';
import DiarioMartin3 from '@/assets/imagens/DiarioMartin3.png';
import SiteCedihus from '@/assets/imagens/Cedihus1.png';
import SiteCedihus2 from '@/assets/imagens/Cedihus2.png';
import SiteCedihus3 from '@/assets/imagens/Cedihus3.png';
import BullShit from '@/assets/imagens/BullShit1.png';
import BullShit2 from '@/assets/imagens/BullShit2.png';
import BullShit3 from '@/assets/imagens/BullShit3.png';
import FolkLore1 from '@/assets/imagens/FolkLore1.png';
import FolkLore2 from '@/assets/imagens/FolkLore2.png';
import FolkLore4 from '@/assets/imagens/FolkLore4.jpeg';
import HeronBespoke1 from '@/assets/imagens/HeronBespokeFoto1.png';
import HeronBespoke2 from '@/assets/imagens/HeronBespokeFoto2.png';
import HeronBespoke3 from '@/assets/imagens/HeronBespokeFoto3.png';

// Fotos pessoais.
import WillFoto from '@/assets/imagens/persons/Will-Fotos.jpeg';
import RenanFoto from '@/assets/imagens/persons/RenanFoto.jpg';
import GustavoValaFoto from '@/assets/imagens/persons/GustavoVaFoto.jpg';
import JuanFoto from '@/assets/imagens/persons/JuanFoto.jpg';
import VitorFoto from '@/assets/imagens/persons/VitorVentFoto.jpg';
import EnzoFoto from '@/assets/imagens/persons/EnzoFoto.png';
import LucasFoto from '@/assets/imagens/persons/LucasFoto.jpg';
import SantosTech from '@/assets/imagens/persons/SantosTech.png';
import PedroFoto from '@/assets/imagens/persons/Pedro.jpg';

export default defineComponent({
    data() {
        return {
            internalShow: false,
            currentSlide: 0,
            envolvidos: [
                {
                    id: 1,
                    Name: '',
                    image: '',
                    link: ''
                }
            ],
            modais: [
                {
                    id: 1,
                    nome: 'Lilith: Keys of Power',
                    descricao: 'A história se desenrola em um vasto império contruído dentro de uma montanha. O jogador acompanha Lilith, uma jovem determinada a derrubar o regime opressor após seu pai ser capturado. \n\nPara alcançar seu objetivo, ela se une a revolucionários e rebeldes, enfrentando desafios e descobrindo os segredos ocultos nas profundezas do império. \n\nCom estilo Pixel Art 2D, altamente detalhado e mecânicas de exploração inovadoras, este MetroidVania entrega uma jornada épica repleta de ação, mistério e reviravoltas...',
                    imagens: [Lilith1, Lilith2, Lilith3, Lilith4, Lilith5, Lilith6, Lilith7],
                    trailerVideo: false,
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Programador Unity2D',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        },
                        {
                            id: 2,
                            name: 'Artista 2D e Animador',
                            image: EnzoFoto,
                            link: 'https://www.artstation.com/enzolonghi'
                        }
                    ]
                },
                {
                    id: 2,
                    nome: 'Folklore: Cards Adventures',
                    descricao: '"FolkLore: Cards Adventures" é um projeto desenvolvido com o objetivo de difundir a cultura brasileira e explorar a riqueza do nosso Folclore. O jogo esta sendo criado com apoio do Estado de São Paulo por meio da Lei Paulo Gustavo e encontra-se atualmente em fase de desenvolvimento. \n\nO jogador embarca em uma jornada para ajudar criaturas folclóricas e proteger a natureza, coletando cartas mágicas que concedem novas habilidades e poderes. \nOs cenários São inspirados na Floresta Amazônica e em outro ambientes tipicamente brasileiros, proporcionando uma experiência imersiva e educativa. \n\nO jogo é desenvolvido na Unity3D com C# e utiliza mecânicas de RPG, exploração e coleta de cartas, incentivando os jogadores a aprenderem sobre o folclore brasileiro enquanto se divertem. \n\nA proposta é alcançar o publico-alvo de crianças e adolescentes, aproximando-os das histórias e lendas do nosso país, promovendo a valorização da cultura nacional.',
                    imagens: [FolkLore1, FolkLore2, FolkLore4],
                    trailerVideo: true,
                    video: 'https://www.youtube.com/embed/dWSurtbnOxA',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor Unity3D',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        },
                        {
                            id: 2,
                            name: 'Equipe Santos Tech',
                            image: SantosTech,
                            link: 'www.santos-tech.com/portfolio'
                        }
                    ]
                },
                {
                    id: 3,
                    nome: 'Roblox - Varzea Play',
                    descricao: 'Varzea Play é um jogo divertido focado no publico alvo de crianças e adolescentes, inspirado nas regiões e comunidades de ribeirão preto. \n\nO jogo é desenvolvido na plataforma Roblox, utilizando a linguagem de programação Lua, e oferece uma experiência imersiva e interativa. \n\nOs jogadores podem explorar varios mapas de desafios em gols espalhados no mapa, no centro da região, um sistema complexo de pontos para troca de skins e recuperação de vida, assim gerando grande impacto e ciclo de vida maior.',
                    imagens: [VarzeaPlay1, VarzeaPlay2, VarzeaPlay3, VarzeaPlay4, VarzeaPlay5],
                    trailerVideo: false,
                    video: 'https://www.youtube.com/embed/6ge4WploLa4',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Programador Lua',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        },
                        {
                            id: 2,
                            name: 'Equipe Santos Tech',
                            image: SantosTech,
                            link: 'www.santos-tech.com/portfolio'
                        }
                    ]
                },
                {
                    id: 4,
                    nome: 'Qubyte - Substrato Station',
                    descricao: 'O Substrato Station é um jogo 3D multiplayer, low poly, desenvolvido na Unity3D com C#. Ele propõe uma experiência cooperativa de puzzles no qual os jogadores precisam trabalhar juntos para superar desafios. \n\nApós um desastre natural, o prédio de uma empresa privada de pesquisas químicas desabou. Os 18 andares superiores colapsaram, deixando apenas os 4 andares subterrâneos intactos. Presos nesse subsolo, os poucos funcionários sobreviventes descobrem que os experimentos com animais genéticos foram liberados — agora hostis, inteligentes e alterados. Os jogadores assumem o papel desses funcionários. Sem comunicação com o mundo exterior, precisam resolver puzzles, sobreviver a emboscadas, e cooperar para escapar. O objetivo dos jogadores é subirem os 4 andares do subsolo e escaparem da empresa demolida, os jogadores começam no último andar e cada andar tem um puzzle para resolver.',
                    imagens: [SubstratoStation1, SubstratoStation2, SubstratoStation3],
                    trailerVideo: true,
                    video: 'https://www.youtube.com/embed/6ge4WploLa4',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor Unity3D',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        },
                        {
                            id: 2,
                            name: 'Modelagem 3D e Designer',
                            image: LucasFoto,
                            link: 'https://www.linkedin.com/in/lsantiagoc'
                        }
                    ]
                },
                {
                    id: 5,
                    nome: 'Eneris Planet - Global Solution 2024',
                    descricao: 'Diante de um desafio da FIAP - Global Solution, para energia sustentável, desenvolvemos o ENERIS PLANET, um jogo 2D side scrolling que conscientiza e explica indiretamente sobre a energia geotérmica, desenvolvido 1 fase inteira com um tempo estimado de 10 dias até o final do desafio... Em um planeta vizinho de Saturno, Eneris é um planeta cujo sua principal mão de obra e dificuldade é a  energia, o planeta inteiro é feito para a energia e seu núcleo, a matriz do planeta é reabastecida manualmente pela população e empregados nas empresas de energia geotermicas. Com isso temos o Zadek, um homem de 25 anos, recém saído da fase de estudos, foi aprovado na PSN (Projetos de soluções nucleotecnicas) e terá o dia a dia demonstrado no jogo, Eneris terá desafios, inimigos feito de carbono e líquido amarelo escuro que sujam o ambiente aonde passam e não deixam Zadek trabalhar, chamados de Rek"Tech, Zadek terá que fazer a manutenção do maquinário TVB (Totens de Vapor binário) contendo o liquido "Novair" com ponto de ebulição para acionar a turbinas geotermicas em pontos específicos no mapa, os totens se sobrecarregam quando não faz a manutenção ou não consegue por conta os Rek"Techs, seu objetivo em cada mapa é deixar o Nucleo "Novan" do planeta Eneris ativado, pois ele se esfria a cada momento que não tem retorno de energia, conseguindo ativar todos os totens ao mesmo tempo, os inimigos serão destruidos e Zadek terá seu dia feito.',
                    imagens: [EnerisPlanet, EnerisPlanet2, EnerisPlanet3],
                    trailerVideo: true,
                    video: 'https://www.youtube.com/embed/WYJlNK23viA',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor FullStack',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        }
                    ]
                },
                {
                    id: 6,
                    nome: 'Catastroph - TCC 2022',
                    descricao: '"Catastroph", Um jogo 2d no estilo metroidvania, baseado em Hollow Knight, BloodBorne e Elden Ring. O jogo foi criado com um propósito de conscientizar e divertir o consumidor a partir de uma história baseado em romance epistolar e Souls Like, a narrativa do jogo narra a história de Luara em uma cidade de pescadores que adoram a Lua como uma deusa, a cidade passa por momentos difíceis desde o desaparecimento do sol e da lua nos céus, como consequência do uso indevido da magia proporcionada pelos dois astros. O jogador controlará o gato Astroph, um determinado herói que busca encontrar a sua amiga Beth, para isso o jogador passará por diversos desafios dentro da cidade de Luara. Por conta do desaparecimento do Astro Rei e do Satélite da Terra, a pesca, atividade chave na economia e sustento de Luara, os pescadores locais usaram de uma magia proibida para atrair os peixes, mas essa magia acaba tendo um efeito colateral que transformava as pessoas que consumiam os peixes em animais marinhos aos poucos, criando assim aberrações de humanos amalgamados com peixes, águas-vivas, lagostas etc. A infecção também se alastrou para outros tipos de formas de vidas além dos humanos, os peixes infectados foram consumidos por outros peixes maiores e até mesmo por gaivotas, contaminado assim todo o eco sistema.',
                    imagens: [Catastroph1, Catastroph2, Catastroph3],
                    trailerVideo: true,
                    video: 'https://www.youtube.com/embed/SrD-ay0wH9o',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Programador GDscript',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        },
                        {
                            id: 2,
                            name: 'Artista 2D, Animador e Designer Gráfico',
                            image: EnzoFoto,
                            link: 'https://www.artstation.com/enzolonghi'
                        }
                    ]
                },
                {
                    id: 7,
                    nome: 'Diário de Martin',
                    descricao: 'Martin Dastmal, de 14 anos, estuda no ensino fundamental da universidade de JackVille e passa grande parte do tempo na biblioteca com seus amigos Douglas e Vitor. No dia de seu aniversário de 15 anos, tudo dá errado: enfrenta uma prova difícil, vê Douglas sendo intimidado por valentões, sofre bullying, tira uma nota baixa e acaba humilhado em uma partida de vôlei diante de colegas mais velhos. \n\nAbalado, Martin foge para o banheiro, onde chora sozinho até ouvir um estranho sussurro. De repente, desmaia e, ao despertar, descobre que está em uma universidade vazia, escura e silenciosa, com apenas a voz misteriosa tentando se comunicar com ele',
                    imagens: [DiarioMartin, DiarioMartin2, DiarioMartin3],
                    trailerVideo: true,
                    video: 'https://www.youtube.com/embed/1vqPZgh8DJM',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor Unity2D',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        },
                    ]
                },
                {
                    id: 8,
                    nome: 'BullShit',
                    descricao: 'Um jogo feito para duas pessoas localmente, com tela dividida, onde é possível derrotar o inimigo atirando nele, porém com uma IA te observando, a cada 10 segundos se um dos dois se mexerem, serão eliminados. \n\nSegue o vídeo:',
                    imagens: [BullShit, BullShit2, BullShit3],
                    trailerVideo: true,
                    video: 'https://www.youtube.com/embed/JT__ciPpz2Y',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor Unity2D',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        }
                    ]
                },
                {
                    id: 9,
                    nome: 'Chama Espiral',
                    descricao: 'Em breve...',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    trailerVideo: false,
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor Unity2D',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        },
                        {
                            id: 2,
                            name: 'Animador e Designer Gráfico',
                            image: EnzoFoto,
                            link: 'https://www.artstation.com/enzolonghi'
                        }
                    ]
                },
                {
                    id: 10,
                    nome: 'Dungeous Crashers',
                    descricao: 'Em breve...',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    trailerVideo: false,
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor Unity2D',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        },
                        {
                            id: 2,
                            name: 'Animador e Designer Gráfico',
                            image: EnzoFoto,
                            link: 'https://www.artstation.com/enzolonghi'
                        }
                    ]
                },
                {
                    id: 11,
                    nome: 'Portal Santos Tech',
                    descricao: 'O Portal Santos Tech contem toda a parte de participação, exercicios, cursos, turmas relacionadas, modulos dos seus cursos e muito mais. \nÉ uma plataforma web feita para os alunos da Santos Tech, onde eles podem acessar seus cursos, materiais, participar de desafios mensais e finais de modulo, ganhos de pontos e interagir com outros alunos. O portal é desenvolvido utilizando Vue.js para a interface do usuário, .NETpara o backend e PostgreSQL para o banco de dados. \nEle oferece uma experiência personalizada para cada aluno, permitindo que eles acompanhem seu progresso, acessem recursos exclusivos e se conectem com a comunidade de aprendizado da Santos Tech. \nFuturamente a escola Santos Tech querem integrar um E-Commerce para utilizar seus pontos em ganhos reais como produtos e vouchers... \nSegue video abaixo, dados apenas de homologação.',
                    imagens: [PortalSt1, PortalSt2, PortalSt3, PortalSt4, PortalSt5],
                    trailerVideo: false,
                    video: 'https://www.youtube.com/embed/QMzDT8kpvMk',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor FullStack',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        },
                        {
                            id: 2,
                            name: 'Equipe Santos Tech',
                            image: SantosTech,
                            link: 'www.santos-tech.com/portfolio'
                        }
                    ]
                },
                {
                    id: 12,
                    nome: 'Black Brothers',
                    descricao: 'Um aplicativo intitulado "Black Brothers", que tem a função de ser um app fitness para ser utilizado por academias e seus alunos com o intuito de armazenar e compartilhar detalhes e progresso de cada usuário dentro de uma academia. Esse projeto se deu através de um estudo de caso real, onde foi realizada um pesquisa pela periferia de Guaianases e encontramos a academia Black Brothers, que nos forneceu dados sobre o seu negócio e como um aplicativo poderia favorecer o serviço oferecido aos clientes. O app que está em desenvolvimento utilizará a linguagem Dart/Flutter, API rest em Python/Flask e MySQL como banco de dados, para trazer funcionalidades de treinos com vídeos e descrições, registro de frequência, agendamento de consultas com nutricionista e inserção de dashboards em sua interface.',
                    imagens: [BlackBrothers1, BlackBrothers2, BlackBrothers3],
                    trailerVideo: true,
                    video: 'https://www.youtube.com/embed/gP61oBab8s8',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Programador FullStack',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        },
                        {
                            id: 2,
                            name: 'Programador Front End - App',
                            image: RenanFoto,
                            link: 'https://www.linkedin.com/in/renan-silva-pinheiro-400420282'
                        },
                        {
                            id: 3,
                            name: 'Programador Front End - Admin',
                            image: GustavoValaFoto,
                            link: 'https://www.linkedin.com/in/gustavo-valadares-8780472a1'
                        },
                        {
                            id: 4,
                            name: 'Programador Back End',
                            image: JuanFoto,
                            link: 'https://www.linkedin.com/in/juanlimar'
                        },
                        {
                            id: 5,
                            name: 'Documentação, Banner && Artigo',
                            image: VitorFoto,
                            link: 'https://www.linkedin.com/in/vitor-ventola-6a035225a'
                        }
                    ]
                },
                {
                    id: 13,
                    nome: 'Saas - Sistema interno Mecânica',
                    descricao: 'A equipe e um dos sócios da mecânica me procuraram no início do ano com o objetivo de modernizar o sistema interno. Eles queriam uma solução que substituísse as planilhas de Excel, oferecendo uma interface mais amigável, visualmente atraente e dinâmica. No entanto, o Excel ainda precisa ser mantido como uma opção para reuniões mensais e geração de relatórios. Para atender essa demanda, implementarei uma home page com filtros de mês e ano, permitindo que o sistema fosse dividido em períodos, evitando sobrecarregar o carregamento assíncrono. O sistema interno está sendo projetado para: \n\n- Gerenciamento de veículos: cadastro de carros finalizados, acompanhamento de “retrabalhos” (carros que retornam na mesma semana), categorizados como particulares ou seguradoras. \n- Gestão de funcionários: inclusão e exclusão de colaboradores, com funcionalidades adicionais, como controle de vale PIX e convênios. \n- Cadastro de despesas: formulário descritivo para registrar despesas com tipos como equipamentos e contas. \n- Indicadores visuais: dashboards com indicadores em circle progress, ajustáveis para diferentes métricas, além do cálculo do ticket médio (dividido em três etapas para o mês e o total). \n- Relatórios e exportações: uma funcionalidade de "Extract" que permite extrair os dados do sistema diretamente para uma planilha Excel (mensal), de forma rápida e dinâmica. Todas as informações do sistema estão organizadas e divididas em faturamento e despesas, permitindo uma visão clara e prática do desempenho geral da mecânica.',
                    imagens: [Companhia0, Companhia2, Companhia3],
                    trailerVideo: true,
                    video: 'https://www.youtube-nocookie.com/embed/jzlnFV-EyTA?rel=0&modestbranding=1',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor FullStack',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        }
                    ]
                },
                {
                    id: 14,
                    nome: 'Casa da Batian - Landing Page',
                    descricao: 'A Casa da Batian é um restaurante japones, é uma instituição com venda de produtos artesanais e japoneses e restaurante comida japonesa, o cliente queria uma landing page para divulgar seus serviços e produtos, com um design moderno e elegante, focando na experiência do usuário e na apresentação visual dos pratos e produtos oferecidos. \n\nA landing page foi desenvolvida utilizando Vue.js, com um design responsivo e otimizado para dispositivos móveis, visando proporcionar uma experiência agradável aos usuários e destacar a qualidade dos serviços e produtos da Casa da Batian.',
                    imagens: [CasaDaBatian1, CasaDaBatian2, CasaDaBatian3, CasaDaBatian4],
                    trailerVideo: false,
                    video: 'https://www.youtube-nocookie.com/embed/jzlnFV-EyTA?rel=0&modestbranding=1',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor FullStack',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        }
                    ]
                },
                {
                    id: 15,
                    nome: 'Site Cedihus - USP',
                    descricao: 'Foi desenvolvido um site para o Cedihus - USP, com o objetivo de fornecer informações sobre o centro de estudos e suas atividades. O site foi construído utilizando Wordpress, com um design responsivo e intuitivo, visando facilitar o acesso às informações pelos usuários e focando na acessibilidade e organizar dos materiais da OMS. \n\nO cliente queria um blog porem com a quantidade de informações nao poderia ser totalmente possivel essa ideia, entao fiz uma aba a parte sobre esse tópico.',
                    imagens: [SiteCedihus, SiteCedihus2, SiteCedihus3],
                    trailerVideo: false,
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor FullStack',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        }
                    ]
                },
                {
                    id: 16,
                    nome: 'Heron Bespoke - Companhia de Viagens',
                    descricao: 'Uma equipe de viagens de Londres veio nos procurar para desenvolver um site que fosse simples, elegante e objetivo para iniciarmos as vendas e reservas, ou garantir algum investimento empresarial, com o intuito de mostrar os serviços e pacotes de viagens oferecidos pela empresa. Porem futuramente queremos aderir a técnica com Three.JS, com elegancia 3D e interatividade imersiva. \n\nO site foi desenvolvido utilizando React.js, autenticação nativa e servidor na AWS, com um design responsivo e moderno, visando proporcionar uma experiência agradável aos usuários.',
                    imagens: [HeronBespoke1, HeronBespoke2, HeronBespoke3],
                    trailerVideo: true,
                    video: 'https://www.youtube.com/embed/QMzDT8kpvMk',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor Front-End',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        },
                        {
                            id: 2,
                            name: 'Desenvolvedor Back-End',
                            image: PedroFoto,
                            link: 'www.linkedin.com/in/pedro-souza-09375a287'
                        }
                    ]
                },
                {
                    id: 17,
                    nome: 'Spotify Clone - FrontEnd',
                    descricao: 'Foi desenvolvido a interface do Spotify, um software streamer de músicas, analizada a situação, construí uma versão do front-end em HTML5, CSS3 e Javascript...',
                    imagens: [Spotify, Spotify2, Spotify3],
                    trailerVideo: false,
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor FullStack',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        }
                    ]
                },
                {
                    id: 18,
                    nome: 'Chat Bot em Dart',
                    descricao: 'Foi desenvolvido um ChatBot pessoal que atende as suas perguntas pessoais, como o horario atual ou qual dia é hoje, um Bot criado com perguntas locais mas simulando assincronismo para "Informações externas" como banco de dados e APIs, aprendendo como manipular informações assincronas com Future e Stream, streams para manipular o tempo de execução do Bot para nao sobrecarregar, construtores e métodos para a criação da verificação de perguntas, assim fazendo uma estrutura para adicionar mais perguntas conforme os seus critérios...',
                    imagens: [ChatBotDart, ChatBotDart2, ChatBotDart3],
                    trailerVideo: false,
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor FullStack',
                            image: WillFoto,
                            link: 'www.linkedin.com/in/willianchiquinato'
                        }
                    ]
                }
            ],
        }
    },
    props: {
        projetoId: {
            type: Number,
            required: true,
        },
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        projeto() {
            const found = this.modais.find(m => m.id === this.projetoId);
            if (!found) {
                console.warn(`Projeto com id ${this.projetoId} não encontrado!`);
            }

            return found;
        },
        totalSlides() {
            return this.projeto?.imagens?.length || 0;
        },
        currentSlideImage() {
            if (!this.projeto?.imagens?.length) {
                return '';
            }

            return this.projeto.imagens[this.currentSlide] || this.projeto.imagens[0];
        }
    },
    emits: ['close'],
    watch: {
        isOpen(value: boolean) {
            this.internalShow = value;
            if (value) {
                this.currentSlide = 0;
            }
        },
        projetoId() {
            this.currentSlide = 0;
        }
    },
    methods: {
        closeModal() {
            const modal = this.$refs.modal as HTMLElement;
            if (!modal) {
                this.$emit('close');
                return;
            }

            modal.classList.add('fade-out');
            setTimeout(() => {
                this.$emit('close');
                this.internalShow = false;
                modal.classList.remove('fade-out');
            }, 150);
        },
        nextSlide() {
            if (!this.totalSlides) {
                return;
            }

            this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        },
        prevSlide() {
            if (!this.totalSlides) {
                return;
            }

            this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        },
        goToSlide(index: number) {
            this.currentSlide = index;
        },
        handleKeydown(event: KeyboardEvent) {
            if (event.key === 'Escape' && this.internalShow) {
                this.closeModal();
            }
        },
        normalizeLink(link: string) {
            if (!link) return '#';
            return /^https?:\/\//i.test(link) ? link : 'https://' + link;
        }
    },
    mounted() {
        this.internalShow = this.isOpen;
        document.addEventListener('keydown', this.handleKeydown);
    },
    beforeUnmount() {
        document.removeEventListener('keydown', this.handleKeydown);
    }
});
</script>

<style lang="scss">
#fade {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
    z-index: 10000;
}

#fade.show {
    opacity: 1;
    visibility: visible;
}

#modal {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    background: linear-gradient(140deg, #f5fff9 0%, #d8fff4 100%);
    width: min(820px, 94vw);
    max-width: 92%;
    max-height: 90%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem 1.2rem 1.4rem;
    border: solid 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
    border-radius: 1.3rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.5s ease;
    z-index: 10001;

    @media (max-width: 1366px) {
        width: min(760px, 94vw);
        max-height: 85%;
    }

    @media (max-width: 1125px) {
        width: min(680px, 94vw);
        max-height: 85%;
    }

    @media (max-width: 768px) {
        width: 95vw;
        max-width: 95vw;
        max-height: 88vh;
        padding: 0.7rem 0.8rem 1rem;
        border-radius: 1rem;
    }

    @media (max-width: 480px) {
        width: 95vw;
        max-height: 90vh;
        padding: 0.65rem 0.65rem 0.85rem;
        border-radius: 0.8rem;
    }
}

#modal.show {
    opacity: 1;
    visibility: visible;
    animation: fadeInUp 0.25s ease-out forwards;
}

#modal.fade-out {
    animation: fadeOutUp 0.15s ease-out forwards;
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translate(-50%, -60%) scale(0.4);
    }

    100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
}

@keyframes fadeOutUp {
    0% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }

    100% {
        opacity: 0;
        transform: translate(-50%, -60%) scale(0.2);
    }
}

.modal-header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0.6rem;

    .close-button {
        width: 2.5rem;
        height: 2.5rem;
        border: solid 1px rgba(0, 0, 0, 0.2);
        background: rgba(255, 255, 255, 0.85);
        color: #1e2a28;
        font-size: 1.5rem;
        font-weight: 700;
        border-radius: 50%;
        cursor: pointer;
        transition: transform 0.25s ease, background-color 0.25s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        &:hover {
            transform: scale(1.08);
            background: #ffffff;
        }
    }
}

.modal-content {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 0.2rem 0.4rem 0.2rem;
    
    // Ocultar scrollbar mantendo funcionalidade
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 768px) {
        padding: 0;
    }

    .modal-title {
        text-align: center;
        font-size: clamp(1.8rem, 2.3vw, 2.5rem);
        font-weight: 700;
        color: #0f1d1a;
        line-height: 1.2;
        margin: 1.1rem 0 0.8rem;

        @media (max-width: 768px) {
            font-size: clamp(1.5rem, 4vw, 2rem);
            margin: 0.9rem 0 0.7rem;
        }

        @media (max-width: 480px) {
            font-size: clamp(1.2rem, 5vw, 1.8rem);
            margin: 0.75rem 0 0.6rem;
        }
    }

    .modal-subtitle {
        text-align: left;
        font-size: clamp(1.25rem, 1.8vw, 1.6rem);
        color: #0f1d1a;
        margin: 1.2rem 0 0.8rem;
        font-weight: 700;

        @media (max-width: 480px) {
            margin: 1rem 0 0.6rem;
        }
    }

    .videoContent {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 1.2rem;

        iframe {
            width: min(100%, 760px);
            aspect-ratio: 16 / 9;
            height: auto;
            max-height: 62vh;
            border-radius: 0.8rem;
            border: 0;
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);

            @media (max-width: 768px) {
                width: 100%;
                max-height: 42vh;
            }

            @media (max-width: 480px) {
                max-height: none;
                border-radius: 0.5rem;
            }
        }

        @media (max-width: 768px) {
            margin-bottom: 0.8rem;
        }
    }
}


.slider {
    background: #0e1a17;
    border-radius: 0.8rem;
    padding: 0.8rem;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);

    .slider-shell {
        display: grid;
        grid-template-columns: 48px 1fr 48px;
        gap: 0.65rem;
        align-items: center;
    }

    .slider-frame {
        min-height: 320px;
        border-radius: 0.9rem;
        overflow: hidden;
        background: #16231f;
        border: 1px solid rgba(255, 255, 255, 0.12);
    }

    .slider-image {
        width: 100%;
        height: 100%;
        min-height: 310px;
        max-height: 550px;
        object-fit: contain;
        display: block;
    }

    .slider-nav {
        width: 100%;
        height: 3rem;
        border-radius: 0.8rem;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.06);
        color: #e6fff7;
        font-size: 1.25rem;
        cursor: pointer;
        transition: all 0.25s ease;

        &:hover:not(:disabled) {
            background: rgba(255, 255, 255, 0.16);
            transform: translateY(-2px);
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }

    .slider-indicators {
        display: flex;
        justify-content: center;
        gap: 0.55rem;
        margin-top: 0.8rem;
    }

    .indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 0;
        background: rgba(255, 255, 255, 0.35);
        cursor: pointer;
        transition: transform 0.2s ease, background-color 0.2s ease;

        &:hover {
            transform: scale(1.15);
        }

        &.active {
            background: #31f2f2;
            transform: scale(1.15);
        }
    }

    @media (max-width: 768px) {
        padding: 0.55rem;

        .slider-shell {
            grid-template-columns: 42px 1fr 42px;
            gap: 0.4rem;
        }

        .slider-frame,
        .slider-image {
            min-height: 230px;
            max-height: 430px;
        }

        .slider-nav {
            height: 2.6rem;
            border-radius: 0.65rem;
        }
    }

    @media (max-width: 480px) {
        .slider {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .slider-frame,
        .slider-image {
            width: 100%;
            min-height: 150px;
            max-height: 600px;
        }

        .slider-shell {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.2rem;
        }

        .slider-nav {
            display: none;
        }
    }
}

.modal-body {
    word-wrap: break-word;
    font-size: 1.05rem;
    margin-bottom: 10px;
    text-align: left;
    padding: 0.6rem 0.2rem 0;

    @media (max-width: 768px) {
        font-size: 0.95rem;
        padding: 0.45rem 0 0;
        margin-bottom: 8px;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 0.35rem 0 0;
        margin-bottom: 6px;
        text-align: left;
    }

    p {
        color: #1b2724;
        white-space: pre-line;
        line-height: 1.62;
    }
}

.envolvidos-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 768px) {
        justify-content: center;
        gap: 1rem;
    }

    .envolvidos-content {
        width: 220px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.2rem;
        border: solid 1px rgba(0, 0, 0, 0.15);
        background: rgba(255, 255, 255, 0.8);
        border-radius: 0.9rem;
        overflow: hidden;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        transition: transform 0.25s ease, box-shadow 0.25s ease;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.16);
        }

        @media (max-width: 768px) {
            width: 180px;
            margin-bottom: 1.5rem;
        }

        @media (max-width: 480px) {
            width: 160px;
            margin-bottom: 1rem;
        }

        .fotoEnvolvidos {
            width: 100%;
            height: 250px;
            object-fit: cover;
            margin-bottom: 0;
            border-bottom: solid 1px rgba(0, 0, 0, 0.1);

            @media (max-width: 768px) {
                height: 200px;
            }

            @media (max-width: 480px) {
                height: 160px;
            }
        }

        .titulo-envolvidos {
            font-size: clamp(0.8rem, 1vw, 1.3rem);
            font-weight: bold;
            color: #183e38;
            text-align: center;
            margin: 0.65rem 0 0.25rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 0rem 1rem;

            @media (max-width: 480px) {
                font-size: clamp(0.7rem, 1vw, 1rem);
                padding: 0rem 0.5rem;
            }
        }

        .envolvidos-link-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 0.75rem;
            padding: 0 0.7rem;

            @media (max-width: 480px) {
                padding: 0 0.5rem;
                margin-bottom: 0.6rem;
            }

            .envolvidos-link {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: center;
                text-decoration: none;
                font-size: 0.9rem;
                color: #0e675a;
                transition: 0.3s;

                @media (max-width: 480px) {
                    font-size: 0.8rem;
                }

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 0.2s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
}

.video-section {
    margin-top: 0.5rem;
}
</style>