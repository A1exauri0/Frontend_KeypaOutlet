<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 class="text-3xl font-bold text-center text-gray-700 mb-8">¡Contáctanos!</h1>

            <form class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-600">Nombre</label>
                    <input type="text"
                        class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-600">Correo Electrónico</label>
                    <input type="email"
                    class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-600">Mensaje</label>
                    <textarea rows="4"
                    class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                </textarea>
                </div>

                <button type="submit"
                    class="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
                    Enviar </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
};
</script>