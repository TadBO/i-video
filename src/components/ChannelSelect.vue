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
                        this.$emit('channelSelect', event.data);
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
