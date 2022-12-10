<template>
    <a-row :gutter="[30,30]">
        <slot></slot>
    </a-row>
</template>

<style scoped>
img {
    width: 100%;
    height: 100%;
    max-height: 300px;
    max-width: 300px;
    object-fit: cover;
    overflow: hidden;
}
</style>