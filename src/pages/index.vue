<template lang="pug">
div.index
  image.bg-image(:src="background")
  div.bg-swiper
    index-swiper(:list="list" :info="info")
  div.bg_music(v-if="isPlaying" @tap="audioPlay")
    image.musicImg.music_icon(src="../static/images/music_icon.png")
    image.music_play.pauseImg(src="../static/images/music_play.png")
  div.bg_music(v-else @tap="audioPlay")
    image.musicImg(src="../static/images/music_icon.png")
    image.music_play.playImg(src="../static/images/music_play.png")
</template>

<script setup>
import {ref, provide, getCurrentInstance} from 'vue'
import {onHide, onLoad, onShareAppMessage, onShareTimeline, onShow} from '@dcloudio/uni-app'
import IndexSwiper from '../component/index-swiper.vue'

const isPlaying = ref(false)
const list = ref([])
const info = ref({})
const autoplay = ref(false)
const initInfo = ref({})
provide('autoplay', autoplay)

const instance = getCurrentInstance()
const innerAudioContext = uni.createInnerAudioContext()
const background = ref('')

onLoad(() => {
  uni.request({
    url: import.meta.env.VITE_VUE_INIT_JSON,
    success: (res) => {
      initInfo.value = res.data
      innerAudioContext.src = res.data.background_music
      innerAudioContext.autoplay = true
      innerAudioContext.loop = true
      innerAudioContext.onPlay(onPlay)
      innerAudioContext.onPause(onPause)

      background.value = res.data.background
      info.value = res.data.info

      const result = []
      let animations = ['fadeInLeft', 'slideInDown', 'rotateInDownRight', 'rollIn', 'jackInTheBox', 'flip']
      let images = res.data.images
      for (let i = 0; i < images.length; i++) {
        result.push({
          url: images[i],
          show: i === 0,
          class: animations[i]
        })
      }
      list.value = result
      uni.setNavigationBarTitle({title: res.data.title})

    }
  });
})

onShareAppMessage(() => {
  return {
    title: initInfo.value.title,
    // 部分机型设置不了封面 默认截取
    // imageUrl: initInfo.value.share_cover,
    path: '/pages/index',
  }
})

onShareTimeline(() => {
  return {
    title: initInfo.value.title,
    imageUrl: initInfo.value.share_cover,
    path: '/pages/index',
  }
})

onShow(() => {
  autoplay.value = true
})

onHide(() => {
  autoplay.value = false
})

const audioPlay = () => {
  if (innerAudioContext.paused) {
    innerAudioContext.play()
  } else {
    innerAudioContext.pause()
  }
}

const onPlay = () => {
  isPlaying.value = true
}

const onPause = () => {
  isPlaying.value = false
}
</script>

<style lang="scss">
.bg-image {
  position: fixed;
  width: 100%;
  height: 100%;
}

@-webkit-keyframes musicRotate {
  from {
    -webkit-transformb: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes musicRotate {
  from {
    -webkit-transformb: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-ms-keyframes musicRotate {
  from {
    -webkit-transformb: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-o-keyframes musicRotate {
  from {
    -webkit-transformb: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes musicRotate {
  from {
    -webkit-transformb: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes musicStop {
  from {
    -webkit-transform: rotate(20deg);
  }
  to {
    -webkit-transform: rotate(0deg);
  }
}
@-moz-keyframes musicStop {
  from {
    -webkit-transform: rotate(20deg);
  }
  to {
    -webkit-transform: rotate(0deg);
  }
}
@-ms-keyframes musicStop {
  from {
    -webkit-transform: rotate(20deg);
  }
  to {
    -webkit-transform: rotate(0deg);
  }
}
@-o-keyframes musicStop {
  from {
    -webkit-transform: rotate(20deg);
  }
  to {
    -webkit-transform: rotate(0deg);
  }
}
@keyframes musicStop {
  from {
    -webkit-transform: rotate(20deg);
  }
  to {
    -webkit-transform: rotate(0deg);
  }
}
@-webkit-keyframes musicStart {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(20deg);
  }
}
@-moz-keyframes musicStart {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(20deg);
  }
}
@-ms-keyframes musicStart {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(20deg);
  }
}
@-o-keyframes musicStart {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(20deg);
  }
}
@keyframes musicStart {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(20deg);
  }
}
@-webkit-keyframes infoAnimation {
  0% {
    -webkit-transform: scale(1) translate(0, 0);
  }
  50% {
    -webkit-transform: scale(0.9) translate(5px, 5px);
  }
  100% {
    -webkit-transform: scale(1) translate(0, 0);
  }
}
@-moz-keyframes infoAnimation {
  0% {
    -webkit-transform: scale(1) translate(0, 0);
  }
  50% {
    -webkit-transform: scale(0.9) translate(5px, 5px);
  }
  100% {
    -webkit-transform: scale(1) translate(0, 0);
  }
}
@-ms-keyframes infoAnimation {
  0% {
    -webkit-transform: scale(1) translate(0, 0);
  }
  50% {
    -webkit-transform: scale(0.9) translate(5px, 5px);
  }
  100% {
    -webkit-transform: scale(1) translate(0, 0);
  }
}
@-o-keyframes infoAnimation {
  0% {
    -webkit-transform: scale(1) translate(0, 0);
  }
  50% {
    -webkit-transform: scale(0.9) translate(5px, 5px);
  }
  100% {
    -webkit-transform: scale(1) translate(0, 0);
  }
}
@keyframes infoAnimation {
  0% {
    -webkit-transform: scale(1) translate(0, 0);
  }
  50% {
    -webkit-transform: scale(0.9) translate(5px, 5px);
  }
  100% {
    -webkit-transform: scale(1) translate(0, 0);
  }
}
.index {
  height: 100%;
  position: relative;
  .img {
    width: 100%;
    height: 100%;
  }
  .bg-swiper {
    width: 100%;
    height: 100%;
  }
  .inv {
    position: absolute;
    top: 20rpx;
    left: 89rpx;
    width: 572rpx;
    height: 69rpx;
    z-index: 9;
  }
}
.bg_music {
  position: fixed;
  right: 10rpx;
  top: 100rpx;
  width: 100rpx;
  z-index: 99;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .musicImg {
    width: 60rpx;
    height: 60rpx;
  }
  .music_icon {
    animation: musicRotate 3s linear infinite;
  }
  .music_play {
    width: 28rpx;
    height: 60rpx;
    margin-left: -10rpx;
    transform-origin: top;
    -webkit-transform: rotate(20deg);
  }
  .playImg {
    animation: musicStop 1s linear forwards;
  }
  .pauseImg {
    animation: musicStart 1s linear forwards;
  }
}
</style>
