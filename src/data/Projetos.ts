import EnerisPlanet from '@/assets/imagens/EnerisPlanetProject.png';
import Catastroph from '@/assets/imagens/CatastrophProject.png';
import LilithKeysOfPower from '@/assets/imagens/LilithProject.png';
import Folklore from '@/assets/imagens/FolkloreProject.png';
import VarzePlay from '@/assets/imagens/VarzeaPlayProject.png';
import Qubyte from '@/assets/imagens/QubyteProject.png';
import DiarioDeMartin from '@/assets/imagens/DiarioMartinProject.png';
import EmBreve from '@/assets/imagens/EmBreve.png';
import BlackBrothers from '@/assets/imagens/BlackBro.png';
import SaasMecanica from '@/assets/imagens/Saas Mecanica.png';
import SpotifyFrontEnd from '@/assets/imagens/SpotifyFEProject.png';
import ChatBotDart from '@/assets/imagens/ChatDartProject.png';
import BullShit from '@/assets/imagens/BullShit.png';
import SiteCedihus from '@/assets/imagens/CedihusCapa.png';
import HeronBespoke from '@/assets/imagens/HeronBespoke.jpeg';
import SantosTech from '@/assets/imagens/SantosTechProject.png';
import CasaDaBatian from '@/assets/imagens/CasaDaBatianProject.png';

interface Projeto {
    id: number;
    name: string;
    status: string;
    image: string;
    descricao: string;
}

const projetos: Projeto[] = [
    {
        id: 1,
        name: 'Lilith: Keys of Power',
        status: 'Em Desenvolvimento',
        image: LilithKeysOfPower,
        descricao: 'A história se desenrola em um vasto império contruído dentro de uma montanha. O jogador acompanha Lilith, uma jovem determinada a derrubar o regime opressor após seu pai ser capturado. \n\nPara alcançar seu objetivo, ela se une a revolucionários e rebeldes, enfrentando desafios e descobrindo os segredos ocultos nas profundezas do império. \n\nCom estilo Pixel Art 2D, altamente detalhado e mecânicas de exploração inovadoras, este MetroidVania entrega uma jornada épica repleta de ação, mistério e reviravoltas...'
    },
    {
        id: 2,
        name: 'FolkLore: Cards Adventures',
        status: 'Em Desenvolvimento',
        image: Folklore,
        descricao: '"FolkLore: Cards Adventures" é um projeto desenvolvido com o objetivo de difundir a cultura brasileira e explorar a riqueza do nosso Folclore. O jogo esta sendo criado com apoio do Estado de São Paulo por meio da Lei Paulo Gustavo e encontra-se atualmente em fase de desenvolvimento. \n\nO jogador embarca em uma jornada para ajudar criaturas folclóricas e proteger a natureza, coletando cartas mágicas que concedem novas habilidades e poderes. \nOs cenários São inspirados na Floresta Amazônica e em outro ambientes tipicamente brasileiros, proporcionando uma experiência imersiva e educativa. \n\nO jogo é desenvolvido na Unity3D com C# e utiliza mecânicas de RPG, exploração e coleta de cartas, incentivando os jogadores a aprenderem sobre o folclore brasileiro enquanto se divertem. \n\nA proposta é alcançar o publico-alvo de crianças e adolescentes, aproximando-os das histórias e lendas do nosso país, promovendo a valorização da cultura nacional.'
    },
    {
        id: 3,
        name: 'Roblox: Varzea Play',
        status: 'Em Desenvolvimento',
        image: VarzePlay,
        descricao: 'Varzea Play é um jogo divertido focado no publico alvo de crianças e adolescentes, inspirado nas regiões e comunidades de ribeirão preto. \n\nO jogo é desenvolvido na plataforma Roblox, utilizando a linguagem de programação Lua, e oferece uma experiência imersiva e interativa. \n\nOs jogadores podem explorar varios mapas de desafios em gols espalhados no mapa, no centro da região, um sistema complexo de pontos para troca de skins e recuperação de vida, assim gerando grande impacto e ciclo de vida maior.'
    },
    {
        id: 4,
        name: 'Qubyte - SubstratoStation',
        status: 'Evento NEXT 2025 (1º lugar)',
        image: Qubyte,
        descricao: 'O Substrato Station é um jogo 3D multiplayer, low poly, desenvolvido na Unity3D com C#. Ele propõe uma experiência cooperativa de puzzles no qual os jogadores precisam trabalhar juntos para superar desafios. \n\nApós um desastre natural, o prédio de uma empresa privada de pesquisas químicas desabou. Os 18 andares superiores colapsaram, deixando apenas os 4 andares subterrâneos intactos. Presos nesse subsolo, os poucos funcionários sobreviventes descobrem que os experimentos com animais genéticos foram liberados — agora hostis, inteligentes e alterados. Os jogadores assumem o papel desses funcionários. Sem comunicação com o mundo exterior, precisam resolver puzzles, sobreviver a emboscadas, e cooperar para escapar. O objetivo dos jogadores é subirem os 4 andares do subsolo e escaparem da empresa demolida, os jogadores começam no último andar e cada andar tem um puzzle para resolver.'
    },
    {
        id: 5,
        name: 'Eneris Planet',
        status: 'Finalizado em 03/11 a 03/12 - 2024',
        image: EnerisPlanet,
        descricao: 'Diante de um desafio da FIAP - Global Solution, para energia sustentável, desenvolvemos o ENERIS PLANET, um jogo 2D side scrolling que conscientiza e explica indiretamente sobre a energia geotérmica, desenvolvido 1 fase inteira com um tempo estimado de 10 dias até o final do desafio... Em um planeta vizinho de Saturno, Eneris é um planeta cujo sua principal mão de obra e dificuldade é a  energia, o planeta inteiro é feito para a energia e seu núcleo, a matriz do planeta é reabastecida manualmente pela população e empregados nas empresas de energia geotermicas. Com isso temos o Zadek, um homem de 25 anos, recém saído da fase de estudos, foi aprovado na PSN (Projetos de soluções nucleotecnicas) e terá o dia a dia demonstrado no jogo, Eneris terá desafios, inimigos feito de carbono e líquido amarelo escuro que sujam o ambiente aonde passam e não deixam Zadek trabalhar, chamados de Rek"Tech, Zadek terá que fazer a manutenção do maquinário TVB (Totens de Vapor binário) contendo o liquido "Novair" com ponto de ebulição para acionar a turbinas geotermicas em pontos específicos no mapa, os totens se sobrecarregam quando não faz a manutenção ou não consegue por conta os Rek"Techs, seu objetivo em cada mapa é deixar o Nucleo "Novan" do planeta Eneris ativado, pois ele se esfria a cada momento que não tem retorno de energia, conseguindo ativar todos os totens ao mesmo tempo, os inimigos serão destruidos e Zadek terá seu dia feito.'
    },
    {
        id: 6,
        name: 'Catastroph',
        status: 'Finalizado em 2022',
        image: Catastroph,
        descricao: '"Catastroph", Um jogo 2d no estilo metroidvania, baseado em Hollow Knight, BloodBorne e Elden Ring. O jogo foi criado com um propósito de conscientizar e divertir o consumidor a partir de uma história baseado em romance epistolar e Souls Like, a narrativa do jogo narra a história de Luara em uma cidade de pescadores que adoram a Lua como uma deusa, a cidade passa por momentos difíceis desde o desaparecimento do sol e da lua nos céus, como consequência do uso indevido da magia proporcionada pelos dois astros. O jogador controlará o gato Astroph, um determinado herói que busca encontrar a sua amiga Beth, para isso o jogador passará por diversos desafios dentro da cidade de Luara. Por conta do desaparecimento do Astro Rei e do Satélite da Terra, a pesca, atividade chave na economia e sustento de Luara, os pescadores locais usaram de uma magia proibida para atrair os peixes, mas essa magia acaba tendo um efeito colateral que transformava as pessoas que consumiam os peixes em animais marinhos aos poucos, criando assim aberrações de humanos amalgamados com peixes, águas-vivas, lagostas etc. A infecção também se alastrou para outros tipos de formas de vidas além dos humanos, os peixes infectados foram consumidos por outros peixes maiores e até mesmo por gaivotas, contaminado assim todo o eco sistema.'
    },
    {
        id: 7,
        name: 'Diario de Martin',
        status: 'Finalizado em 07/2025',
        image: DiarioDeMartin,
        descricao: 'Martin Dastmal, de 14 anos, estuda no ensino fundamental da universidade de JackVille e passa grande parte do tempo na biblioteca com seus amigos Douglas e Vitor. No dia de seu aniversário de 15 anos, tudo dá errado: enfrenta uma prova difícil, vê Douglas sendo intimidado por valentões, sofre bullying, tira uma nota baixa e acaba humilhado em uma partida de vôlei diante de colegas mais velhos. \n\nAbalado, Martin foge para o banheiro, onde chora sozinho até ouvir um estranho sussurro. De repente, desmaia e, ao despertar, descobre que está em uma universidade vazia, escura e silenciosa, com apenas a voz misteriosa tentando se comunicar com ele'
    },
    {
        id: 8,
        name: 'BullShit',
        status: 'Finalizado em 04/2025',
        image: BullShit,
        descricao: 'Um jogo feito para duas pessoas localmente, com tela dividida, onde é possível derrotar o inimigo atirando nele, porém com uma IA te observando, a cada 10 segundos se um dos dois se mexerem, serão eliminados.'
    },
    {
        id: 9,
        name: 'Chama Espiral',
        status: 'Em Breve',
        image: EmBreve,
        descricao: 'Ainda esta em desenvolvimento...'
    },
    {
        id: 10,
        name: 'Dungeon Crashers',
        status: 'Em Breve',
        image: EmBreve,
        descricao: 'Ainda esta em desenvolvimento...'
    },
    {
        id: 11,
        name: 'Portal Santos Tech',
        status: 'Em Desenvolvimento',
        image: SantosTech,
        descricao: 'O Portal Santos Tech contem toda a parte de participação, exercicios, cursos, turmas relacionadas, modulos dos seus cursos e muito mais. \nÉ uma plataforma web feita para os alunos da Santos Tech, onde eles podem acessar seus cursos, materiais, participar de desafios mensais e finais de modulo, ganhos de pontos e interagir com outros alunos. O portal é desenvolvido utilizando Vue.js para a interface do usuário, .NETpara o backend e PostgreSQL para o banco de dados. \nEle oferece uma experiência personalizada para cada aluno, permitindo que eles acompanhem seu progresso, acessem recursos exclusivos e se conectem com a comunidade de aprendizado da Santos Tech. \nFuturamente a escola Santos Tech querem integrar um E-Commerce para utilizar seus pontos em ganhos reais como produtos e vouchers... \nSegue video abaixo, dados apenas de homologação.'
    },
    {
        id: 12,
        name: 'Black Brothers',
        status: 'Finalizado e Aguardando Lançamento',
        image: BlackBrothers,
        descricao: 'Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB, para facilitar o desenvolvimento, usamos a metodologia KANBAN, com reuniões semanais, para garantir a entrega de um produto de qualidade e dentro do prazo estipulado.'
    },
    {
        id: 13,
        name: 'Sistema para mecânica - SaaS',
        status: 'Finalizado em 10/2025',
        image: SaasMecanica,
        descricao: 'A equipe e um dos sócios da mecânica me procuraram no início do ano com o objetivo de modernizar o sistema interno. Eles queriam uma solução que substituísse as planilhas de Excel, oferecendo uma interface mais amigável, visualmente atraente e dinâmica. No entanto, o Excel ainda precisa ser mantido como uma opção para reuniões mensais e geração de relatórios. Para atender essa demanda, implementarei uma home page com filtros de mês e ano, permitindo que o sistema fosse dividido em períodos, evitando sobrecarregar o carregamento assíncrono. O sistema interno está sendo projetado para: \n\n- Gerenciamento de veículos: cadastro de carros finalizados, acompanhamento de “retrabalhos” (carros que retornam na mesma semana), categorizados como particulares ou seguradoras. \n- Gestão de funcionários: inclusão e exclusão de colaboradores, com funcionalidades adicionais, como controle de vale PIX e convênios. \n- Cadastro de despesas: formulário descritivo para registrar despesas com tipos como equipamentos e contas. \n- Indicadores visuais: dashboards com indicadores em circle progress, ajustáveis para diferentes métricas, além do cálculo do ticket médio (dividido em três etapas para o mês e o total). \n- Relatórios e exportações: uma funcionalidade de "Extract" que permite extrair os dados do sistema diretamente para uma planilha Excel (mensal), de forma rápida e dinâmica. Todas as informações do sistema estão organizadas e divididas em faturamento e despesas, permitindo uma visão clara e prática do desempenho geral da mecânica.'
    },
    {
        id: 14,
        name: 'Casa da Batian - Landing Page',
        status: 'Finalizado em 12/2025',
        image: CasaDaBatian,
        descricao: 'A Casa da Batian é um restaurante japones, é uma instituição com venda de produtos artesanais e japoneses e restaurante comida japonesa, o cliente queria uma landing page para divulgar seus serviços e produtos, com um design moderno e elegante, focando na experiência do usuário e na apresentação visual dos pratos e produtos oferecidos. \n\nA landing page foi desenvolvida utilizando Vue.js, com um design responsivo e otimizado para dispositivos móveis, visando proporcionar uma experiência agradável aos usuários e destacar a qualidade dos serviços e produtos da Casa da Batian.'
    },
    {
        id: 15,
        name: 'Site Cedihus - Usp Ribeirão Preto',
        status: 'Finalizado em 08/2025',
        image: SiteCedihus,
        descricao: 'Foi desenvolvido um site para o Cedihus - USP, com o objetivo de fornecer informações sobre o centro de estudos e suas atividades. O site foi construído utilizando Wordpress, com um design responsivo e intuitivo, visando facilitar o acesso às informações pelos usuários e focando na acessibilidade e organizar dos materiais da OMS. \n\nO cliente queria um blog porem com a quantidade de informações nao poderia ser totalmente possivel essa ideia, entao fiz uma aba a parte sobre esse tópico.'
    },
    {
        id: 16,
        name: 'Heron Bespoke',
        status: 'Descontinuado',
        image: HeronBespoke,
        descricao: 'Uma equipe de viagens de Londres veio nos procurar para desenvolver um site que fosse simples, elegante e objetivo para iniciarmos as vendas e reservas, ou garantir algum investimento empresarial, com o intuito de mostrar os serviços e pacotes de viagens oferecidos pela empresa. Porem futuramente queremos aderir a técnica com Three.JS, com elegancia 3D e interatividade imersiva. \n\nO site foi desenvolvido utilizando React.js, autenticação nativa e servidor na AWS, com um design responsivo e moderno, visando proporcionar uma experiência agradável aos usuários.'
    },
    {
        id: 17,
        name: 'Spotify - Front End',
        status: 'Finalizado em Imersão - Alura',
        image: SpotifyFrontEnd,
        descricao: 'Foi desenvolvido a interface do Spotify, um software streamer de músicas, analizada a situação, construí uma versão do front-end em HTML5, CSS3 e Javascript...'
    },
    {
        id: 18,
        name: 'Chat BOT em Dart',
        status: 'Finalizado em 2 meses de 2024',
        image: ChatBotDart,
        descricao: 'Foi desenvolvido um ChatBot pessoal que atende as suas perguntas pessoais, como o horario atual ou qual dia é hoje, um Bot criado com perguntas locais mas simulando assincronismo para "Informações externas" como banco de dados e APIs, aprendendo como manipular informações assincronas com Future e Stream, streams para manipular o tempo de execução do Bot para nao sobrecarregar, construtores e métodos para a criação da verificação de perguntas, assim fazendo uma estrutura para adicionar mais perguntas conforme os seus critérios...'
    },
];

export default projetos;
