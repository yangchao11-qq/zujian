<template>
  <div>
    <el-col :span="inputSpan">
      <el-input
        v-if="type === 'textarea'"
        :value="value"
        @input="onInput"
        type="textarea"
        ref="textarea"
        :maxlength="limit"
        v-bind="$attrs"
      ></el-input>
      <el-input
        v-else
        :value="value"
        @input="onInput"
        ref="input"
        :maxlength="limit"
        v-bind="$attrs"
      ></el-input>
    </el-col>
    <el-col
      :span="countSpan"
      :style="{paddingTop: paddingTop + 'px', marginLeft: '10px',lineHeight: lineHeight}"
    >
      <span
        ref="count"
        style="font-size: 12px;"
      >
        还可以输入
        <span style="color: red;">{{valueCount}}</span>
        字
      </span>
    </el-col>
  </div>
</template>

<script>
  // todo 支持更多input的属性
  export default {
    name: "ispInput",
    props: {
      value: String,
      limit: {
        type:Number,
        default: 200
      },
      //选择用哪个输入的选择条件
      type: {
        type: String,
        default: "textarea"
      },
      //这个是布局容器的大小
      inputSpan: {
        type: Number,
        default: 20
      },
      //这个是布局容器的大小
      countSpan: {
        type: Number,
        default: 3
      }
    },
    data () {
      return {
        paddingTop: 0,
        lineHeight: 0,
      }
    },
    computed: {
      valueCount () {
        if(this.isWordsCountExist(this.value)) {
          return this.limit - this.value.length
        } else {
          return this.limit
        }
      },
    },
    methods: {
      onInput (value) {
        this.$emit("input", value)
      },
      isWordsCountExist (val) {
        return typeof val === "string"
      }
    },
    mounted () {
      console.log("-================================")
      console.log(this.value)



      let self = this;
      this.$nextTick(function () {
        if (self.$refs.count) {
           //这个是获取span的元素的字体的大小
          self.lineHeight = window.getComputedStyle(self.$refs.count, null).fontSize
        }
        if(self.type === "textarea") {
          if (self.$refs.textarea) {
            //这个是获取textarea的input的输入框的高度
            /*
             getComputedStyle（）方法用于获取指定元素的 CSS 样式。
             window.getComputedStyle(element, pseudoElement)
              参数说明：
                  element: 必需，要获取样式的元素。
                  pseudoElement: 可选，伪类元素，当不查询伪类元素的时候可以忽略或者传入 null。
              返回值：
                返回的对象是 CSSStyleDeclaration 类型的对象。
            */
            let inputHeight = + window.getComputedStyle(self.$refs.textarea.$el, null).height.split("px")[0];
            //这个是获取span的元素的字体的大小
            let countHeight = + self.lineHeight.split("px")[0];
            //这个是上边撑起的高度paddingTop是用 input输入框的高度减去span字体的大小
            self.paddingTop = inputHeight - countHeight;
          }
        } else {
          if (self.$refs.input) {
            let inputHeight = + window.getComputedStyle(self.$refs.input.$el, null).height.split("px")[0];

            let countHeight = + self.lineHeight.split("px")[0];

            self.paddingTop = inputHeight - countHeight;
          }
        }
      })
    }
  }
</script>

<style scoped lang="scss">

</style>
