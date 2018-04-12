<template>
<div class="wrap">  
    <header class="head">头部</header>  
    <div class="main">  
        <div class="panel">  
            <pre>父容器position:relative; 子元素position:absolute;</pre>
        </div>
        <button class="linktosort" @click="linkToSort">link</button>  
    </div>  
    <footer class="foot">底部</footer>  
</div>  
</template>

<script>

export default {

  data () {
    return {
    }
  },
  methods: {
    linkToSort() {
        this.$router.push({path:'/sort'})
    }
  }
}
</script>

<style>
.head {  
    height: 1rem;  
    line-height: 1rem;  
    text-align: center;  
    background-color: hotpink;  
}  
  
.foot {  
    height: 1rem;  
    line-height: 1rem;
    width:100%; 
    position:absolute; 
    text-align: center;  
    background-color: pink;
    bottom: 0;  
}  

.main {  
    overflow:hidden;
    position:absolute;
    top:1rem;
    left:0;
    right:0;
    bottom:1rem;
}  

</style>
