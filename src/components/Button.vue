<template>
    <component :is="tag" :to="to" :class="buttonClass" @click="handleClick">
        <slot></slot>
    </component>
</template>

<script>
export default {
    props: {
        // Ruta de navegacion
        to: {
            type: String,
            default: null
        },
        // Estilo
        type: {
            type: String,
            default: 'primary'
        },
        // Ancho 
        fullWidth: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        tag() {
            return this.to ? 'router-link' : 'button';
        },
        // Matriz de clases CSS para aplicar estilos al botón
        buttonClass() {
            return [
                'py-2 px-4 rounded-lg inline-block transition-all duration-300',
                this.fullWidth ? 'w-full' : '',
                {
                    'bg-white text-purple-600 hover:bg-purple-700': this.type === 'primary',
                    'bg-gray-500 text-white hover:bg-gray-600': this.type === 'secondary',
                    'bg-red-500 text-white hover:bg-red-600': this.type === 'danger',
                    'bg-green-500 text-white hover:bg-green-600': this.type === 'success',
                }
            ];
        }
    },
    methods: {
        handleClick(event) {
            // Si el botón no es un router-link, emite un evento 'click'
            if (!this.to) {
                this.$emit('click', event);
            }
        }
    }
};
</script>