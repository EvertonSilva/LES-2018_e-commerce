import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        id: 1,
        title: "Crime and Punishment",
        author: "Dostoievski, Fiodor",
        price: 0.00,
        pages: 180,
        publisher: "Editora 34",
        categories: ["Drama", "Fiction"]
      }
      ,{
        id: 2,
        title: "The Demons",
        author: "Dostoievski, Fiodor",
        price: 0.00,
        pages: 250,
        publisher: "Editora 34",
        categories: ["Drama", "Fiction"]
        }
      ,{
        id: 3,
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
