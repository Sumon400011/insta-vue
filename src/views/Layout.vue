<template>
    <a-layout has-sider>
        <a-layout-sider
        :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"
        >
            <Menus />
        </a-layout-sider>

        <a-layout :style="{ marginLeft: '200px' }">        
            <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
                <TimelineView />
            </a-layout-content>
        
            <a-layout-footer :style="{ textAlign: 'center' }">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>

        <a-layout-sider>
            Sider
        </a-layout-sider>
    </a-layout>
  </template>

<script setup>
    // import { RouterView } from "vue-router";
    import Menus from "../components/menus.vue"
    import TimelineView from "./TimelineView.vue";
</script>

<style scoped>
    .ant-layout{
        min-height: 100vh;
    }
</style>