<template>
  <div class="waterfall-wrapper">
    <ul class="left-waterfall" ref="left">
      <li class="item" v-for="(item, index) in leftItems" v-bind:style=" {height:item.height+'px'}">{{ index }}{{item}}</li>
    </ul>
    <ul class="right-waterfall" ref="right">
      <li class="item" v-for="(item, index) in rightItems" v-bind:style=" {height:item.height+'px'}">{{ index }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          height: 100
        },
        {
          height: 110
        },
        {
          height: 150
        },
        {
          height: 200
        },
        {
          height: 300
        },
        {
          height: 100
        },{
          height: 222
        },{
          height: 111
        },{
          height: 123
        },{
          height: 451
        },
      ],
      leftItems: [],
      rightItems: []
    }
  },
  mounted () {
    // TODO GET DISPLAY_DATA
    this.updateWaterfall()
  },
  methods: {
    updateWaterfall () {
      const leftHeight = this.$refs.left.clientHeight
      const rightHeight = this.$refs.right.clientHeight
      let item = this.data.shift()
      console.log(leftHeight)
      console.log(rightHeight)
      if (item == null) {
        return
      }
      if (leftHeight <= rightHeight) {
        this.leftItems.push(item)
      }
      else {
        this.rightItems.push(item)
      }
      this.$nextTick(function () {
        this.updateWaterfall()
      })
    }
  }
}
</script>

<style scoped>

  ul {
    width: 40%
  }

  ul.left-waterfall {
    float: left;
  }

  ul.right-waterfall {
    float: right;
  }

  li.item {
    width: 100%;
    background-color: aqua;
    margin: 10px;
  }

</style>