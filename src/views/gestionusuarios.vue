<template>
  <div>
    <h1>Gestión de Usuarios</h1>
    <v-data-table
      :headers="headers"
      :items="usuarios"
      class="elevation-1"
    >
    <template v-slot:[`item.habilitado`]="{ item }">
        <v-simple-checkbox
            v-model="item.habilitado"
            disabled
        ></v-simple-checkbox>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        usuarios: [
          {
            nombre: 'Edgar Orozco',
            correo: 'edgar.orozco@simplycoffee.com',
            habilitado: true,
          },
          {
            nombre: 'José Luis Rassa',
            correo: 'joseluis.rassa@simplycoffee.com',
            habilitado: true,
          },
          {
            nombre: 'Mauricio Ruiz',
            correo: 'mauricio.ruiz@simplycoffee.com',
            habilitado: true,
          },
          {
            nombre: 'Mónica Angulo',
            correo: 'monica.angulo@simplycoffee.com',
            habilitado: true,
          },
        ],
        headers: [
                {
                    text: 'Nombre',
                    align: 'start',
                    sortable: false,
                    value: 'nombre',
                },
                { text: 'Correo', value: 'correo' },
                { text: 'Habilitado', value: 'habilitado' },
        ],
        classes: [
        ['h1', 'Heading 1', '6rem', '300', '-.015625em', -1]
        ],
      }
    },
  }
</script>
