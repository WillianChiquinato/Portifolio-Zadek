<template>
    <div class="imagemResponsivoZadek" ref="sectionRef" :class="{ animate: isVisible }">
        <img src="../assets/LogoZadek.png" alt="Logo" />
    </div>

    <article class="homePage" id="home" ref="sectionRef" :class="{ animate: isVisible }">
        <section class="contentHomePage is-flex is-align-items-center is-justify-content-space-between">
            <div class="contenText is-flex is-flex-direction-column is-align-items-center">
                <h2 class="contentTextTitle">Full Stack & Game Developer</h2>
                <span class="contextTextSubTitle">"Fullstack por essência - Game dev por paixão"</span>

                <p>Atualmente, curso Jogos Digitais na FIAP (modalidade EAD) e Análise e Desenvolvimento de Sistemas na
                    FAM (presencial, período noturno). Tenho familiaridade com ferramentas como Android Studio, Power
                    BI, Excel, VS Code e Figma, utilizadas no desenvolvimento de aplicações e interfaces. Possuo
                    capacidade de gerenciar projetos de forma autônoma, além de colaborar de maneira eficaz em ambientes
                    de trabalho em equipe e de alta produtividade. </p>

                <div class="btnContextText">
                    <button class="DownloadCV">Download CV</button>
                </div>
                <div class="contexTextIconeMap is-flex is-align-items-center justify-content-start">
                    <i class="fas fa-map-marker-alt iconeMaps"></i>
                    <span>Mauá - SP (São paulo)</span>
                </div>
            </div>

            <div class="contentVideo is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>

                <div class="iconesRedesSociais is-flex is-justify-content-center is-align-items-center">
                    <a v-for="(RedesSociais, index) in RedesSociaisValores" :key="index" :href="RedesSociais.link"
                        target="_blank" rel="noopener noreferrer">
                        <i :class="RedesSociais.icon"></i>
                    </a>
                </div>

                <DarkMode />

                <div class="mobile-only">
                    <div class="btnContextText">
                        <button class="DownloadCV">Download CV</button>
                    </div>
                    <div class="contexTextIconeMap is-flex is-align-items-center justify-content-start">
                        <i class="fas fa-map-marker-alt iconeMaps"></i>
                        <span>Mauá - SP (São paulo)</span>
                    </div>
                </div>
            </div>
        </section>
    </article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import DarkMode from '../components/DarkMode.vue'
import { useIntersection } from '@/composable/intersectionObserver'

export default defineComponent({
    name: 'HomePage',
    components: { DarkMode },
    setup() {
        const sectionRef = ref<HTMLElement | null>(null)
        const isVisible = useIntersection(sectionRef, { threshold: 0.2 })

        const RedesSociaisValores = [
            { icon: 'fab fa-github', link: 'https://github.com/SeuPerfil' },
            { icon: 'fab fa-linkedin', link: 'https://linkedin.com/in/SeuPerfil' },
            { icon: 'fab fa-instagram', link: 'https://instagram.com/SeuPerfil' }
        ]

        return { sectionRef, isVisible, RedesSociaisValores }
    }
})
</script>

<style lang="scss" scoped>
/* HomePage */
.homePage {
    width: 100dvw;
    margin-top: 10rem;
    padding: 2rem;
    border-bottom: solid 1px var(--color-branco);
    transform: translateY(50px);
    opacity: 0;
    transition: all 0.6s ease-in-out;

    &.animate {
        opacity: 1;
        transform: translateY(10px);
    }

    .contentHomePage {
        .contenText {
            width: 100%;
            font-weight: 500;
            text-align: center;

            h2 {
                font-size: clamp(2.7rem, 3vw, 3.5rem);
                color: var(--color-primaria);
            }

            span {
                font-size: clamp(1.2rem, 1.5vw, 1.8rem);
                color: var(--color-cinza);
            }

            p {
                font-size: clamp(1.1rem, 1.2vw, 1.4rem);
                color: var(--color-secundaria);
                margin-top: 3rem;
                padding: 0rem 2rem;
                font-weight: normal;
                text-align: justify;
            }

            .btnContextText {
                width: 100%;
                margin: 2rem 0rem 0rem 4rem;
                display: flex;
                justify-content: start;

                @media (max-width: 1231px) {
                    justify-content: center;
                    margin: 2rem 0 0 0rem;
                }
            }
        }

        .DownloadCV {
            color: var(--color-preto);
            background-color: var(--color-primaria);
            font-size: clamp(2rem, 2.4vw, 2.6rem);
            padding: 1rem 3rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            border-radius: 10px;
            box-shadow: -2px 10px 3px rgba(66, 117, 133, 0.336);
            cursor: crosshair;
            transition: 0.5s;

            &:hover {
                background-color: var(--color-backgroundBody);
                border: solid 1px var(--color-primaria);
                color: var(--color-branco);
                scale: 1.05;
            }
        }

        .contexTextIconeMap {
            width: 100%;
            gap: 1rem;
            margin: 0rem 0rem 0rem 10rem;

            i {
                color: #e63946;
                font-size: 1.7rem;
            }

            span {
                font-size: 1rem;
                color: var(--color-branco);
                margin-top: 0.7rem;
                font-weight: bold;
                letter-spacing: 1.3px;
            }
        }
    }

    .contentVideo {
        width: 100%;
        padding-bottom: 2rem;

        iframe {
            width: clamp(35rem, 45vw, 47rem);
            aspect-ratio: 16 / 9;
            height: auto;

            border-radius: 15px;
            border: solid 0.1px var(--color-branco);
        }

        .iconesRedesSociais {
            gap: 2.5rem;
            padding-top: 1rem;

            a i {
                color: var(--color-primaria);
                font-size: 2.5rem;
                transition: color 0.3s ease;
            }

            a i:hover {
                color: #0077b5;
            }
        }

        .mobile-only {
            display: none;
        }

        @media (max-width: 1231px) {
            padding-top: 2rem;
            padding-bottom: 0rem;

            .mobile-only {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                justify-content: center;
                align-items: center;
                margin-top: 1rem;
            }
        }
    }
}

.imagemResponsivoZadek {
    display: none;
}

@media (max-width: 1680px) {
    .homePage {
        margin-top: 6.3rem;

        .contentHomePage {
            .contenText {
                h2 {
                    font-size: clamp(2.5rem, 2vw, 3.5rem);
                }

                span {
                    font-size: clamp(0.9rem, 1.2vw, 1.5rem);
                }

                p {
                    font-size: clamp(0.9rem, 1vw, 1.2rem);
                    margin-top: 2rem;
                }
            }

            .DownloadCV {
                font-size: clamp(1.5rem, 2vw, 2.3rem);
                padding: 0.8rem 2rem;
            }

            .contexTextIconeMap {
                gap: 0.8rem;
                margin: 0rem 0rem 0rem 7.5rem;

                i {
                    font-size: 1.2rem;
                }

                span {
                    font-size: 0.7rem;
                    margin-top: 0.4rem;
                }
            }
        }

        .contentVideo {
            width: 100%;
            padding-bottom: 1rem;

            iframe {
                width: clamp(27rem, 37vw, 40rem);
            }

            .iconesRedesSociais {
                gap: 2rem;
                padding-top: 1.2rem;

                a i {
                    font-size: 2rem;
                }
            }
        }
    }
}

@media (max-width: 1230px) {
    .contentHomePage {
        flex-direction: column;
    }

    .DownloadCV {
        border-radius: 20px;
    }

    .contexTextIconeMap {
        gap: 0.6rem;
        justify-content: center;
        align-items: center;
        margin: 0 !important;
        padding-bottom: 3rem;
    }

    .mobile-only {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }

    .contenText .btnContextText,
    .contenText .contexTextIconeMap {
        display: none !important;
    }
}

@media (max-width: 1024px) {
    .homePage {
        margin-top: 2rem;
    }

    .imagemResponsivoZadek {
        display: block;
        width: 100%;
        text-align: center;
        margin-top: 2rem;

        img {
            width: 50%;
            height: auto;
        }
    }
}
</style>