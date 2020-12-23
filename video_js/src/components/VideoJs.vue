<template>
    <div style="width: 100%;height: 100%">
        <video ref="videoPlayer" class="video-js" width="800" height="400"></video>
    </div>
</template>

<script>
    import videojs from 'video.js'
    export default {
        name: "VideoJs",
        data() {
            return{
                options: {
                    autoplay: false,
                    controls: true,
                    sources: [
                        {
                            src:
                            "https://fuh02.heymom.com.cn/crm/upload/b2561f50-222e-11ea-8d97-2d663a1e2c588d15f7b0-189d-11e9-8328-87384a8eb1751.mp4",
                            // "https://fuh02.heymom.com.cn/crm/upload/f5b8ff40-7e0c-11e9-a2ce-dbb2b70e1f72%E6%AD%A3%E5%BF%B55.mp4",
                            type: "video/mp4"
                        }
                    ]
                }
            }
        },
        mounted() {
            this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
                console.log('onPlayerReady', this);
            })
        },
        beforeDestroy() {
            if (this.player) {
                this.player.dispose()
            }
        }
    }
</script>

<style scoped>

</style>
