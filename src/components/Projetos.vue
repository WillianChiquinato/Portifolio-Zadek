<template>
    <article class="ProjetosContainer is-flex is-flex-direction-column is-align-items-center" id="projects" ref="sectionRef" :class="{ animate: isVisible }">
        <div>
            <h2 class="HardTitle">Projects</h2>
        </div>

        <div class="ProjetosOptions">
            <button :class="{ active: isFullStackActive }" class="fullStackBtn"
                @click="toggleProjects()">FullStack</button>
            <button :class="{ active: !isFullStackActive }" class="gameDevBtn"
                @click="toggleProjects()">GameDev</button>
        </div>

        <transition name="fade" mode="out-in">
            <div class="ProjectContainer" :key="isFullStackActive ? 'fullstack' : 'gamedev'">
                <div :class="isMobile ? 'mobileProject' : 'desktopProject'">
                    <ProjectCard v-for="(projeto, index) in currentProjects" :key="projeto.id" :projeto="projeto"
                        :index="index" :isMobile="isMobile" />
                </div>
            </div>
        </transition>
    </article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ProjectCard from '../components/ProjetosCard.vue';
import projetos from '../data/Projetos';

import { useIntersection } from '@/composable/intersectionObserver'

export default defineComponent({
    name: 'ProjetosSection',
    components: {
        ProjectCard
    },
    data() {
        return {
            isFullStackActive: true,
            isMobile: window.innerWidth <= 1024,
            listaProjetos: projetos
        };
    },
    computed: {
        fullStackProjects() {
            return this.listaProjetos.slice(8, 13);
        },
        gameDevProjects() {
            return this.listaProjetos.slice(0, 8);
        },
        currentProjects() {
            return this.isFullStackActive ? this.fullStackProjects : this.gameDevProjects;
        }
    },
    methods: {
        toggleProjects() {
            this.isFullStackActive = !this.isFullStackActive;
        },
        handleResize() {
            this.isMobile = window.innerWidth <= 1024;
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    setup() {
        const sectionRef = ref<HTMLElement | null>(null)
        const isVisible = useIntersection(sectionRef, { threshold: 0.3 })

        return { sectionRef, isVisible }
    }
});
</script>

<style lang="scss" scoped>
.ProjetosContainer {
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
}

.ProjetosOptions {
    display: flex;
    justify-content: center;
    font-size: clamp(1.4rem, 1.7vw, 2rem);
    padding-top: 0.4rem;

    .fullStackBtn {
        padding: 0.5rem 0rem;
        border: none;
        background: #ccc;
        color: #333;
        cursor: pointer;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        transition: 0.4s;
    }

    .gameDevBtn {
        padding: 0.5rem 0rem;
        border: none;
        background: #ccc;
        color: #333;
        cursor: pointer;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        transition: 0.4s;
    }

    button.active {
        background: var(--color-primaria);
        color: var(--color-preto);
    }

    .fullStackBtn {
        background: none;
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        padding: clamp(0.4rem, 0.6rem, 0.7rem) clamp(2.7rem, 3.5rem, 4rem);
        color: var(--color-primaria);
        border: solid 0.8px var(--color-primaria);
    }

    .gameDevBtn {
        background: none;
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        padding: 0.7rem 4rem;
        color: var(--color-primaria);
        border: solid 0.8px var(--color-primaria);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

@media (max-width: 1680px) {
    .ProjetosContainer {
        margin-top: 2rem;

        .HardTitle {
            font-size: clamp(2.5rem, 2vw, 3.5rem);
        }
    }

    .ProjetosOptions {
        font-size: clamp(1rem, 1.4vw, 1.5rem);
        padding-top: 0.5rem;
    }
}

@media (max-width: 1024px) {
    .ProjetosContainer {
        padding: 1.5rem;
        margin-top: 3rem;

        .HardTitle {
            font-size: clamp(2.2rem, 4vw, 2.8rem);
        }
    }

    .ProjetosOptions {
        font-size: clamp(1rem, 2vw, 1.4rem);
        padding-top: 1rem;

        .fullStackBtn,
        .gameDevBtn {
            padding: clamp(0.5rem, 0.8rem, 0.9rem) clamp(2rem, 3vw, 3.5rem);
        }
    }
}

@media (max-width: 768px) {
    .ProjetosContainer {
        padding: 1rem;
        margin-top: 2rem;

        .HardTitle {
            font-size: clamp(2rem, 5vw, 2.5rem);
            margin-bottom: 1rem;
        }
    }

    .ProjetosOptions {
        font-size: clamp(0.9rem, 3vw, 1.2rem);
        padding-top: 1.2rem;
        gap: 0;

        .fullStackBtn,
        .gameDevBtn {
            padding: clamp(0.6rem, 1rem, 1.2rem) clamp(1.5rem, 4vw, 2.5rem);
            border-width: 1px;
        }
    }
}

@media (max-width: 480px) {
    .ProjetosContainer {
        padding: 0.8rem;
        margin-top: 1.5rem;

        .HardTitle {
            font-size: clamp(1.8rem, 6vw, 2.2rem);
            margin-bottom: 0.8rem;
        }
    }

    .ProjetosOptions {
        font-size: clamp(0.8rem, 3.5vw, 1rem);
        padding-top: 1rem;
        width: 100%;
        max-width: 300px;
        margin: 0 auto;

        .fullStackBtn,
        .gameDevBtn {
            padding: clamp(0.7rem, 1.2rem, 1.4rem) clamp(1.2rem, 5vw, 2rem);
            flex: 1;
        }
    }
}

@media (max-width: 360px) {
    .ProjetosContainer {
        padding: 0.5rem;

        .HardTitle {
            font-size: clamp(1.6rem, 7vw, 2rem);
        }
    }

    .ProjetosOptions {
        font-size: clamp(0.7rem, 4vw, 0.9rem);
        max-width: 280px;

        .fullStackBtn,
        .gameDevBtn {
            padding: 0.8rem 1rem;
        }
    }
}
</style>