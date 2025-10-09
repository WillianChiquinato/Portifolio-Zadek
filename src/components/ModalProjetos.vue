<template>
    <teleport to="body">
        <div id="fade" :class="{ show: isOpen }"></div>
        <div id="modal" ref="modal" v-if="internalShow" :class="{ show: isOpen }">
            <div class="modal-header">
                <button class="close-button" @click="closeModal">
                    <img src="../assets/imagens/FecharModal.png" alt="Fechar Modal">
                </button>
            </div>

            <div class="modal-content">
                <div class="slider">
                    <div class="modal-image-slide">
                        <!-- Usando a prop 'projeto' para acessar as imagens -->
                        <input type="radio" name="raio-btn" id="radio1" checked>
                        <input type="radio" name="raio-btn" id="radio2">
                        <input type="radio" name="raio-btn" id="radio3">

                        <div v-for="(image, index) in projeto?.imagens" :key="index"
                            :class="['slider-box-image', { primeiroSlide: index === 0 }]">
                            <img :src="image" alt="Imagem do Modal" />
                        </div>

                        <div class="navigationAuto">
                            <div v-for="(image, index) in projeto?.imagens" :key="index"
                                :class="`auto-btn${index + 1}`">
                            </div>
                        </div>

                        <div class="navigationManual">
                            <label v-for="(image, index) in projeto?.imagens" :key="index" :for="`radio${index + 1}`"
                                class="manual-btn"></label>
                        </div>
                    </div>
                </div>

                <!-- Usando a prop 'projeto' para acessar as informações -->
                <h2 class="modal-title">{{ projeto?.nome }}</h2>

                <div class="modal-body">
                    <p>{{ projeto?.descricao }}</p>
                </div>

                <div v-if="projeto?.trailerVideo">
                    <h2 class="modal-title">Video Trailer</h2>
                    <div class="videoContent">
                        <!-- Acessando a URL do vídeo do projeto -->
                        <iframe :src="projeto?.video" title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>

                <h2 class="modal-title">Envolvidos no projeto</h2>
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

// Fotos pessoais.
import WillFoto from '@/assets/imagens/persons/Will-Fotos.jpeg';
import RenanFoto from '@/assets/imagens/persons/RenanFoto.jpg';
import GustavoValaFoto from '@/assets/imagens/persons/GustavoVaFoto.jpg';
import JuanFoto from '@/assets/imagens/persons/JuanFoto.jpg';
import VitorFoto from '@/assets/imagens/persons/VitorVentFoto.jpg';
import EnzoFoto from '@/assets/imagens/persons/EnzoFoto.jpg';
import LucasFoto from '@/assets/imagens/persons/LucasFoto.jpg';
import SantosTech from '@/assets/imagens/persons/SantosTech.png';

export default defineComponent({
    data() {
        return {
            internalShow: false,
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
                    descricao: 'Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    trailerVideo: true,
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
                            name: 'Artista 2D, Animador e Game Designer',
                            image: EnzoFoto,
                            link: 'https://www.artstation.com/enzolonghi'
                        }
                    ]
                },
                {
                    id: 2,
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
                            name: 'Modelagem 3D e Designer Gráfico',
                            image: LucasFoto,
                            link: 'https://www.linkedin.com/in/lsantiagoc'
                        }
                    ]
                },
                {
                    id: 3,
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
                    id: 4,
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
                    id: 5,
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
                    id: 6,
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
                    id: 7,
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
                    id: 8,
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
                    id: 9,
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
                    id: 10,
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
                    id: 11,
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
                    id: 12,
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
                },
                {
                    id: 13,
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
    },
    emits: ['close'],
    methods: {
        closeModal() {
            const modal = this.$refs.modal as HTMLElement;
            modal.classList.add('fade-out');
            setTimeout(() => {
                this.$emit('close');
                this.internalShow = false;
                modal.classList.remove('fade-out');
            }, 150);
        },
        changeSlide(index: number) {
            const slides = document.querySelectorAll('.slider-box-image');
            slides.forEach((slide, i) => {
                slide.classList.toggle('primeiroImagem', i === index);
            });
        },
        normalizeLink(link: string) {
            if (!link) return '#';
            // se já tem http/https, retorna; se não, adiciona https://
            return /^https?:\/\//i.test(link) ? link : 'https://' + link;
        }
    },
    mounted() {
        this.internalShow = this.isOpen;
        setInterval(() => {
            console.log('Teste ', this.internalShow ? 'aberto' : 'fechado');
            console.log('Modal ', this.isOpen ? 'aberto' : 'fechado');
        }, 1000);
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
    opacity: 0.6;
    visibility: visible;
}

#modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #AFEFEF;
    width: 700px;
    height: 800px;
    max-width: 35%;
    max-height: 90%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 12px 20px;
    border: solid 2px #000000;
    border-radius: 1.3rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.5s ease;
    z-index: 10001;

    @media (max-width: 1366px) {
        max-width: 40%;
        max-height: 85%;
    }

    @media (max-width: 1125px) {
        max-width: 50%;
        max-height: 85%;
    }

    @media (max-width: 768px) {
        max-width: 80%;
        max-height: 80%;
        width: 95vw;
        height: 90vh;
        padding: 8px 12px;
        border-radius: 1rem;
        top: 50%;
        left: 50%;
    }

    @media (max-width: 480px) {
        max-width: 85%;
        max-height: 84%;
        width: 95vw;
        height: 95vh;
        padding: 6px 10px;
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
    justify-content: space-between;
    align-items: center;

    .close-button {
        position: absolute;
        top: -1rem;
        left: -1rem;
        background-color: #AFEFEF;
        text-decoration: none;
        color: aliceblue;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s;

        @media (max-width: 768px) {
            top: -1rem;
            left: -0.8rem;
        }

        @media (max-width: 480px) {
            top: -0.6rem;
            left: -0.6rem;
        }

        &:hover {
            scale: 1.1;
        }
    }

    img {
        width: 60px;
        height: 60px;
        cursor: pointer;

        @media (max-width: 768px) {
            width: 50px;
            height: 50px;
        }

        @media (max-width: 480px) {
            width: 40px;
            height: 40px;
        }
    }
}

.modal-content {
    width: 100%;
    height: 88%;
    overflow-y: auto;

    @media (max-width: 768px) {
        height: 90%;
    }

    .modal-title {
        text-align: center;
        font-size: clamp(2rem, 2.3vw, 2.7rem);
        font-weight: bold;
        color: var(--color-preto);
        margin: 1.3rem 0rem;

        @media (max-width: 768px) {
            font-size: clamp(1.5rem, 4vw, 2rem);
            margin: 1rem 0rem;
        }

        @media (max-width: 480px) {
            font-size: clamp(1.2rem, 5vw, 1.8rem);
            margin: 0.8rem 0rem;
        }
    }

    .videoContent {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        iframe {
            width: 95%;
            height: 260px;
            border-radius: 0.6rem;
            margin-bottom: 1.5rem;

            @media (max-width: 768px) {
                width: 100%;
                height: 200px;
                margin-bottom: 1rem;
            }

            @media (max-width: 480px) {
                height: 180px;
                border-radius: 0.4rem;
            }
        }
    }
}

.modal-content::-webkit-scrollbar {
    display: none;
}

/* Css do slide carrossel */
.slider {
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    padding: 0 !important;
    border-bottom: solid 2px #000000;
    overflow: hidden;

    @media (max-width: 768px) {
        border-bottom-width: 1.5px;
    }

    @media (max-width: 480px) {
        border-bottom-width: 1px;
    }
}

.modal-image-slide {
    display: flex;
    width: 400%;
    height: auto;
    position: relative;
    padding-bottom: 40px;
}

.modal-image-slide input {
    display: none;
}

.slider-box-image {
    width: 25%;
    height: auto;
    position: relative;
    text-align: center;
    transition: 0.7s;
}

.slider-box-image img {
    width: 95%;
    height: 260px;
    object-fit: cover;
    border-radius: 0.5rem;
    display: block;
    margin: 0 auto;

    @media (max-width: 768px) {
        height: 200px;
        width: 98%;
    }

    @media (max-width: 480px) {
        height: 160px;
        width: 100%;
    }
}

.navigationManual,
.navigationAuto {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 25%;
    bottom: 13px;
    padding-top: 20px;

    @media (max-width: 768px) {
        bottom: 8px;
        padding-top: 15px;
    }

    @media (max-width: 480px) {
        bottom: 5px;
        padding-top: 10px;
    }
}

.navigationManual .manual-btn,
.navigationAuto div {
    border: 2px solid #191a1f;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.5s;

    @media (max-width: 768px) {
        padding: 6px;
        border-width: 1.5px;
    }

    @media (max-width: 480px) {
        padding: 5px;
        border-width: 1px;
    }
}

/* Todos com o filtro menos o ultimo "Filho" */
.navigationManual .manual-btn:not(:last-child),
.navigationAuto div:not(:last-child) {
    margin-right: 10px;

    @media (max-width: 480px) {
        margin-right: 8px;
    }
}

.navigationManual .manual-btn:hover {
    background-color: #191a1f;
}

#radio1:checked~.navigationAuto .auto-btn1 {
    background-color: #191a1f;
}

#radio1:checked~.primeiroSlide {
    margin-left: 0%;
}

#radio2:checked~.navigationAuto .auto-btn2 {
    background-color: #191a1f;
}

#radio2:checked~.primeiroSlide {
    margin-left: -25%;
}

#radio3:checked~.navigationAuto .auto-btn3 {
    background-color: #191a1f;
}

#radio3:checked~.primeiroSlide {
    margin-left: -50%;
}

.modal-body {
    word-wrap: break-word;
    font-size: 20px;
    margin-bottom: 10px;
    text-align: justify;
    padding: 10px 25px 0 25px;

    @media (max-width: 768px) {
        font-size: 16px;
        padding: 8px 15px 0 15px;
        margin-bottom: 8px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        padding: 6px 10px 0 10px;
        margin-bottom: 6px;
        text-align: left;
    }

    p {
        color: var(--color-preto);
        white-space: pre-line;
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
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        border: solid 2px #3a3a3a;
        background-color: var(--color-preto);

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
            margin-bottom: 5px;
            border-bottom: solid 2px #3a3a3a;

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
            color: var(--color-primaria);
            text-align: center;
            margin-bottom: 5px;
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
            margin-bottom: 15px;
            padding: 0 0.7rem;

            @media (max-width: 480px) {
                padding: 0 0.5rem;
                margin-bottom: 10px;
            }

            .envolvidos-link {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: center;
                text-decoration: none;
                font-size: 0.9rem;
                text-align: center;
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
</style>