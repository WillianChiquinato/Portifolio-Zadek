<template>
    <header class="headerContainer">
        <nav class="headerContent">
            <div class="headerLogo">
                <img src="../assets/LogoZadek.png" alt="Logo" />
            </div>
            <div class="headerLinks">
                <a href="#home" class="">HOME</a>
                <a href="#skills">SKILLS</a>
                <a href="#projects">PROJECTS</a>
                <a href="#contact">CONTACT</a>
            </div>
        </nav>
    </header>

    <div class="imagemResponsivoZadek">
        <img src="../assets/LogoZadek.png" alt="Logo" />
    </div>

    <article class="homePage" id="home">
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
                <!-- colocar um video da web -->
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>

                <div class="iconesRedesSociais is-flex is-justify-content-center is-align-items-center">
                    <a href="">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>

                <div
                    class="darkModeContent is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                    <span>DarkMode</span>
                    <label class="switch">
                        <input type="checkbox" id="darkModeToggle">
                        <span class="slider round"></span>
                    </label>
                </div>

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
export default {
    props:
    {

    }
}

</script>

<style lang="scss" scoped>
.headerContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #02081F;
    padding: 0 3rem;

    .headerContent {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 6rem;
        border-bottom: solid 1px #dee2e6;

        .headerLogo img {
            width: 70%;
        }

        .headerLinks {
            display: flex;
            gap: 10rem;
            font-size: clamp(0.9rem, 1.5vw, 1.7rem);
            font-weight: bold;

            a {
                color: var(--color-secundaria);
                text-decoration: none;
                transition: 0.5s;

                &:hover {
                    color: var(--color-header-hover);
                    scale: 1.4;
                }
            }
        }
    }
}

.imagemResponsivoZadek {
    display: none;
}

/* HomePage */
.homePage {
    width: 100dvw;
    margin-top: 10rem;
    padding: 2rem;
    border-bottom: solid 1px var(--color-branco);

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
                color: var(--color-text-secondary);
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

        .darkModeContent {
            margin-top: 2rem;

            span {
                color: var(--color-secundaria);
            }

            .switch {
                position: relative;
                display: inline-block;
                width: 120px;
                height: 50px;

                input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #000000;
                    border: solid 1px var(--color-branco);
                    transition: .4s;

                    &.round {
                        border-radius: 30px;

                        &:before {
                            position: absolute;
                            content: "";
                            height: 40px;
                            width: 40px;
                            left: 4px;
                            bottom: 4px;
                            background-color: rgb(255, 255, 255);
                            border-radius: 50%;
                            transition: .4s;
                        }
                    }
                }

                input:checked+.slider {
                    background-color: var(--color-primaria);
                }

                input:checked+.slider.round::before {
                    transform: translateX(70px);
                }
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

    .headerContainer {
        display: none;
    }
}
</style>