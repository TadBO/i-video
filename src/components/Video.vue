<template>
    <div style="width: 100%">
        <div>
            <text class="button" @click="handleClick">测试点击切换</text>
            <channel-select :channel="channel"></channel-select>
            <source-select :source-list="freeUrl"></source-select>
            <text class="button" @click="handleBackClick" v-if="preUrl.length > 0">返回</text>
        </div>
        <web ref="webview" style="width: 100%; height: calc(100vh - 60px)" :src="url" @pagestart="handlePageStart"
             @error="handleError"></web>
    </div>
</template>

<script>
    import { source } from "../utils/fetch";
    import ChannelSelect from './ChannelSelect';
    import SourceSelect from './SourceSelect';
    const webview = weex.requireModule('webview');
    export default {
        name: "Video",
        components: {
            ChannelSelect,
            SourceSelect
        },
        data() {
            return {
                channel: [],
                url: 'https://m.v.qq.com/',
                freeUrl: [],
                selectedUrl: '',
                preUrl: [],
            };
        },
        methods: {
            handleClick() {
                console.log(webview);
                this.url = `${this.selectedUrl}${this.url}`;
                webview.reload(this.$refs.webview);
                console.log('newUrl=======================', this.url);
            },
            handlePageStart(e) {
                const {url} = e;
                console.log('url=============================', url);
                this.url = url;
            },
            handleError(e) {
                console.log('error=============================', e);
            },
            handleBackClick() {

            }
        },
        created() {
            source.getAllList().then(({data}) => {
                const { platformlist, list } = data;
                const newPlatformList = [];
                platformlist.forEach((item) => {
                    newPlatformList.push(item.name);
                });
                this.channel = newPlatformList;
                const newList = [];
                list.forEach((item) => {
                    newList.push(item.name);
                });
            });
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
