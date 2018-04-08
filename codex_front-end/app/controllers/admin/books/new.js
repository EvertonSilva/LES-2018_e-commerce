import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    selectEntity: function(event) {
      const model = this.get('model');
      const selectedId = event.target.id;
      const collection = model[selectedId];
      const book = model.book;
      const entity = collection.store.peekRecord(collection.modelName, event.target.value);
      book.set(collection.modelName, entity);
    }
  }
});
