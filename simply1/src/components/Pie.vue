<template>
<v-footer dark padless>
    <v-card class="flex" flat tile>
        <v-spacer></v-spacer>
        <v-card-title class="brown lighten-1  text-center ">
            <br>
            <br>
            <strong class=" brown lighten-1 lighten-5--text text-center">CONTACTO: <br>
            </strong>
            <strong class="darken-4--text"> <br>

                Oficina principal: Carrera 123 # 45 - 67 Bogotá<br>
                Tel:(+57) 3106185163</strong>

            <v-spacer></v-spacer>

            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
                <v-icon size="24px">
                    {{ icon }}
                </v-icon>
            </v-btn><br>
            <br>
        </v-card-title>

        <v-card-text class=" brown darken-4 lighten-5--text text-justify-left">

            <strong>© Simply Coffee / una marca de Apollo XVIII inc — {{ new Date().getFullYear() }}<br>
                © Todos los derechos reservados </strong>
        </v-card-text>
    </v-card>
</v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>
