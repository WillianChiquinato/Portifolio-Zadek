<template>
    <div :class="isMobile ? 'projectContentMobile' : 'projectContent'">
        <img :src="projeto.image" :alt="projeto.name" :class="isMobile ? 'imagemProjectMobile' : 'imagemProject'" />

        <div v-if="isMobile" class="mobileContent">
            <h2 :class="{ smallFont: index === 1 || index === 2 }">{{ projeto.name }}</h2>
            <h5>{{ projeto.status }}</h5>
            <span class="mobileDescription">{{ projeto.descricao }}</span>
            <button class="saberMaisProjectMobile" @click="openModal(projeto)">Clique para saber mais</button>
        </div>

        <template v-else>
            <h2 :class="{ smallFont: index === 1 || index === 2 }">{{ projeto.name }}</h2>
            <h5>{{ projeto.status }}</h5>
            <button class="saberMaisProject" @click="openModal(projeto)">Clique para saber mais</button>
        </template>
    </div>

    <ModalProjetos v-if="isOpen" v-model:isOpen="isOpen" :projetoId="modalDataId" @close="closeModal" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ModalProjetos from './ModalProjetos.vue';
import { Motion } from '@motionone/vue';

export default defineComponent({
    name: 'ProjectCard',
    directives: {
        motion: Motion
    },
    components: {
        ModalProjetos
    },
    props: {
        projeto: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        isMobile: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            isOpen: false,
            modalDataId: -1,
        };
    },
    methods: {
        openModal(projeto: Record<string, unknown>) {
            this.modalDataId = projeto.id as number;
            this.isOpen = true;
        },
        closeModal() {
            this.isOpen = false;
        }
    }
});
</script>

<style lang="scss">
.ProjectContainer {
    width: 100%;
    height: auto;
    padding: 3rem 5rem;

    .mobileProject {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    .desktopProject {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    .imagemProjectMobile {
        max-width: 32%;
        object-fit: cover;
        border-right: solid 0.2px var(--color-branco);
        border-radius: 1rem 0 0 1rem;
    }

    .projectContentMobile {
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: var(--color-FundoContainerProject);
        height: auto;
        border: solid 0.8px var(--color-branco);
        border-radius: 1rem;

        .mobileContent {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 300px;

            .smallFont {
                min-width: 94%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            h2 {
                font-size: clamp(2.5rem, 2.8vw, 3.5rem);
                color: var(--color-secundaria);
                margin: 0.5rem 1rem 0rem 1rem;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            h5 {
                margin: 0.5rem 1rem;
                color: var(--color-cinza);
            }

            .mobileDescription {
                display: -webkit-box;
                -webkit-line-clamp: 4;
                line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: justify;
                padding: 0rem 1.5rem;
                flex-grow: 1;
                margin-bottom: 1rem;
            }

            .saberMaisProjectMobile {
                width: 100%;
                background-color: var(--color-secundaria);
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: clamp(1.3rem, 1.5vw, 1.8rem);
                color: var(--color-preto);
                cursor: pointer;
                padding: 1rem 0rem;
                border-top: solid 0.8px var(--color-branco);
                border-bottom-right-radius: 1rem;
                margin-top: auto;
                transition: 0.4s;

                &:hover {
                    background-color: var(--color-preto);
                    color: var(--color-primaria);
                }
            }

            @media (max-width: 920px) {
                h2 {
                    font-size: clamp(1.8rem, 3.5vw, 2.2rem);
                    margin: 0.5rem 0.8rem 0rem 0.8rem;
                }

                h5 {
                    margin: 0.3rem 0.8rem 0.5rem 0.8rem;
                    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
                }

                .mobileDescription {
                    padding: 0rem 0.8rem;
                    font-size: clamp(0.9rem, 2.2vw, 1.1rem);
                    -webkit-line-clamp: 3;
                    line-clamp: 3;
                }

                .saberMaisProjectMobile {
                    font-size: clamp(1rem, 2.8vw, 1.3rem);
                    padding: 0.8rem 0rem;
                }
            }

            @media (max-width: 480px) {
                min-height: 250px;

                .smallFont {
                    min-width: 85%;
                    font-size: clamp(1.4rem, 4.5vw, 1.8rem) !important;
                }

                h2 {
                    font-size: clamp(2rem, 4.5vw, 2.5rem);
                    margin: 0.3rem 0.5rem 0rem 0.5rem;
                }

                h5 {
                    margin: 0.2rem 0.5rem;
                    font-size: clamp(0.7rem, 3vw, 0.9rem);
                }

                .mobileDescription {
                    padding: 0rem 0.5rem;
                    font-size: clamp(0.75rem, 2.8vw, 0.9rem);
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    margin-bottom: 0.5rem;
                }

                .saberMaisProjectMobile {
                    font-size: clamp(0.8rem, 3.5vw, 1.1rem);
                    padding: 0.6rem 0rem;
                }
            }

            @media (max-width: 360px) {
                min-height: 200px;

                .smallFont {
                    min-width: 80%;
                    font-size: clamp(1.2rem, 5vw, 1.6rem) !important;
                }

                h2 {
                    font-size: clamp(1.2rem, 5vw, 1.6rem);
                    margin: 0.2rem 0.4rem 0rem 0.4rem;
                }

                h5 {
                    margin: 0.1rem 0.4rem;
                    font-size: clamp(0.65rem, 3.5vw, 0.8rem);
                }

                .mobileDescription {
                    padding: 0rem 0.4rem;
                    font-size: clamp(0.7rem, 3.2vw, 0.85rem);
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                }

                .saberMaisProjectMobile {
                    font-size: clamp(0.75rem, 4vw, 1rem);
                    padding: 0.5rem 0rem;
                }
            }
        }

        @media (max-width: 480px) {
            flex-direction: column;

            img {
                min-width: 100%;
                width: 100%;
                height: 200px;
                border-right: none;
                border-bottom: solid 0.2px var(--color-branco);
                border-radius: 1rem 1rem 0 0;
            }

            .mobileContent {
                min-height: auto;

                .saberMaisProjectMobile {
                    border-radius: 0 0 1rem 1rem;
                }
            }
        }
    }

    .projectContent {
        width: clamp(300px, 400px, 500px);
        background-color: var(--color-FundoContainerProject);
        height: auto;
        border: solid 0.8px var(--color-branco);
        border-radius: 1rem;
        transition: 0.3s;

        &:hover {
            transform: translateY(-4px);
            scale: 1.02;
        }

        img {
            width: 100%;
            height: 600px;
            object-fit: cover;
            border-bottom: solid 0.2px var(--color-branco);
            border-radius: 1rem 1rem 0 0;
        }

        h2 {
            font-size: clamp(1.5rem, 1.7vw, 2rem);
            color: var(--color-secundaria);
            margin: 0.5rem 1rem 0rem 1rem;
        }

        h5 {
            color: var(--color-cinza);
        }

        .saberMaisProject {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: clamp(1.3rem, 1.5vw, 1.8rem);
            color: var(--color-primaria);
            cursor: pointer;
            padding: 1rem 0rem;
            transition: 0.4s;

            &:hover {
                color: var(--color-secundaria);
                scale: 1.1;
            }
        }

        .smallFont {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}

@media (max-width: 1680px) {
    .ProjectContainer {
        .projectContent {
            width: clamp(210px, 310px, 410px);
            border-radius: 0.6rem;

            img {
                width: 100%;
                height: 450px;
                object-fit: cover;
                border-bottom: solid 0.2px var(--color-branco);
                border-radius: 0.6rem 0.6rem 0 0;
            }

            h2 {
                font-size: clamp(1.2rem, 1.5vw, 1.7rem);
            }

            .saberMaisProject {
                font-size: clamp(1.1rem, 1.2vw, 1.5rem);
            }
        }
    }
}

@media (max-width: 1200px) {
    .ProjectContainer {
        padding: 2.5rem 3rem;

        .desktopProject {
            gap: 1.5rem;
        }

        .projectContent {
            width: clamp(200px, 280px, 350px);

            img {
                height: 380px;
            }

            h2 {
                font-size: clamp(1.1rem, 1.4vw, 1.6rem);
                margin: 0.4rem 0.8rem 0rem 0.8rem;
            }

            .saberMaisProject {
                font-size: clamp(1rem, 1.1vw, 1.4rem);
                padding: 0.8rem 0rem;
            }
        }
    }
}

@media (max-width: 1024px) {
    .ProjectContainer {
        padding: 2rem 2rem;

        .desktopProject {
            gap: 1.2rem;
            justify-content: space-around;
        }

        .projectContent {
            width: clamp(180px, 45%, 320px);

            img {
                height: 320px;
            }

            h2 {
                font-size: clamp(1rem, 1.8vw, 1.5rem);
                margin: 0.3rem 0.6rem 0rem 0.6rem;
            }

            h5 {
                font-size: clamp(0.9rem, 1.2vw, 1.1rem);
                margin: 0.2rem 0rem 0.5rem 0rem;
            }

            .saberMaisProject {
                font-size: clamp(0.9rem, 1.3vw, 1.3rem);
                padding: 0.7rem 0rem;
            }
        }
    }
}

@media (max-width: 830px) {
    .ProjectContainer {
        padding: 2rem 2rem;

        .mobileProject {
            gap: 1.5rem;
        }
    }
}

@media (max-width: 768px) {
    .ProjectContainer {
        padding: 1.5rem 1rem;

        .mobileProject {
            gap: 1.2rem;
        }
    }
}

@media (max-width: 480px) {
    .ProjectContainer {
        padding: 1.2rem 2rem;

        .imagemProjectMobile {
            max-width: 32%;
            min-height: 400px;
        }

        .mobileProject {
            gap: 2.4rem;
        }
    }
}
</style>