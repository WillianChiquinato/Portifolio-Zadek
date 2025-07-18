<template>
    <div id="fade" :class="{ hide: !isOpen }"></div>
    <div id="modal" :class="{ hide: !isOpen }">
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
                        <div v-for="(image, index) in projeto?.imagens" :key="index" :class="`auto-btn${index + 1}`">
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

            <h2 class="modal-title">Video Trailer</h2>
            <div class="videoContent">
                <!-- Acessando a URL do vídeo do projeto -->
                <iframe :src="projeto?.video" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>

            <h2 class="modal-title">Envolvidos no projeto</h2>
            <div class="envolvidos-container">
                <div class="envolvidos-content">
                    <img :src="projeto?.envolvidosImage" alt="Envolvido" class="fotoEnvolvidos">
                    <h4 class="titulo-envolvidos">{{ projeto?.envolvidosName }}</h4>
                    <div class="envolvidos-link-container">
                        <a :href="projeto?.envolvidosLink" class="envolvidos-link" target="_blank">{{
                            projeto?.envolvidosLink }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import fotoTestePreta from '@/assets/imagens/FundoPreto.png';

interface Modal {
    id: number;
    nome: string;
    descricao: string;
    imagens: string[];
    video: string;
    envolvidosImage: string;
    envolvidosName: string;
    envolvidosLink: string;
}

export default defineComponent({
    data() {
        return {
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
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidosImage: fotoTestePreta,
                    envolvidosName: 'ChatBot Dart',
                    envolvidosLink: 'https://www.youtube.com/?themeRefresh=1'
                },
                {
                    id: 2,
                    nome: 'Portifólio Zadek',
                    descricao: 'Portifólio desenvolvido em Vue.js, com o objetivo de apresentar meus projetos e habilidades.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidosImage: fotoTestePreta,
                    envolvidosName: 'ChatBot Dart',
                    envolvidosLink: 'https://www.youtube.com/?themeRefresh=1'
                },
                {
                    id: 3,
                    nome: 'Projeto X',
                    descricao: 'Descrição do Projeto X.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidosImage: fotoTestePreta,
                    envolvidosName: 'ChatBot Dart',
                    envolvidosLink: 'https://www.youtube.com/?themeRefresh=1'
                },
                {
                    id: 4,
                    nome: 'Projeto Y',
                    descricao: 'Descrição do Projeto Y.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidosImage: fotoTestePreta,
                    envolvidosName: 'ChatBot Dart',
                    envolvidosLink: 'https://www.youtube.com/?themeRefresh=1'
                },
                {
                    id: 5,
                    nome: 'Projeto Z',
                    descricao: 'Descrição do Projeto Z.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidosImage: fotoTestePreta,
                    envolvidosName: 'ChatBot Dart',
                    envolvidosLink: 'https://www.youtube.com/?themeRefresh=1'
                },
                {
                    id: 6,
                    nome: 'Projeto A',
                    descricao: 'Descrição do Projeto A.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidosImage: fotoTestePreta,
                    envolvidosName: 'ChatBot Dart',
                    envolvidosLink: 'https://www.youtube.com/?themeRefresh=1'
                },
                {
                    id: 7,
                    nome: 'Projeto B',
                    descricao: 'Descrição do Projeto B.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidosImage: fotoTestePreta,
                    envolvidosName: 'ChatBot Dart',
                    envolvidosLink: 'https://www.youtube.com/?themeRefresh=1'
                },
                {
                    id: 8,
                    nome: 'Projeto C',
                    descricao: 'Descrição do Projeto C.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidosImage: fotoTestePreta,
                    envolvidosName: 'ChatBot Dart',
                    envolvidosLink: 'https://www.youtube.com/?themeRefresh=1'
                },
                {
                    id: 9,
                    nome: 'Projeto D',
                    descricao: 'Descrição do Projeto D.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidosImage: fotoTestePreta,
                    envolvidosName: 'ChatBot Dart',
                    envolvidosLink: 'https://www.youtube.com/?themeRefresh=1'
                },
                {
                    id: 10,
                    nome: 'Projeto E',
                    descricao: 'Descrição do Projeto E.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidosImage: fotoTestePreta,
                    envolvidosName: 'ChatBot Dart',
                    envolvidosLink: 'https://www.youtube.com/?themeRefresh=1'
                },
                {
                    id: 11,
                    nome: 'Projeto F',
                    descricao: 'Descrição do Projeto F.',
                    imagens: [fotoTestePreta, fotoTestePreta, fotoTestePreta],
                    video: 'https://www.youtube.com/embed/iO_2BRpctj0',
                    envolvidosImage: fotoTestePreta,
                    envolvidosName: 'ChatBot Dart',
                    envolvidosLink: 'https://www.youtube.com/?themeRefresh=1'
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
        navegacaoAutomatica() {
            const radios = document.querySelectorAll('.navigationAuto div');
            radios.forEach((radio, index) => {
                radio.addEventListener('click', () => {
                    this.changeSlide(index);
                });
            });
        }
    },
    emits: ['close'],
    methods: {
        closeModal() {
            this.$emit('close');
        },
        changeSlide(index: number) {
            const slides = document.querySelectorAll('.slider-box-image');
            slides.forEach((slide, i) => {
                slide.classList.toggle('primeiroImagem', i === index);
            });
        }
    }
});
</script>

<style lang="scss">
#fade,
#modal {
    transition: opacity 0.5s ease, visibility 0.5s ease;
    opacity: 1;
    visibility: visible;
    pointer-events: all;
}

#fade.hide,
#modal.hide {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
}

#fade {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 11;
}

#modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #AFEFEF;
    width: 700px;
    height: 800px;
    max-width: 90%;
    max-height: 90%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 12px 20px;
    border: solid 2px #000000;
    border-radius: 1.3rem;
    z-index: 12;
}

.modal-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    padding-bottom: 12px;

    .close-button {
        position: absolute;
        top: -3rem;
        left: -3rem;
        background-color: #AFEFEF;
        text-decoration: none;
        padding: 10px 20px;
        color: aliceblue;
        border: none;
        border-radius: 10rem;
        cursor: pointer;
        opacity: 0.9;
        transition: 0.4s;

        &:hover {
            scale: 1.1;
        }
    }

    img {
        width: 80px;
        height: 80px;
        cursor: pointer;
        border-radius: 2rem;
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
    /* ele centraliza */
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    /* ele bloqueia qualquer formatação em outro lugar tipo mobile e etc */
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