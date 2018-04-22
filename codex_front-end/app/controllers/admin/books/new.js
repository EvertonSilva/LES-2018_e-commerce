import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    save(book) {
      this.send('saveBook', book);
    },
    setBookAttr(value) {
      if(Array.isArray(value)) {
        this.get('model').book.set('categories', value);
      } else {
        let attr = value.constructor.modelName;
        attr = (attr === 'price-group') ? "priceGroup" : attr;
        this.get('model').book.set(attr, value);
      }
    },
  }
});
