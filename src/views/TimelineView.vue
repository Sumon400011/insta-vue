<template>
  <main>
    <Container>
      <Carousel />
    </Container>
    <Container>
      <div :style="{ padding: '24px', background: '#fff', textAlign: 'center', height: '5000px' }">
        <h1>
          this is time line
        </h1>
      </div>
    </Container>
  </main>
</template>
<script setup>
  import Container from "../components/Container.vue";
  import Carousel from "../components/Carousel.vue";
</script>