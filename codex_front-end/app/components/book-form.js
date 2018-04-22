import Component from '@ember/component';

export default Component.extend({

  actions: {
    saveBtnClick(param) {
      this.get('saveAction')(param);
    },
    setBook(value) {
      this.get('setBookAction')(value);
    }
  }
});
