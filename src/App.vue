<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style  lang="scss">
page {
  height: 100%;
  width: 100%;
}

/* #ifdef H5 */
uni-page-head {
  display: none;
}

uni-page-wrapper{
  height: 100%!important;
}
/* #endif */

</style>
