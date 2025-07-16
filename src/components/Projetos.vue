<template>
    <article class="ProjetosContainer is-flex is-flex-direction-column is-align-items-center" id="projects">
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
                        :index="index" :isMobile="isMobile" :saberMaisProject="saberMaisProject" />
                </div>
            </div>
        </transition>
    </article>
</template>

<script lang="ts">
import ProjectCard from '../components/ProjetosCard.vue';
import projetos from '../data/Projetos';

export default {
    name: 'Projetos',
    components: {
        ProjectCard
    },
    data() {
        return {
            isFullStackActive: true,
            isMobile: window.innerWidth <= 1100,
            saberMaisProject: 'Clique para saber mais --->',
            listaProjetos: projetos
        };
    },
    computed: {
        fullStackProjects() {
            return this.listaProjetos.slice(7, 11);
        },
        gameDevProjects() {
            return this.listaProjetos.slice(0, 7);
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
            this.isMobile = window.innerWidth <= 1100;
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
};
</script>

<style lang="scss" scoped>
.ProjetosContainer {
    width: 100%;
    padding: 2rem;
    margin-top: 5rem;
    text-align: center;
    border-bottom: solid 0.8px var(--color-branco);

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
</style>