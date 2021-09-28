<template>
<v-container>
    <template>
        <v-carousel :show-arrows="false">
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
    </template>
    <div><br></div>
    <p class="text-center font-italic">
        "Conozca del Café Colombiano, reconocido internacionalmente como el mejor café suave del mundo.<br>
        Colombia con su geografía, le permite tener diferentes tipos de café .
        Tómese una buena taza y disfrútelo en comidas o postres. <br>

    </p>

    <p class="text-center font-weight-bold font-italic">
        ¡Viva la experiencia del Café de Colombia!"
    </p>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://static.wixstatic.com/media/11062b_120ea5a88c3f486fadddc799cf39d877~mv2.jpg',
          },
          {
            src: 'https://static.wixstatic.com/media/11062b_e9d82203f0db45cd9f55595fa070d5f9~mv2.jpg',
          },
          {
            src: 'https://static.wixstatic.com/media/11062b_ca88a6f079324d7c98963f33c1f2d48f~mv2.jpg',
          },
          {
            src: 'https://static.wixstatic.com/media/11062b_a591888be9c14a8faf564c507e736633~mv2.jpg',
          },
          {
            src: 'https://static.wixstatic.com/media/11062b_760e687d622c4ef1ac446cc4f3472bbf~mv2.jpg',
          },
          {
            src: 'https://static.wixstatic.com/media/11062b_26c1a67631fb4751a24cf4baf40223c6~mv2.jpg',
          },
        ],
      }
    },
  }
</script>