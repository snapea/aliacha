// pages/grid/index.js
Component({
  externalClasses: ['ac-class'],
  properties: {
    topBorder: {
      type: Boolean,
      value: false
    }
  },
  relations: {
    '../grid-item/index': {
      type: 'child',
      linked() {
        this.setGridItemWidth();
      },
      linkChanged() {
        this.setGridItemWidth();
      },
      unlinked() {
        this.setGridItemWidth();
      }
    }
  },
  methods: {
    setGridItemWidth() {
      const nodes = this.getRelationNodes('../grid-item/index');
      const width = 100 / nodes.length;
      nodes.forEach(item => {
        item.setData({
          'width': width + '%'
        });
      });
    }
  },
  ready() {
    this.setGridItemWidth();
  }
})
