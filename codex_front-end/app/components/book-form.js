import Component from '@ember/component';

export default Component.extend({

  actions: {

    // the two methods above just proxy
    // actions from component to controller
    saveBtnClick(param) {
      this.get('saveAction')(param);
    },
    setBook(value) {
      this.get('setBookAction')(value);
    }
  }
});
