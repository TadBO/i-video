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
                        this.value = event.data
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>
