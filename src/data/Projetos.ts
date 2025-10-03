import EnerisPlanet from '@/assets/imagens/EnerisPlanetProject.png';
import Catastroph from '@/assets/imagens/CatastrophProject.png';
import LilithKeysOfPower from '@/assets/imagens/LilithProject.png';
import Folklore from '@/assets/imagens/FolkloreProject.png';
import Qubyte from '@/assets/imagens/QubyteProject.png';
import DiarioDeMartin from '@/assets/imagens/DiarioMartinProject.png';
import EmBreve from '@/assets/imagens/EmBreve.png';
import BlackBrothers from '@/assets/imagens/BlackBro.png';
import SaasMecanica from '@/assets/imagens/Saas Mecanica.png';
import SpotifyFrontEnd from '@/assets/imagens/SpotifyFEProject.png';
import ChatBotDart from '@/assets/imagens/ChatDartProject.png';

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
        descricao: 'Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB, Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB.'
    },
    {
        id: 2,
        name: 'Qubyte - SubstratoStation',
        status: 'Em Desenvolvimento',
        image: Qubyte,
        descricao: 'Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB, Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB.'
    },
    {
        id: 3,
        name: 'FolkLore: Cards Adventures',
        status: 'Em Desenvolvimento',
        image: Folklore,
        descricao: 'Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB, Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB.'
    },
    {
        id: 4,
        name: 'Eneris Planet',
        status: 'Finalizado em 03/11 a 03/12 - 2024',
        image: EnerisPlanet,
        descricao: 'Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB, Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB.'
    },
    {
        id: 5,
        name: 'Catastroph',
        status: 'Finalizado em 2022',
        image: Catastroph,
        descricao: 'Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB, Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB.'
    },
    {
        id: 6,
        name: 'Diario de Martin',
        status: 'Finalizado em 07/2025',
        image: DiarioDeMartin,
        descricao: 'Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB, Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB.'
    },
    {
        id: 7,
        name: 'BullShit',
        status: 'Finalizado em 04/2025',
        image: EmBreve,
        descricao: ''
    },
    {
        id: 8,
        name: 'Dungeon Crashers',
        status: 'Em Breve',
        image: EmBreve,
        descricao: 'Em breve com novas novidades.'
    },
    {
        id: 9,
        name: 'Black Brothers',
        status: 'Em Desenvolvimento',
        image: BlackBrothers,
        descricao: 'Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB, para facilitar o desenvolvimento, usamos a metodologia KANBAN, com reuniões semanais, para garantir a entrega de um produto de qualidade e dentro do prazo estipulado.'
    },
    {
        id: 10,
        name: 'Sistema para mecânica - SaaS',
        status: 'Em Desenvolvimento',
        image: SaasMecanica,
        descricao: 'Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB, Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB.'
    },
    {
        id: 11,
        name: 'Spotify - Front End',
        status: 'Finalizado em Imersão - Alura',
        image: SpotifyFrontEnd,
        descricao: 'Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB, Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB.'
    },
    {
        id: 12,
        name: 'Chat BOT em Dart',
        status: 'Finalizado em 2 meses de 2024',
        image: ChatBotDart,
        descricao: 'Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB, Um aplicativo de uma academia de bairro chamada de “Black Brothers”, Esta sendo desenvolvida em Flutter para os usuários e com o Admin do cliente em React.js na WEB.'
    },
    {
        id: 13,
        name: 'Site Cedihus - Usp Ribeirão Preto',
        status: 'Finalizado em 08/2025',
        image: ChatBotDart,
        descricao: ''
    }
];

export default projetos;
