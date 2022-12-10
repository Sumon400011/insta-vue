<template>
    <div class="profile-container">
        <ProfileHeader />
        <a-divider />
        <ProfileGrids>
            <a-col 
                :span="8"
                v-for="prof in profiles"
                :key="prof.id"
            >
            
                <img :src="prof.img" :alt="prof.name" />
            </a-col>
        </ProfileGrids>
    </div>
</template>

<script setup>
    import ProfileHeader from "./ProfileHeader.vue"
    import ProfileGrids from "./ProfileGrids.vue"
    import profiles from "../datas/profiles.json"
</script>
<style scoped>
.profile-container{
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
}
img {
    width: 100%;
    height: 100%;
    max-height: 300px;
    max-width: 300px;
    object-fit: cover;
    overflow: hidden;
}
</style>