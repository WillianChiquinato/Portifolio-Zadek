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
                        <span class="NomeContent">{{ circle.nome }}</span>
                        <div class="circle">
                            <svg class="progress-ring" :width="circleSize" :height="circleSize">
                                <!-- Círculo de fundo -->
                                <circle class="progress-ring-circle-base" stroke="#e6e6e6" stroke-width="12"
                                    fill="transparent" :r="circleRadius" :cx="circleCenter" :cy="circleCenter" />
                                <!-- Círculo de progresso -->
                                <circle ref="progressRingFullStack" class="progress-ring-circle" stroke="green"
                                    stroke-width="12" fill="transparent" :r="circleRadius" :cx="circleCenter"
                                    :cy="circleCenter" :style="getCircleStyle(circle.numero)" />
                            </svg>
                            <img class="progress-image" :src="circle.imagem" alt="IconCircle" />
                            <div class="progress-text">{{ circle.numero }}%</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="FullStackContainer">
                <h3 class="TitleFullStack">GameDev</h3>
                <div class="gridContent">
                    <div v-for="(circle, index) in circlesGameDev" :key="index"
                        class="contentHardSkills is-flex is-flex-direction-column is-align-items-center">
                        <span class="NomeContent">{{ circle.nome }}</span>
                        <div class="circle">
                            <svg class="progress-ring" :width="circleSize" :height="circleSize">
                                <!-- Círculo de fundo -->
                                <circle class="progress-ring-circle-base" stroke="#e6e6e6" stroke-width="12"
                                    fill="transparent" :r="circleRadius" :cx="circleCenter" :cy="circleCenter" />
                                <!-- Círculo de progresso -->
                                <circle ref="progressRingGameDev" class="progress-ring-circle" stroke="green"
                                    stroke-width="12" fill="transparent" :r="circleRadius" :cx="circleCenter"
                                    :cy="circleCenter" :style="getCircleStyle(circle.numero)" />
                            </svg>
                            <img class="progress-image" :src="circle.imagem" alt="IconCircle" />
                            <div class="progress-text">{{ circle.numero }}%</div>
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
    { nome: "Node.js", imagem: nodeIcon, numero: 80 },
    { nome: "React.js", imagem: reactIcon, numero: 70 },
    { nome: "Vue.js", imagem: vueIcon, numero: 65 },
    { nome: "Git/Github", imagem: git, numero: 65 },
    { nome: "SQL", imagem: sql, numero: 65 },
    { nome: ".NET Core", imagem: dotnet, numero: 50 },
    { nome: "Dart", imagem: dart, numero: 50 },
    { nome: "Flutter", imagem: flutter, numero: 50 },
    { nome: "TypeScript", imagem: typeScript, numero: 50 },
    { nome: "Docker", imagem: docker, numero: 30 },
    { nome: "Azure Cloud", imagem: azure, numero: 10 }
]

const circulosGameDev = [
    { nome: "Unity2D", imagem: unity2d, numero: 90 },
    { nome: "C# (POO)", imagem: csharp, numero: 80 },
    { nome: "Unity3D", imagem: unity3d, numero: 70 },
    { nome: "Package Manager", imagem: packageManager, numero: 50 },
    { nome: "IA", imagem: ia, numero: 40 },
    { nome: "C++", imagem: cplusplus, numero: 20 }
]

export default defineComponent({
    name: 'HardSoftSkills',
    data() {
        return {
            circles: circulosFullStack,
            circlesGameDev: circulosGameDev,
            circleSize: 216, // Tamanho base do SVG
            strokeWidth: 12
        };
    },
    computed: {
        circleRadius() {
            return (this.circleSize - this.strokeWidth) / 2;
        },
        circleCenter() {
            return this.circleSize / 2;
        },
        circumference() {
            return 2 * Math.PI * this.circleRadius;
        }
    },
    methods: {
        getCircleStyle(percent: number) {
            const offset = this.circumference - (percent / 100) * this.circumference;
            return {
                strokeDasharray: `${this.circumference} ${this.circumference}`,
                strokeDashoffset: `${offset}`
            };
        },

        updateCircleSize() {
            const width = window.innerWidth;
            
            if (width < 768) {
                this.circleSize = 140;
                this.strokeWidth = 12;
            } else if (width < 1024) {
                this.circleSize = 160;
                this.strokeWidth = 12;
            } else if (width < 1680) {
                this.circleSize = 170;
                this.strokeWidth = 12;
            } else {
                this.circleSize = 216;
                this.strokeWidth = 12;
            }
        },
        
        handleResize() {
            this.updateCircleSize();
            this.$nextTick(() => {
                // Forçar re-renderização dos círculos
                this.circles = [...this.circles];
                this.circlesGameDev = [...this.circlesGameDev];
            });
        }
    },
    mounted() {
        this.updateCircleSize();
        
        window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
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
    gap: 0.6rem;

    .gridContent {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
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
            font-size: clamp(1.6rem, 1.8vw, 2.2rem);
            color: var(--color-secundaria);
        }

        .circle {
            position: relative;
            display: inline-block;
            margin: 5px 20px 20px 20px;
            text-align: center;
            z-index: 10;
            transition: all 0.3s ease;

            &:hover {
                transform: scale(1.05);
            }
        }

        .progress-ring {
            transform: rotate(-90deg);
        }

        .progress-ring-circle-base {
            stroke: var(--color-circulo-bg);
        }

        .progress-ring-circle {
            stroke: var(--color-circulo);
            transition: stroke-dashoffset 1.5s ease;
        }

        .progress-image {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90px;
            height: 90px;
            border-radius: 30%;
        }

        .progress-text {
            position: absolute;
            top: 65%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 36px;
            font-weight: bold;
            color: var(--color-secundaria);
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
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 0.7rem;
        }

        .FullStackContainer {
            margin-bottom: 2rem;

            .TitleFullStack {
                font-size: clamp(1.7rem, 2vw, 2.2rem);
                margin: 2rem 0rem;
                text-underline-offset: 0.5rem;
            }

            .NomeContent {
                font-size: clamp(1.3rem, 1.5vw, 2rem);
            }

            .circle {
                margin: 1px 15px 15px 15px;
            }

            .progress-image {
                width: 60px;
                height: 60px;
            }

            .progress-text {
                font-size: 1.2rem;
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

// Adicione media queries para ajustar o tamanho dos círculos
@media (max-width: 768px) {
    :deep(.progress-image) {
        width: 50px !important;
        height: 50px !important;
    }
}

@media (max-width: 480px) {
    .HardSkillsContainer {
        .gridContent {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 0.5rem;
        }

        .FullStackContainer {
            .progress-image {
                width: 35px;
                height: 35px;
            }

            .progress-text {
                font-size: 0.9rem;
            }
        }
    }
}

@media (max-width: 410px) {
    :deep(.progress-image) {
        width: 40px !important;
        height: 40px !important;
    }

    .HardSkillsContainer {
        .gridContent {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 0.3rem;
        }

        .FullStackContainer {
            .progress-image {
                width: 35px;
                height: 35px;
            }

            .progress-text {
                font-size: 0.9rem;
            }
        }
    }
}
</style>