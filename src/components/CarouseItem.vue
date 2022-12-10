<template>
    <div class="slide-card">
        <div class="slide-card-img">
            <slot name="img"></slot>
        </div>
        <div class="slide-card-content">
            <slot name="name"></slot>
        </div>
    </div>
</template>

<style scoped>
.slide-card{
    padding: 5px;
}
.slide-card-img{
    height: 56px;
    width: 56px;
    overflow: hidden;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 10px auto;
}
.slide-card-img img {
    height: 56px;
    width: 56px;
    border-radius: 50%;
    object-fit: cover;
}
.slide-card-content,
.slide-card-content p{
    text-align: center;
    font-size: 10px;
    font-weight: 400;
    line-height: 120%;
    color: #000;
}
</style>