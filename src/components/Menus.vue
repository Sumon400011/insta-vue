<template>
    <a-menu v-model="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
            <span class="nav-icon"><i class="fa-solid fa-house"></i></span>
            <span class="nav-text">Home</span>
        </a-menu-item>
        <a-menu-item key="2">
            <span class="nav-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
            <span class="nav-text">Search</span>
        </a-menu-item>
        <a-menu-item key="3">
            <span class="nav-icon"><i class="fa-solid fa-compass"></i></span>
            <span class="nav-text">Explore</span>
        </a-menu-item>
        <a-menu-item key="4">
            <span class="nav-icon"><i class="fa-solid fa-paper-plane"></i></span>
            <span class="nav-text">Message</span>
        </a-menu-item>
        <a-menu-item key="5">
            <span class="nav-icon"><i class="fa-solid fa-heart"></i></span>
            <span class="nav-text">Notification</span>
        </a-menu-item>
        <a-menu-item key="6">
            <span class="nav-icon"><i class="fa-solid fa-user"></i></span>
            <span class="nav-text">Profile</span>
        </a-menu-item>
        <a-menu-item key="7">
            <span class="nav-icon"><i class="fa-solid fa-gear"></i></span>
            <span class="nav-text">Settings</span>
        </a-menu-item>
        <a-menu-item key="8">
            <span class="nav-icon"><i class="fa-solid fa-right-from-bracket"></i></span>
            <span class="nav-text">Log out</span>
        </a-menu-item>
    </a-menu>
</template>

<script setup>
    import {ref} from "vue";
    const selectedKeys = ref(["1"])
</script>

<style scoped>
.nav-icon{
    color: white;
    font-size: 16px;
    margin-right: 15px;
}
.ant-menu{
    padding: 20px 12px;
}
</style>