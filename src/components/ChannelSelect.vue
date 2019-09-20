<template>
    <text class="button" @click="handlePick">选择播放源</text>
</template>

<script>
    const picker = weex.requireModule('picker')
    export default {
        name: "ChannelSelect",
        props: {
            channel: Array,
        },
        data() {
            return {
            }
        },
        methods: {
            handlePick() {
                picker.pick({
                    items: this.channel,
                    index: 0,
                }, event => {
                    if (event.result === 'success') {

                    }
                })
            }
        },
        created() {
            console.log(this.channel);
        }
    }
</script>

<style scoped>

</style>
