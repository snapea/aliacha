// pages/element/index.js
Component({
  externalClasses: ['ac-class'],

  relations: {
    '../element-group/index': {
      type: 'parent'
    }
  },
  properties: {
    // 左侧标题
    title: {
      type: String
    },
    bgcolor: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: ''
    },
    // 是否展示右侧箭头并开启尝试以 url 跳转
    isLink: {
      type: null,
      value: ''
    },
    // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    url: {
      type: String,
      value: ''
    }
  },
  methods: {
    navigateTo() {
      const { url } = this.data
      console.log(123123)
      if (!this.data.isLink && !url) return

      // wx[this.data.linkType].call(wx, {url});
      wx[this.data.linkType]({url})
    }
  }
})
