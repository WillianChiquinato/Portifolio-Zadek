<template>
    <div :class="isMobile ? 'projectContentMobile' : 'projectContent'">
        <img :src="projeto.image" :alt="projeto.name" :class="isMobile ? 'imagemProjectMobile' : 'imagemProject'" />

        <div v-if="isMobile" class="mobileContent">
            <h2>{{ projeto.name }}</h2>
            <h5>{{ projeto.status }}</h5>
            <span class="mobileDescription">{{ projeto.descricao }}</span>
            <button class="saberMaisProjectMobile">{{ saberMaisProject }}</button>
        </div>

        <template v-else>
            <h2 :class="{ smallFont: index === 1 || index === 2 }">{{ projeto.name }}</h2>
            <h5>{{ projeto.status }}</h5>
            <button class="saberMaisProject">{{ saberMaisProject }}</button>
        </template>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ProjectCard',
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
        },
        saberMaisProject: {
            type: String,
            required: true
        }
    }
};
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

    .projectContentMobile {
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: var(--color-FundoContainerProject);
        height: auto;
        border: solid 0.8px var(--color-branco);
        border-radius: 1rem;

        img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-right: solid 0.2px var(--color-branco);
            border-radius: 1rem 0 0 1rem;
        }

        .mobileContent {
            h2 {
                font-size: clamp(2.5rem, 2.8vw, 3.5rem);
                color: var(--color-secundaria);
                margin: 0.5rem 1rem 0rem 1rem;
            }

            h5 {
                margin-bottom: 2rem;
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
                transform: translateY(1.35rem);
                transition: 0.4s;

                &:hover {
                    background-color: var(--color-preto);
                    color: var(--color-primaria);
                }
            }

            @media (max-width: 920px) {
                h2 {
                    font-size: clamp(2rem, 2.3vw, 2.5rem);
                    margin: 0.5rem 1rem 0rem 1rem;
                }

                h5 {
                    margin-bottom: 1.5rem;
                }

                .mobileDescription {
                    padding: 2.2rem 1rem 0rem 1rem;
                }

                .saberMaisProjectMobile {
                    font-size: clamp(1rem, 1.2vw, 1.5rem);
                    padding: 0.7rem 0rem;
                }

            }

            @media (max-width: 830px) {
                h2 {
                    font-size: clamp(1.5rem, 1.8vw, 2rem);
                }

                .mobileDescription {
                    padding: 3rem 1rem 0rem 1rem;
                }
            }

            @media (max-width: 720px) {
                .saberMaisProjectMobile {
                    font-size: clamp(1rem, 1.2vw, 1.5rem);
                    transform: translateY(1.6rem);
                    padding: 0.5rem 0rem;
                }

                .mobileDescription {
                    padding: 0rem 1rem 0rem 1rem;
                }
            }

        }

        @media (max-width: 720px) {
            img {
                height: 250px;
            }
        }
    }

    .projectContent {
        width: clamp(300px, 400px, 500px);
        background-color: var(--color-FundoContainerProject);
        height: auto;
        border: solid 0.8px var(--color-branco);
        border-radius: 1rem;

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

@media (max-width: 830px) {
    .ProjectContainer {
        padding: 3rem 3rem;
    }
}

@media (max-width: 720px) {
    .ProjectContainer {
        padding: 2rem 1rem;
    }
}
</style>