<template>
    <div style="width: 100%">
        <div>
            <channel-select @channelSelect="handleChannelChange" :channel="channel"></channel-select>
            <source-select @sourceChange="handleSourceChange" :source-list="freeUrl"></source-select>
            <text class="button" @click="handleBackClick" v-if="webUrl.indexOf('?url=') != -1">返回</text>
        </div>
        <web canGoBack="true" ref="webview" style="width: 100%; height: calc(100vh - 60px)" :src="webUrl" @pagestart="handlePageStart"
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
                res: null,
                webUrl: 'https://m.v.qq.com/',
            };
        },
        methods: {
            handlePageStart(e) {
                console.log(e);
            },
            handleError(e) {
                console.log('error=============================', e);
            },
            handleBackClick() {
                webview.goBack(this.$refs.webview);
            },
            // 改变视频源加载不同的视频源
            handleChannelChange(index) {
                const { platformlist } = this.res;
                const newData = platformlist[index];
                this.url = newData.url;
                // 更改源时候重置选中的源url
                this.selectedUrl = '';
                this.webUrl = `${this.selectedUrl}${this.url}`;
                webview.reload(this.$refs.webview);
            },
            // 改变解码地址进行破解并显示视频
            handleSourceChange(index) {
                const { list } = this.res;
                const newData = list[index];
                this.selectedUrl = newData.url;
                this.webUrl = `${this.selectedUrl}${this.url}`;
                webview.reload(this.$refs.webview);
            },
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
                this.freeUrl = newList;
                this.res = data;
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
