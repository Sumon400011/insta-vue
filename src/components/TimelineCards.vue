<template>
    <a-card hoverable>
        <template #cover>
            <slot name="cover"></slot>
        </template>
        
        <a-card-meta>
            <template #avatar>
                <slot name="avatar"></slot>
            </template>

            <template #title>
                <slot name="title"></slot>
            </template>
            <template #description>
                <slot name="description"></slot>
            </template>
        </a-card-meta>
    </a-card>
</template>

<script setup>
    const props = defineProps(["data"]);
</script>

<style scoped>
    .ant-card-meta{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }
    .ant-card-meta-detail{
        width: 100%;
    }
    /* .ant-card-meta .ant-card-meta-detail .ant-card-meta-title{
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 0px!important;
    }
    .ant-card-meta .ant-card-meta-detail > div{
        margin-bottom: 0px!important;
    } */
    .ant-avatar{
        height: 40px;
        width: 40px;
    }
    .ant-card{
        margin-bottom: 20px;
        border: 1px solid rgba(219, 219, 219, 1);
        border-radius: 10px;
        overflow: hidden;
        background-color: white;
    }
</style>