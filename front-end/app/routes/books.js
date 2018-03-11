import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        title: "Crime and Punishment",
        author: "Dostoievski, Fiodor",
        price: 0.00,
        pages: 180,
        publisher: "Editora 34",
        categories: ["Drama", "Fiction"]
      }
      ,{
        title: "The Demons",
        author: "Dostoievski, Fiodor",
        price: 0.00,
        pages: 250,
        publisher: "Editora 34",
        categories: ["Drama", "Fiction"]
      }
      ,{
        title: "Notes from the Underground",
        author: "Dostoievski, Fiodor",
        price: 0.00,
        pages: 100,
        publisher: "Editora 34",
        categories: ["Drama", "Fiction"]
      }
    ]
  }
});
