<template>
  <ul class="infinite-list" v-infinite-scroll="" style="overflow:auto">
    <li v-for="i in count" class="infinite-list-item" :key="i">{{ i }}</li>
  </ul>
  <!-- <div>111</div> -->
</template>

<script>
 let count = ['111','222','333'];
//  import infiniteScroll from 'vue-infinite-scroll';
//  vue.use(infiniteScroll)
export default {
  name: 'home',
  data() {
    return {  
      count: count
    }
  },
  // methods: {
  //    load () {
  //       this.count += 2
  //     }
  // }
}
</script>