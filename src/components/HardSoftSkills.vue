<template>
    <article class="HardSoftSkills is-flex is-flex-direction-column is-align-items-center" id="skills" ref="sectionRef"
        :class="{ animate: isVisible }">
        <div>
            <h2 class="HardTitle">Hard & Soft Skills</h2>
            <h5 class="HardSubtitle">+Organizado +Criativo +Flexivel +Adaptavel</h5>
        </div>

        <div class="HardSkillsContainer">
            <div class="FullStackContainer">
                <h3 class="TitleFullStack">FullStack</h3>
                <div class="gridContent">
                    <div v-for="(circle, index) in circles" :key="index"
                        class="contentHardSkills is-flex is-flex-direction-column is-align-items-center">
                        <div class="skillCard">
                            <div class="skillHeader">
                                <img class="skillImage" :src="circle.imagem" alt="IconSkill" />
                                <div class="skillMeta">
                                    <span class="NomeContent">{{ circle.nome }}</span>
                                    <span class="skillLevel">{{ getLevelLabel(circle.numero) }}</span>
                                </div>
                                <span class="progress-text">{{ circle.numero }}%</span>
                            </div>
                            <div class="segmentBar" aria-hidden="true">
                                <span v-for="segment in 10" :key="`full-${index}-${segment}`" class="segment"
                                    :class="{ filled: segment <= getFilledSegments(circle.numero) }"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="FullStackContainer">
                <h3 class="TitleFullStack">GameDev</h3>
                <div class="gridContent">
                    <div v-for="(circle, index) in circlesGameDev" :key="index"
                        class="contentHardSkills is-flex is-flex-direction-column is-align-items-center">
                        <div class="skillCard">
                            <div class="skillHeader">
                                <img class="skillImage" :src="circle.imagem" alt="IconSkill" />
                                <div class="skillMeta">
                                    <span class="NomeContent">{{ circle.nome }}</span>
                                    <span class="skillLevel">{{ getLevelLabel(circle.numero) }}</span>
                                </div>
                                <span class="progress-text">{{ circle.numero }}%</span>
                            </div>
                            <div class="segmentBar" aria-hidden="true">
                                <span v-for="segment in 10" :key="`game-${index}-${segment}`" class="segment"
                                    :class="{ filled: segment <= getFilledSegments(circle.numero) }"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import reactIcon from '../assets/Imagens/ReactIcon.png';
import vueIcon from '../assets/Imagens/VueIcon.png';
import nodeIcon from '../assets/Imagens/NodeIcon.png';
import sql from '../assets/Imagens/SqlIcon.png';
import typeScript from '../assets/Imagens/TypescriptIcon.png';
import dotnet from '../assets/Imagens/DotnetIcon.png';
import flutter from '../assets/Imagens/FlutterIcon.png';
import dart from '../assets/Imagens/DartIcon.png';
import git from '../assets/Imagens/GitIcon.png';
import docker from '../assets/Imagens/DockerIcon.png';
import azure from '../assets/Imagens/AzureIcon.png';
import unity2d from '../assets/Imagens/Unity2DIcon.png';
import csharp from '../assets/Imagens/CSharpIcon.png';
import unity3d from '../assets/Imagens/Unity3DIcon.png';
import packageManager from '../assets/Imagens/PackageManagerIcon.png';
import ia from '../assets/Imagens/IAIcon.png';
import cplusplus from '../assets/Imagens/CPlusPlusIcon.png';

import { defineComponent, ref } from 'vue'
import { useIntersection } from '@/composable/intersectionObserver'

const circulosFullStack = [
    { nome: "Vue.js", imagem: vueIcon, numero: 80 },
    { nome: "TypeScript", imagem: typeScript, numero: 80 },
    { nome: ".NET Core", imagem: dotnet, numero: 75 },
    { nome: "React.js", imagem: reactIcon, numero: 70 },
    { nome: "Node.js", imagem: nodeIcon, numero: 65 },
    { nome: "Git/Github", imagem: git, numero: 65 },
    { nome: "SQL", imagem: sql, numero: 65 },
    { nome: "Dart", imagem: dart, numero: 40 },
    { nome: "Flutter", imagem: flutter, numero: 40 },
    { nome: "Azure Cloud", imagem: azure, numero: 30 },
    { nome: "Docker", imagem: docker, numero: 20 },
]

const circulosGameDev = [
    { nome: "Unity2D", imagem: unity2d, numero: 90 },
    { nome: "C# (POO)", imagem: csharp, numero: 80 },
    { nome: "Unity3D", imagem: unity3d, numero: 70 },
    { nome: "Packages", imagem: packageManager, numero: 60 },
    { nome: "IA", imagem: ia, numero: 50 },
    { nome: "C++", imagem: cplusplus, numero: 20 }
]

export default defineComponent({
    name: 'HardSoftSkills',
    data() {
        return {
            circles: circulosFullStack,
            circlesGameDev: circulosGameDev
        };
    },
    methods: {
        getFilledSegments(percent: number) {
            return Math.max(1, Math.min(10, Math.round(percent / 10)));
        },

        getLevelLabel(percent: number) {
            if (percent >= 80) return 'Avancado';
            if (percent >= 60) return 'Intermediario';
            return 'Base';
        }
    },
    setup() {
        const sectionRef = ref<HTMLElement | null>(null)
        const isVisible = useIntersection(sectionRef, { threshold: 0.1 })

        return { sectionRef, isVisible }
    }
})
</script>

<style lang="scss" scoped>
.HardSoftSkills {
    width: 100%;
    padding: 2rem;
    margin-top: 5rem;
    text-align: center;
    border-bottom: solid 0.8px var(--color-branco);
    transform: translateY(50px);
    opacity: 0;
    transition: all 0.6s ease-in-out;

    &.animate {
        opacity: 1;
        transform: translateY(10px);
    }

    .HardTitle {
        font-size: clamp(2.7rem, 3vw, 3.5rem);
        color: var(--color-primaria);
    }

    .HardSubtitle {
        padding-top: 2rem;
        font-size: clamp(1rem, 1.3vw, 1.6rem);
        color: var(--color-cinza);
    }
}

.HardSkillsContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2rem;
    gap: 0.8rem;

    .gridContent {
        width: 100%;
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 0.5rem;
        padding: 0 1.1rem 1.1rem;
        box-sizing: border-box;
    }

    .FullStackContainer {
        width: 49%;
        flex-direction: column;
        border: solid 0.8px var(--color-branco);
        border-radius: 15px;
        margin-bottom: 3rem;

        .TitleFullStack {
            text-align: center;
            font-size: clamp(2rem, 2.2vw, 2.5rem);
            color: var(--color-primaria);
            margin: 2rem 0rem;
            text-decoration: underline;
            text-underline-offset: 0.7rem;
            text-decoration-color: gray;
        }

        .NomeContent {
            font-size: clamp(1.1rem, 1.2vw, 1.45rem);
            color: var(--color-secundaria);
        }

        .skillCard {
            width: 100%;
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 14px;
            padding: 0.9rem;
            background: linear-gradient(145deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.06));
            transition: transform 0.3s ease, border-color 0.3s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: rgba(255, 255, 255, 0.4);
            }
        }

        .skillHeader {
            display: flex;
            align-items: center;
            gap: 0.8rem;
        }

        .skillImage {
            width: 42px;
            height: 42px;
            border-radius: 10px;
            object-fit: cover;
            background-color: rgba(255, 255, 255, 0.08);
            padding: 0.2rem;
        }

        .skillMeta {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.3rem;
            flex: 1;
        }

        .skillLevel {
            font-size: 0.75rem;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 999px;
            color: var(--color-cinza);
            padding: 0.15rem 0.5rem;
        }

        .progress-text {
            font-size: 1.15rem;
            font-weight: bold;
            color: var(--color-secundaria);
            min-width: 52px;
            text-align: right;
        }

        .segmentBar {
            margin-top: 0.9rem;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(10, minmax(0, 1fr));
            gap: 0.35rem;
        }

        .segment {
            height: 10px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.14);
            transition: background-color 0.5s ease, transform 0.3s ease;
        }

        .segment.filled {
            background: linear-gradient(90deg, var(--color-circulo), var(--color-primaria));
            transform: scaleY(1.08);
        }
    }
}

@media (max-width: 1680px) {
    .HardSoftSkills {
        margin-top: 2rem;

        .HardTitle {
            font-size: clamp(2.5rem, 2vw, 3.5rem);
        }

        .HardSubtitle {
            font-size: clamp(0.8rem, 1vw, 1.3rem);
        }
    }

    .HardSkillsContainer {
        margin-top: 1.4rem;

        .gridContent {
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 0.7rem;
            padding: 0 0.9rem 0.9rem;
        }

        .FullStackContainer {
            margin-bottom: 2rem;

            .TitleFullStack {
                font-size: clamp(1.7rem, 2vw, 2.2rem);
                margin: 2rem 0rem;
                text-underline-offset: 0.5rem;
            }

            .NomeContent {
                font-size: clamp(1rem, 1.2vw, 1.35rem);
            }

            .skillImage {
                width: 38px;
                height: 38px;
            }

            .progress-text {
                font-size: 1rem;
            }

            .segment {
                height: 9px;
            }
        }
    }
}

@media (max-width: 1200px) {
    .HardSkillsContainer {
        flex-direction: column;
        align-items: center;

        .FullStackContainer {
            width: 100%;
            margin-bottom: 3rem;
        }
    }
}

@media (max-width: 768px) {
    .HardSkillsContainer {
        .gridContent {
            grid-template-columns: 1fr;
            padding: 0 0.75rem 0.8rem;
        }
    }
}

@media (max-width: 480px) {
    .HardSkillsContainer {
        .gridContent {
            gap: 1rem;
        }

        .FullStackContainer {
            .skillCard {
                padding: 0.75rem;
            }

            .skillImage {
                width: 34px;
                height: 34px;
            }

            .progress-text {
                font-size: 0.9rem;
                min-width: 46px;
            }

            .segment {
                height: 8px;
            }
        }
    }
}

@media (max-width: 390px) {
    .HardSkillsContainer {
        .gridContent {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 0 0.45rem 0.6rem;
        }

        .FullStackContainer {
            .skillLevel {
                font-size: 0.65rem;
            }

            .progress-text {
                font-size: 0.75rem;
            }

            .segmentBar {
                gap: 0.25rem;
            }
        }
    }
}
</style>