<template>
    <!-- <div>
        <a-page-header
            class="demo-page-header"
            style="border: 1px solid rgb(235, 237, 240)"
            :avatar="{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4'}"
        >
            <template #title>Title</template>
            <template #subTitle>sub-title</template>
            <template #extra>
                <a-button key="3">Operation</a-button>
                <a-button key="2">Operation</a-button>
                <a-button key="1" type="primary">Primary</a-button>
            </template>
        </a-page-header>
    </div> -->
    <div class="horizontal-card">
        <div class="avatar">
            <img src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4" alt="">
        </div>
        <div class="card-body">
            <div class="card-title">sumon_mondol</div>
            <div class="d-flex justify-between flex-wrap">
                <div class="card-text"><strong>7</strong> posts</div>
                <div class="card-text"><strong>179</strong> followers</div>
                <div class="card-text"><strong>334</strong> following</div>
            </div>
            <div class="user-name">Sumon Mondol</div>
            <a-button class="ml-auto" key="1" type="primary">Upload Photo</a-button>
        </div>
    </div>
</template>
  
<style scoped>
    .d-flex{
        display: flex;
    }
    .justify-between{
        justify-content: space-between;
    }
    .flex-wrap{
        flex-wrap: wrap;
    }
    .ml-auto{
        margin-left: auto;
        display: inherit;
    }
    .horizontal-card{
        color: rgba(0, 0, 0, 0.85);
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5715;
        list-style: none;
        font-feature-settings: 'tnum';
        position: relative;
        padding: 16px 24px;
        /* background-color: #fff; */
        display: flex;
        align-items: center;
        max-width: 700px;
        width: 100%;
        margin: 0 auto;
    }
    .horizontal-card .avatar{
        width: 150px;
        height: 150px;
        margin-right: 50px;
        box-sizing: border-box;
        font-variant: tabular-nums;
        list-style: none;
        font-feature-settings: 'tnum';
        overflow: hidden;
        white-space: nowrap;
        text-align: center;
        vertical-align: middle;
        background: #ccc;
        border-radius: 50%;
    }
    .horizontal-card .avatar img {
        display: block;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        border-style: none;
    }
    .horizontal-card .card-title{
        color: rgba(0, 0, 0, 0.85);
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .card-body{
        padding: 15px;
        flex-grow: 1;
    }
    .card-body > div {
        margin-bottom: 15px;
    }
    .card-text{
        font-size: 16px;
    }
    
</style>

<script setup>
</script>