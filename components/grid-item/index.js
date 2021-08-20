// pages/grid-item/index.js
Component({
  externalClasses: ['ac-class'],
  relations: {
    '../grid/index': {
      type: 'parent'
    }
  },
  data: {
    width: '33.33%'
  }
})
