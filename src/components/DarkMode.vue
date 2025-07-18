<template>
    <div class="darkModeContent is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <span>DarkMode</span>
        <label class="switch">
            <input type="checkbox" id="darkModeToggle" @click="toggleDarkMode" :checked="isDarkMode">
            <span class="slider round"></span>
        </label>
    </div>
</template>

<script lang="ts">
export default {
    name: 'DarkMode',
    data() {
        return {
            isDarkMode: false,
        };
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            const body = document.body;
            body.classList.toggle('darkMode', this.isDarkMode);
            localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
        }
    },
};
</script>

<style lang="scss" scoped>
.darkModeContent {
    margin-top: 2rem;
    transition: all 0.3s ease;

    span {
        color: var(--color-secundaria);
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 120px;
        height: 50px;

        input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #000000;
            border: solid 1px var(--color-branco);
            transition: .4s;

            &.round {
                border-radius: 30px;

                &:before {
                    position: absolute;
                    content: "";
                    height: 40px;
                    width: 40px;
                    left: 4px;
                    bottom: 4px;
                    background-color: rgb(255, 255, 255);
                    border-radius: 50%;
                    transition: .4s;
                }
            }
        }

        input:checked+.slider {
            background-color: var(--color-primaria);
        }

        input:checked+.slider.round::before {
            transform: translateX(70px);
        }
    }
}
</style>