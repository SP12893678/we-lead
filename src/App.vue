<template>
  <div id="app">
      <DialogBox></DialogBox>
      <SnackBar></SnackBar>
      <Loader></Loader>
      <router-view/>
  </div>
</template>

<script>
import Loader from '@/components/utils/Loader'
import SnackBar from '@/components/utils/SnackBar'
import DialogBox from '@/components/utils/DialogBox'

export default {
  components:{Loader,SnackBar,DialogBox},

  name: 'App'
}
</script>

