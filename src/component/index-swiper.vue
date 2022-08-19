<template lang="pug">
div.box(style="height: 100%")
  swiper.swiper(
    :autoplay="autoplay"
    circular
    :vertical="true"
    @change="change"
    @animationfinish="animationFinish"
    :duration="300"
    :interval="6000"
  )
    block(v-for="(item, index) in list" :key="index")
      swiper-item.item
        div.animate-ele-warp(v-show="item.show")
          div.animate-ele.animated(:class="[item.class]" style="top: 0; left: 0; animation-delay: 0.2s")
            image.animate-img.slide-image(mode="aspectFill" lazy-load :src="item.url")
        // 第一张动画
        div.animate-ele-warp(v-if="showOverlay0 && index === 0")
          div.animate-ele.animated.zoomIn(style="animation-duration: 3s; animation-delay: 0.2s")
            image.animate-img(src="../static/images/invitation.png" style="width: 710rpx; height: 95%")
          div.animate-ele.animated.fadeInUp(style="animation-duration: 1.5s; animation-delay: 1.8s")
            image.animate-img(src="../static/images/loveistrue.png" style="bottom: 80rpx; left: 12rpx; width: 687rpx; height: 17rpx")
          div.animate-ele.animated.fadeInRight(style="left: 0; animation-duration: 1.5s; animation-delay: 1.8s")
            div.info
              div.content
                h6.info-title {{ info.name }}
                p.info-content {{ info.date }}
                p.info-content {{ info.time }}
                p.info-content {{ info.hotel }}
                p.info-content {{ info.detail }}
                image.img_footer(src="../static/images/we.png")
        // 第二张
        div.animate-ele-warp(v-if="showOverlay1 && index === 1")
          div.animate-ele.animated.zoomIn(style="animation-duration: 2.5s; animation-delay: 0.2s")
            image.animate-img(src="../static/images/zoomBack.png" style="height: 97%; width: 710rpx")
          div.animate-ele.animated.fadeInUp(style="height: 25%; left: 65rpx; animation-duration: 1.5s")
            image.animate-img(src="../static/images/thelove.png" style="width: 632rpx; height: 150.968rpx")
          div.animate-ele.animated.fadeInUp( style="height: 50%; left: 40%; top: 200rpx; animation-duration: 1.5s; animation-delay: 1.5s")
            image.animate-img(src="../static/images/marryu.png" style="width: 122rpx; height: 158rpx")
        // 第三张
        div.animate-ele-warp(v-if="showOverlay2 && index === 2")
          div.animate-ele.animated.zoomIn(style="animation-delay: 0.5s")
            image.animate-img(src="../static/images/kuang.png" style="width: 711rpx; height: 97%")
          div.animate-ele.animated.fadeInDown(style="animation-duration: 1.5s; animation-delay: 0.8s")
            image.animate-img(src="../static/images/loveistrue.png" style="left: 130rpx; top: 25rpx; width: 437rpx; height: 12rpx")
          div.animate-ele.animated.fadeInRight(style="animation-duration: 1.5s; animation-delay: 1s")
            image.animate-img(src="../static/images/kiss.png" style="top: 250rpx; right: 100rpx; width: 135.968rpx; height: 387.968rpx")
          div.animate-ele.animated.fadeInUp(style="animation-duration: 1.5s; animation-delay: 1.2s")
            image.animate-img(src="../static/images/wonderful.png" style="right: 70rpx; bottom: 65rpx; width: 326rpx; height: 54.968rpx")
          div.animate-ele.animated.zoomIn(style="nimation-duration: 1.5s; animation-delay: 0.8s")
            image.animate-img(src="../static/images/thelove.png" style="width: 534.968rpx; height: 128rpx; left: 77rpx; top: 80rpx")
        // 第四张
        div.animate-ele-warp(v-if="showOverlay3 && index === 3")
          div.animate-ele.animated.zoomIn(style="animation-delay: 0.3s")
            image.animate-img(src="../static/images/kuang.png" style="width: 711rpx; height: 97%")
          div.animate-ele.animated.fadeInLeft(style="animation-duration: 1.5s; animation-delay: 1.2s")
            image.animate-img(src="../static/images/happiness.png" style="left: 30rpx; top: 35rpx; width: 380rpx; height: 168.968rpx")
          div.animate-ele.animated.fadeInUp(style="animation-duration: 1.5s; animation-delay: 1.5s")
            image.animate-img(src="../static/images/goodtime.png" style="bottom: 60rpx; right: 70rpx; width: 294rpx; height: 54rpx")
        // 第五张
        div.animate-ele-warp(v-if="showOverlay4 && index === 4")
          div.animate-ele.animated.zoomIn(style="animation-delay: 0.3s")
            image.animate-img(src="../static/images/kuang.png" style="width: 711rpx; height: 97%")
          div.animate-ele.animated.zoosmIn(style="animation-duration: 1.5s; animation-delay: 0.5s")
            image.animate-img(src="../static/images/goodtime2.png" style="left: 30rpx; top: 35rpx; width: 306.968rpx; height: 468.968rpx")
        // 第六张
        div.animate-ele-warp(v-if="showOverlay5 && index === 5")
          div.animate-ele.animated.fadeIn(style="animation-delay: 1.5s")
            image.animate-img(src="../static/images/kuang.png" style="width: 711rpx; height: 97%")
          div.animate-ele.animated.zoomIn(style="animation-duration: 1.5s; animation-delay: 0.5s")
            image.animate-img(src="../static/images/happiness.png" style="left: 30rpx; top: 35rpx; width: 339rpx; height: 149rpx")
          div.animate-ele.animated.fadeInRight(style="animation-duration: 1.5s; animation-delay: 0.8s")
            image.animate-img(src="../static/images/freedom.png" style="left: 30rpx; bottom: 250rpx; width: 137rpx; height: 317rpx")
          div.animate-ele.animated.fadeInUp(style="animation-duration: 1.5s; animation-delay: 1s")
            image.animate-img(src="../static/images/celebaration.png" style="left: 30rpx; bottom: 65rpx; width: 435.968rpx; height: 96rpx")
</template>

<script setup>
import {ref, onMounted, inject} from 'vue'

const props = defineProps({
  list: ref([]),
  info: ref({}),
})

const autoplay = inject('autoplay')

const showOverlay0 = ref(false)
const showOverlay1 = ref(false)
const showOverlay2 = ref(false)
const showOverlay3 = ref(false)
const showOverlay4 = ref(false)
const showOverlay5 = ref(false)
const changeFlag = ref(false)
const lastIndex = ref(0)

onMounted(function () {
  console.log(props.list)
})

setTimeout(() => {
  showOverlay0.value = true
}, 1500)

const change = () => {
  changeFlag.value = true
}

const animationFinish = val => {
  if (!changeFlag.value) {
    return
  }

  showOverlay0.value = val.detail.current === 0
  showOverlay1.value = val.detail.current === 1
  showOverlay2.value = val.detail.current === 2
  showOverlay3.value = val.detail.current === 3
  showOverlay4.value = val.detail.current === 4
  showOverlay5.value = val.detail.current === 5
  props.list[lastIndex.value].show = false
  props.list[val.detail.current].show = true
  let lastIndexCp = lastIndex.value
  lastIndex.value = val.detail.current
  changeFlag.value = false
  if (val.detail.current === 0 && lastIndexCp + 1 === props.list.length) {
    // 循环完后停留在第一张
    autoplay.value = false
  }
}
</script>

<style lang="scss" scoped>
.animate-ele-warp {
  width: 100%;
  height: 100%;
  transform-origin: center top;
  position: absolute;
  z-index: 3;
  transform: translate3d(0px, 0px, 3px);
  pointer-events: none;
  .animate-ele {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 20rpx;
    top: 20rpx;
    z-index: 3;
    pointer-events: none;
    .animate-img {
      position: absolute;
    }
  }
}

.box {
  position: relative;
  height: 100%;
}

.swiper {
  height: 100%;
  width: 100%;
  .item {
    width: 100%;
    height: 100%;
    image {
      width: 100%;
      height: 100%;
      display: block;
    }
    .info {
      width: 630rpx;
      background: rgba(255, 255, 255, 0.75);
      z-index: 9;
      position: absolute;
      bottom: 120rpx;
      left: 50rpx;
      padding: 10rpx;
      animation: infoAnimation 12s linear infinite;
    }
  }
}

.swiper .content {
  width: 626rpx;
  border: 1rpx solid #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-bottom: 30rpx;
  .info-title {
    font-size: 50rpx;
    height: 100rpx;
    line-height: 100rpx;
  }
  .info-content {
    font-size: 24rpx;
    height: 60rpx;
    line-height: 60rpx;
  }
  .img_footer {
    position: absolute;
    bottom: 10rpx;
    left: 53rpx;
    z-index: 99;
    height: 14rpx;
    width: 520rpx;
  }
}
</style>
