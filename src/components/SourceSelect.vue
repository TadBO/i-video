<template>
    <text class="button" @click="pick">切换视频源</text>
</template>

<script>
    const picker = weex.requireModule('picker')
    export default {
        name: "SourceSelect",
        props: {
            sourceList: Array,
        },
        methods: {
            pick() {
                picker.pick({
                    items: this.sourceList,
                    index: 0,
                }, event => {
                    if (event.result === 'success') {
                       this.$emit('sourceChange', event.data);
                    }
                })
            },
        },
        beforeMount() {
            console.log('sl==============================',this.sourceList);
        }
    }
</script>

<style scoped>
    .button {
        font-size: 36px;
        width: 100%;
        color: #41B883;
        text-align: center;
        padding-top: 25px;
        padding-bottom: 25px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(162, 217, 192);
        background-color: rgba(162, 217, 192, 0.2);
    }
</style>
