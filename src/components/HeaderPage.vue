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
    background-color: var(--color-backgroundBody);
    padding: 0 3rem;

    .headerContent {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 6rem;
        border-bottom: solid 1px var(--color-branco);

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
                transition: 0.3s;

                &:hover {
                    color: var(--color-header-hover);
                    scale: 1.2;
                }
            }
        }
    }
}

@media (max-width: 1680px) {
    .headerContainer {
        .headerContent {
            height: 4.5rem;

            .headerLogo img {
                width: 50%;
            }

            .headerLinks {
                gap: 10rem;
                font-size: clamp(0.6rem, 1.3vw, 1.5rem);
            }
        }
    }
}

@media (max-width: 1024px) {
    .headerContainer {
        display: none;
    }
}
</style>