<template>
  <div class="fluid container">
    <div class="container-box">
        <draggable class="list-group" v-model="list" @start="isDragging=true" @end="isDragging=false"> 
          <transition-group class="container" type="transition" :name="'flip-list'">
            <div class="color-items" v-for="element in list" :key="element.text" :style="{background:element.text}">{{element.text}}</div> 
          </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'hello',
  components: {
    draggable
  },
  data () {
    return {
        list:[{
            text: "Aquamarine",
        }, {
            text: "Hotpink"
        }, {
            text: "Gold"
        }, {
            text: "Crimson"
        }, {
            text: "Blueviolet"
        }, {
            text: "Lightblue"
        }, {
            text: "Cornflowerblue"
        }, {
            text: "Skyblue"
        }, {
            text: "Burlywood"
        }],
        editable:true,
        isDragging: false,
        delayedDragging:false
    }
  },
  methods:{
    // orderList () {
    //   this.list = this.list.sort((one,two) =>{return one.order-two.order; })
    // },
  },
  computed: {
    dragOptions () {
      return  {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      };
    }
  },
  watch: {
    // isDragging (newValue) {
    //   if (newValue){
    //     this.delayedDragging= true
    //     return
    //   }
    // }
  }
}
</script>

<style>
.container{
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content:space-around;
}
.color-items{
    height:100px;
    width:100px;
    text-align: center;
    margin-top: 30px;
    cursor: move;
}
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: .5;
  background: #C8EBFB;
}
</style>
