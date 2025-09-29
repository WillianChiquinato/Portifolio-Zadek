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
                            <a :href="envolvido.link" class="envolvidos-link" target="_blank">{{ envolvido.link }}</a>
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

export default defineComponent({
    data() {
        return {
            internalShow: false,
            envolvidos: [
                {
                    id: 1,
                    Name: 'Desenvolvedor do ChatBot em Dart',
                    image: 'ChatBot Dart',
                    link: 'https://www.youtube.com/?themeRefresh=1'
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
                            id: 2,
                            name: 'Designer Gráfico',
                            image: fotoTestePreta,
                            link: 'https://www.behance.net/'
                        }
                    ]
                },
                {
                    id: 2,
                    nome: 'Qubyte - Substrato Station',
                    descricao: 'Portifólio desenvolvido em Vue.js, com o objetivo de apresentar meus projetos e habilidades.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    trailerVideo: true,
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor do ChatBot em Dart',
                            image: fotoTestePreta,
                            link: 'https://www.youtube.com/?themeRefresh=1'
                        },
                        {
                            id: 2,
                            name: 'Designer Gráfico',
                            image: fotoTestePreta,
                            link: 'https://www.behance.net/'
                        }
                    ]
                },
                {
                    id: 3,
                    nome: 'Folklore: Cards Adventures',
                    descricao: 'Descrição do Projeto X.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    trailerVideo: true,
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor do ChatBot em Dart',
                            image: fotoTestePreta,
                            link: 'https://www.youtube.com/?themeRefresh=1'
                        },
                        {
                            id: 2,
                            name: 'Designer Gráfico',
                            image: fotoTestePreta,
                            link: 'https://www.behance.net/'
                        }
                    ]
                },
                {
                    id: 4,
                    nome: 'Eneris Planet - Global Solution 2024',
                    descricao: 'Descrição do Projeto Y.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    trailerVideo: true,
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor do ChatBot em Dart',
                            image: fotoTestePreta,
                            link: 'https://www.youtube.com/?themeRefresh=1'
                        },
                        {
                            id: 2,
                            name: 'Designer Gráfico',
                            image: fotoTestePreta,
                            link: 'https://www.behance.net/'
                        }
                    ]
                },
                {
                    id: 5,
                    nome: 'Catastroph - TCC 2022',
                    descricao: 'Descrição do Projeto Z.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    trailerVideo: true,
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor do ChatBot em Dart',
                            image: fotoTestePreta,
                            link: 'https://www.youtube.com/?themeRefresh=1'
                        },
                        {
                            id: 2,
                            name: 'Designer Gráfico',
                            image: fotoTestePreta,
                            link: 'https://www.behance.net/'
                        }
                    ]
                },
                {
                    id: 6,
                    nome: 'Diário de Martin',
                    descricao: 'Descrição do Projeto A.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    trailerVideo: true,
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor do ChatBot em Dart',
                            image: fotoTestePreta,
                            link: 'https://www.youtube.com/?themeRefresh=1'
                        },
                        {
                            id: 2,
                            name: 'Designer Gráfico',
                            image: fotoTestePreta,
                            link: 'https://www.behance.net/'
                        }
                    ]
                },
                {
                    id: 7,
                    nome: 'Dungeous Crashers',
                    descricao: 'Descrição do Projeto B.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    trailerVideo: false,
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor do ChatBot em Dart',
                            image: fotoTestePreta,
                            link: 'https://www.youtube.com/?themeRefresh=1'
                        },
                        {
                            id: 2,
                            name: 'Designer Gráfico',
                            image: fotoTestePreta,
                            link: 'https://www.behance.net/'
                        }
                    ]
                },
                {
                    id: 8,
                    nome: 'Black Brothers',
                    descricao: 'Descrição do Projeto C.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    trailerVideo: true,
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidos: [
                        {
                            id: 2,
                            name: 'Designer Gráfico',
                            image: fotoTestePreta,
                            link: 'https://www.behance.net/'
                        }
                    ]
                },
                {
                    id: 9,
                    nome: 'Saas - Sistema interno Mecânica',
                    descricao: 'Descrição do Projeto D.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    trailerVideo: true,
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor do ChatBot em Dart',
                            image: fotoTestePreta,
                            link: 'https://www.youtube.com/?themeRefresh=1'
                        }
                    ]
                },
                {
                    id: 10,
                    nome: 'Spotify Clone - FrontEnd',
                    descricao: 'Descrição do Projeto E.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    trailerVideo: false,
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor do ChatBot em Dart',
                            image: fotoTestePreta,
                            link: 'https://www.youtube.com/?themeRefresh=1'
                        },
                        {
                            id: 2,
                            name: 'Designer Gráfico',
                            image: fotoTestePreta,
                            link: 'https://www.behance.net/'
                        }
                    ]
                },
                {
                    id: 11,
                    nome: 'Chat Bot em Dart',
                    descricao: 'Descrição do Projeto F.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    trailerVideo: true,
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidos: [
                        {
                            id: 1,
                            name: 'Desenvolvedor do ChatBot em Dart',
                            image: fotoTestePreta,
                            link: 'https://www.youtube.com/?themeRefresh=1'
                        },
                        {
                            id: 2,
                            name: 'Designer Gráfico',
                            image: fotoTestePreta,
                            link: 'https://www.behance.net/'
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
    max-height: 85%;
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
        max-height: 82%;
    }

    @media (max-width: 1125px) {
        max-width: 50%;
        max-height: 85%;
    }

    @media (max-width: 768px) {
        max-width: 90%;
        max-height: 80%;
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

        &:hover {
            scale: 1.1;
        }
    }

    img {
        width: 60px;
        height: 60px;
        cursor: pointer;
    }
}

.modal-content {
    width: 100%;
    height: 88%;
    overflow-y: auto;

    .modal-title {
        text-align: center;
        font-size: clamp(2rem, 2.3vw, 2.7rem);
        font-weight: bold;
        color: var(--color-preto);
        margin: 1.3rem 0rem;
    }

    .videoContent {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        iframe {
            width: 80%;
            height: 295px;
            border-radius: 1rem;
            margin-bottom: 1.3rem;
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
    width: 90%;
    border-radius: 1rem;
}

.navigationManual,
.navigationAuto {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 25%;
    bottom: 13px;
    padding-top: 20px;
}

.navigationManual .manual-btn,
.navigationAuto div {
    border: 2px solid #191a1f;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.5s;
}

/* Todos com o filtro menos o ultimo "Filho" */
.navigationManual .manual-btn:not(:last-child),
.navigationAuto div:not(:last-child) {
    margin-right: 10px;
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

    p {
        color: var(--color-preto);
    }

    &::before {
        content: '';
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60px;
        background: linear-gradient(transparent, #AFEFEF);
    }
}

.envolvidos-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    .envolvidos-content {
        width: 220px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        border: solid 2px #3a3a3a;
        background-color: var(--color-preto);

        .fotoEnvolvidos {
            height: 250px;
            margin-bottom: 5px;
            border-bottom: solid 1px #3a3a3a;
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
        }

        .envolvidos-link-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 15px;
            padding: 0 0.7rem;

            .envolvidos-link {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: center;
                text-decoration: none;
                font-size: 0.9rem;
                text-align: center;
                transition: 0.3s;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>