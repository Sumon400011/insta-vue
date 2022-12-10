<template>
    <swiper
      :slides-per-view="6"
      :space-between="5"
      :navigation="true"
    >
      <swiper-slide v-for="prof in profiles" :key="prof.id">
        <CarouseItem>
            <template #img>
                <img 
                    :src="prof.img" 
                    :alt="prof.name"
                />
            </template>
            <template #name>
                {{ prof.name }}
            </template>
        </CarouseItem>
      </swiper-slide>
    </swiper>
</template>

<script setup>
    // import { onMounted } from 'vue';
    import CarouseItem from './CarouseItem.vue';
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import profiles from "../datas/profiles.json"

    // Import Swiper styles
    import 'swiper/css';

    // const onSwiper = (swiper) => {
    //     console.log(swiper);
    // };
    // const onSlideChange = () => {
    //     console.log('slide change');
    // };

    // onMounted(()=>{
    //     console.log(profiles)
    // })
    
</script>

<style scoped>
.swiper{
    background-color: #ffffff;
    margin-bottom: 15px;
    padding: 10px 5px;
    border-radius: 10px;
    border: 1px solid rgba(219, 219, 219, 1);
}
</style>