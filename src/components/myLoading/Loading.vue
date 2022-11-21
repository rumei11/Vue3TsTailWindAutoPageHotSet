<template>
    <div class="my-loading" v-show="isShow">
        <span>!&nbsp;系统加载中...</span>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const isShow = ref<boolean>(false);

const hide = () => isShow.value = false;

const show = () => isShow.value = true;

let timeBar: any;

const startTime = () => {
    clearTimeout(timeBar);
    timeBar = setTimeout(() => {
        hide();
        clearTimeout(timeBar);
    }, 2000)
}

watch(isShow, _ => {
    isShow && startTime();
}, {
    immediate: true
})

defineExpose({
    hide,
    show
})
</script>


<style lang="scss">
.my-loading {
    width: 200px;
    height: 36px;
    position: fixed;
    left: calc(50% - 100px);
    top: 40px;
    border-radius: 4px;
    background-color: #b3dcdc;
    color: #e43131;
    font-weight: 600;
    font-size: 16px;
    line-height: 36px;
    overflow: hidden;
    text-align: center;
}
</style>