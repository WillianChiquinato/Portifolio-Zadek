<template>
    <div class="loading-screen" v-if="visible">
        <div class="spinner">
            <img class="spinner-center" src="../assets/LogoLoading.png" alt="iconZadek" width="200" />
        </div>
        <p>Estamos buscando os dados... </p>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        visible: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0d1117;
    /* cor de fundo */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 9999;
}

.spinner {
    position: relative;
    width: 120px;
    height: 120px;
    margin-bottom: 10px;
}

.spinner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 9px solid rgba(255, 255, 255, 0.2);
    border-top: 9px solid var(--color-primaria);
    border-radius: 50%;
    animation: spin 1.4s linear infinite;
}


.spinner-center {
    position: absolute;
    width: 150px;
    height: 150px;
    object-fit: contain;
    transform: translate(-50%, -60%);
    animation: bounce 1s ease-in-out infinite;
    scale: 1.4;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

p {
    font-size: 1.5rem;
    margin-top: 14px;
}
</style>