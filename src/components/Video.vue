<template>
   <div style="width: 100%">
       <div>
           <text class="button" @click="pick">Pick</text>
           <text class="button" @click="handleClick">测试点击切换</text>
       </div>
       <web ref="webview" style="width: 100%; height: calc(100vh - 60px)" :src="url" @pagestart="handlePageStart" @error="handleError"></web>
   </div>
</template>

<script>
    const webview = weex.requireModule('webview');
    const picker = weex.requireModule('picker')
    export default {
        name: "Video",
        data() {
            return {
                channel: [],
                url: ' https://m.v.qq.com/cover/9/96sxjj429lictza.html?ptag=v.qq.com%23v.play.adaptor%232&vid=v0032ebahef',
                freeUrl: [],
                selectedUrl: 'http://www.82190555.com/index/qqvod.php?url=',
                value: '',
            };
        },
        methods: {
            pick () {
                picker.pick({
                    items: ['Apple', 'Banana', 'Orange']
                }, event => {
                    if (event.result === 'success') {
                        this.value = event.data
                    }
                })
            },
            handleClick() {
                console.log(webview);
                this.url = `${this.selectedUrl}${this.url}`;
                webview.reload(this.$refs.webview);
                console.log('newUrl=======================',this.url);
            },
            handlePageStart(e) {
                const { url } = e;
                console.log('url=============================', url);
                this.url = url;
            },
            handleError (e) {
                console.log('error=============================',e);
            }
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
