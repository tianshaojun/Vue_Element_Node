<template>
  <ul class="list">
    <li 
       v-for="(item, index) in count" 
       :key="index" 
       :class="{'active': isActive == index}"
       @click="handleChange(index)">
       {{ item }}
    </li>
  </ul>
</template>

<script>
let count = ['表单效验基本用法','表单效验高级用法','333'];
export default {
  name: 'home',
  data() {
    return {  
      count: count,
      isActive: 0
    }
  },
  methods: {
     handleChange(i) {
        this.isActive = i;
        if(i == 0) {
           this.$router.push({
              path: "/form"
           });
        }
        if (i == 1) {
          this.$router.push({
            path: '/form2'
          })
        }
      }
  }
}
</script>

<style>
  * {
    margin:0; 
    padding:0;
  }
  .list {
    list-style: none;
    width:100%;
  }
  .list li {
    width: 98%;
    height: 30px;
    background: #E8F3FE;
    margin: 10px auto;
    line-height: 30px;
    cursor: pointer;
    text-align: center;
    color: #7DBCFC;
  }
  .list li.active {
    background: lightgreen;
    color: #fff;
  }
</style>