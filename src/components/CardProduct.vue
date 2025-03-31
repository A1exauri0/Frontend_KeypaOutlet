<template>
    <div class="bg-white p-4 rounded-lg shadow-md">
        <img :src="image" :alt="title" class="w-full h-32 object-cover rounded-lg mb-4">
        <h3 class="font-semibold">{{ title }}</h3>
        <!-- Enlace condicional. Solo se renderiza si 'to' tiene valor. -->
        <router-link v-if="to" :to="to" class="text-yellow-600 mt-2 inline-block hover:underline">
            {{ linkText }}
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String, // La propiedad debe ser de tipo String
            required: true // Propiedad obligatoria
        },
        title: {
            type: String,
            required: true 
        },
        to: {
            type: String, 
            default: null // Si no se proporciona, por defecto será null
        },
        linkText: {
            type: String, 
            default: 'Ver más' // Si no se proporciona, por defecto tendrá el texto 'Ver más'
        }
    }
};
</script>
