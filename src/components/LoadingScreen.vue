<template>
    <div class="loading-screen" v-if="visible">
        <div class="spinner animate-in">
            <img class="spinner-center" src="../assets/LogoLoading.png" alt="iconZadek" width="200" />
        </div>
        <p>{{ displayedText }}</p>
    </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue';

export default defineComponent({
    props: {
        visible: {
            type: Boolean,
            required: true
        }
    },
    setup() {
        const fullText = "Estamos buscando os dados...";
        const displayedText = ref("");

        onMounted(() => {
            let index = 0;
            const interval = setInterval(() => {
                displayedText.value += fullText[index];
                index++;
                if (index >= fullText.length) {
                    clearInterval(interval);
                }
            }, 50);
        });

        return {
            displayedText
        };
    }
});
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

.animate-in {
    animation: fadeScaleIn 0.5s ease forwards;
}

@keyframes fadeScaleIn {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
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