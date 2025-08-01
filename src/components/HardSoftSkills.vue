<template>
    <article class="HardSoftSkills is-flex is-flex-direction-column is-align-items-center" id="skills">
        <div>
            <h2 class="HardTitle">Hard & Soft Skills</h2>
            <h5 class="HardSubtitle">+Organizado +Criativo +Flexivel +Adaptavel</h5>
        </div>

        <div class="HardSkillsContainer">
            <div class="FullStackContainer">
                <h3 class="TitleFullStack">FullStack</h3>
                <div class="gridContent ">
                    <div v-for="(circle, index) in circles" :key="index"
                        class="contentHardSkills is-flex is-flex-direction-column is-align-items-center">
                        <span class="NomeContent">{{ circle.nome }}</span>
                        <div class="circle">
                            <svg class="progress-ring" width="216" height="216">
                                <!-- Círculo de fundo -->
                                <circle class="progress-ring-circle-base" stroke="#e6e6e6" stroke-width="12"
                                    fill="transparent" r="94" cx="108" cy="108" />
                                <!-- Círculo de progresso -->
                                <circle ref="progressRingFullStack" ref-in-for class="progress-ring-circle"
                                    stroke="green" stroke-width="12" fill="transparent" r="94" cx="108" cy="108" />
                            </svg>
                            <img class="progress-image" :src="circle.imagem" alt="IconCircle" />
                            <div ref="progressTextFullStack" ref-in-for class="progress-text">{{ circle.numero }}%</div>
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
                            <svg class="progress-ring" width="216" height="216">
                                <!-- Círculo de fundo -->
                                <circle class="progress-ring-circle-base" stroke="#e6e6e6" stroke-width="12"
                                    fill="transparent" r="94" cx="108" cy="108" />
                                <!-- Círculo de progresso -->
                                <circle ref="progressRingGameDev" ref-in-for class="progress-ring-circle" stroke="green"
                                    stroke-width="12" fill="transparent" r="94" cx="108" cy="108" />
                            </svg>
                            <img class="progress-image" :src="circle.imagem" alt="IconCircle" />
                            <div ref="progressTextGameDev" ref-in-for class="progress-text">{{ circle.numero }}%</div>
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

const circulosFullStack = [
    { nome: "Node.js", imagem: nodeIcon, numero: 85 },
    { nome: "React.js", imagem: reactIcon, numero: 80 },
    { nome: "Vue.js", imagem: vueIcon, numero: 80 },
    { nome: "Git/Github", imagem: git, numero: 80 },
    { nome: "SQL", imagem: sql, numero: 75 },
    { nome: ".NET Core", imagem: dotnet, numero: 70 },
    { nome: "Dart", imagem: dart, numero: 65 },
    { nome: "Flutter", imagem: flutter, numero: 60 },
    { nome: "TypeScript", imagem: typeScript, numero: 50 },
    { nome: "Docker", imagem: docker, numero: 50 },
    { nome: "Azure Cloud", imagem: azure, numero: 30 }
]

const circulosGameDev = [
    { nome: "Unity2D", imagem: unity2d, numero: 90 },
    { nome: "C# (POO)", imagem: csharp, numero: 80 },
    { nome: "Unity3D", imagem: unity3d, numero: 70 },
    { nome: "Package Manager", imagem: packageManager, numero: 70 },
    { nome: "IA", imagem: ia, numero: 50 },
    { nome: "C++", imagem: cplusplus, numero: 30 }
]

export default {
    data() {
        return {
            circles: circulosFullStack,
            circlesGameDev: circulosGameDev,
        };
    },
    computed: {
        circumference(): number {
            return 2 * Math.PI * 94;
        },
    },
    mounted() {
        this.circles.forEach((circle, index) => {
            this.setCirculoFullStack(index, circle.numero);
        });

        this.circlesGameDev.forEach((circle, index) => {
            this.setCirculoGameDev(index, circle.numero);
        });
    },
    methods: {
        setCirculoFullStack(index: number, percent: number) {
            const ring = this.$refs.progressRingFullStack[index] as SVGCircleElement;
            const text = this.$refs.progressTextFullStack[index] as HTMLElement;

            if (!ring || !text) return;

            const offset = this.circumference - (percent / 100) * this.circumference;

            ring.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
            ring.style.strokeDashoffset = `${offset}`;
        },

        setCirculoGameDev(index: number, percent: number) {
            const ring = this.$refs.progressRingGameDev[index] as SVGCircleElement;
            const text = this.$refs.progressTextGameDev[index] as HTMLElement;

            if (!ring || !text) return;

            const offset = this.circumference - (percent / 100) * this.circumference;

            ring.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
            ring.style.strokeDashoffset = `${offset}`;
        },
    },
}
</script>

<style lang="scss" scoped>
.HardSoftSkills {
    width: 100%;
    padding: 2rem;
    margin-top: 5rem;
    text-align: center;
    border-bottom: solid 0.8px var(--color-branco);

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
            width: 216px;
            height: 216px;
            margin: 5px 20px 20px 20px;
            text-align: center;
            z-index: 10;
        }

        .progress-ring {
            transform: rotate(-90deg);
        }

        .progress-ring-circle {
            stroke-dasharray: 589.23;
            stroke-dashoffset: 176.77;
            transition: stroke-dashoffset 0.5s ease;
        }

        .progress-ring-circle-base {
            stroke: var(--color-circulo-bg);
        }

        .progress-ring-circle {
            stroke: var(--color-circulo);
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
            left: 37%;
            font-size: 36px;
            font-weight: bold;
            color: var(--color-secundaria);
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
</style>