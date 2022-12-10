<template>
    <div>
        <a-button type="primary" style="margin-bottom: 16px">
            click
        </a-button>
        <a-menu v-model="state.selectedKeys" theme="dark" mode="inline">
            <RouterLink to="/">
                <a-menu-item key="1">
                
                    <template #icon>
                        <span class="nav-icon"><i class="fa-solid fa-house"></i></span>
                    </template>
                    <span class="nav-text">Home</span>
                </a-menu-item>
            </RouterLink>
            <a-menu-item key="2">
                <template #icon>
                    <span class="nav-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
                </template>
                <span class="nav-text">Search</span>
            </a-menu-item>
            <a-menu-item key="3">
                <template #icon>
                    <span class="nav-icon"><i class="fa-solid fa-compass"></i></span>
                </template>
                <span class="nav-text">Explore</span>
            </a-menu-item>
            <a-menu-item key="4">
                <template #icon>
                    <span class="nav-icon"><i class="fa-solid fa-paper-plane"></i></span>
                </template>
                <span class="nav-text">Message</span>
            </a-menu-item>
            <a-menu-item key="5">
                <template #icon>
                    <span class="nav-icon"><i class="fa-solid fa-heart"></i></span>
                </template>
                <span class="nav-text">Notification</span>
            </a-menu-item>
            <RouterLink to="/profile">
                <a-menu-item key="6">
                    <!-- <RouterLink to="/profile"> -->
                        <template #icon>
                            <span class="nav-icon"><i class="fa-solid fa-user"></i></span>
                        </template>
                        <span class="nav-text">Profile</span>
                    <!-- </RouterLink> -->
                </a-menu-item>
            </RouterLink>
            <a-menu-item key="7">
                <template #icon>
                    <span class="nav-icon"><i class="fa-solid fa-gear"></i></span>
                </template>
                <span class="nav-text">Settings</span>
            </a-menu-item>
            <a-menu-item key="8">
                <template #icon>
                    <span class="nav-icon"><i class="fa-solid fa-right-from-bracket"></i></span>
                </template>
                <span class="nav-text">Log out</span>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script setup>
    import { reactive } from "vue";
    import { RouterLink } from "vue-router";
    const state = reactive({
      selectedKeys: ['1'],
    });
</script>

<style scoped>
.nav-icon{
    color: white;
    font-size: 16px;
    /* margin-right: 15px; */
}
.ant-menu{
    padding: 20px 12px;
}
</style>