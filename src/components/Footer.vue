<template>
    <div id="contact" class="footerContainer is-flex is-justify-content-center is-align-items-center">
        <div class="footerContent">
            <img src="../assets/imagens/LogoTipoFooter.png" alt="LogoTipoFooter">
            <button class="faleComigoBtn" @click="handleClick">Fale Comigo</button>
            <h6>@Copyright 2025</h6>
            <span>Direitos autorais reservados, by Willian de sena chiquinato</span>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'FooterProject',
    components: {},
    methods: {
        handleClick() {
            //Va para o whatsapp, abre em outra aba.
            window.open('https://wa.me/5511948641187', '_blank');
        }
    }
}
</script>

<style lang="scss" scoped>
.footerContainer {
    width: 100%;
    height: auto;
    background-color: var(--color-backgroundBody);

    .footerContent {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 3rem;

        img {
            width: clamp(350px, 40vw, 600px);
            height: auto;
        }

        button {
            background-color: var(--color-primaria);
            color: var(--color-preto);
            font-size: clamp(2rem, 3vw, 3rem);
            padding: clamp(0.5rem, 1vw, 1rem) clamp(2rem, 4vw, 4rem);
            border-radius: 2rem;
            margin: 1rem 0;
            transition: 0.3s;

            &:hover {
                background-color: var(--color-backgroundBody);
                border: solid 1px var(--color-primaria);
                color: var(--color-branco);
                scale: 1.1;
            }
        }

        h6 {
            font-size: clamp(1rem, 2vw, 1.5rem);
            color: var(--color-cinza);
        }

        span {
            font-size: clamp(0.8rem, 1.5vw, 1rem);
            color: var(--color-cinza);
        }
    }
}

@media (max-width: 1680px) {
    .footerContainer {
        .footerContent {
            img {
                width: clamp(200px, 40vw, 400px);
            }

            button {
                font-size: clamp(1rem, 2vw, 2rem);
                padding: clamp(0.5rem, 1vw, 1rem) clamp(2rem, 4vw, 4rem);
                border-radius: 1rem;
            }

            h6 {
                font-size: clamp(0.8rem, 1.5vw, 1.2rem);
            }

            span {
                font-size: clamp(0.5rem, 1vw, 0.8rem);
            }
        }
    }
}
</style>