<template>
  <main>
    <Container>
      <Carousel />
    </Container>

    <Container class="timeline-container">
      <TimelineCards 
        v-for="prof in profiles"
        :key="prof.id"
      > 
        <template #cover>
          <img :src="prof.img" :alt="prof.name" />
        </template>

        <template #avatar>
          <a-avatar :src="prof.img" :alt="prof.name" />
        </template>

        <template #title>{{ prof.name }}</template>
        <template #description>{{ prof.email }}</template>
      </TimelineCards>
    </Container>
  </main>
</template>
<script setup>
  import Container from "../components/Container.vue";
  import Carousel from "../components/Carousel.vue";
  import TimelineCards from "../components/TimelineCards.vue";

  import profiles from "../datas/profiles.json"
</script>

<style scoped>
.timeline-container{
  background-color: transparent;
  margin-bottom: 5px;
  padding: 0px;
  /* border-radius: 10px; */
  /* overflow: hidden; */
  /* border: 1px solid rgba(219, 219, 219, 1); */
}
</style>