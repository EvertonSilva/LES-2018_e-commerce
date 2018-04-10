import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        id: 1,
        title: "Memories from the underground",
        author: "Dostoievski, Fiodor"
      },
      {
        id: 2,
        title: "The Demons",
        author: "Dostoievski, Fiodor"
      },
      {
        id: 3,
        title: "Lullaby",
        author: "Palahniuk, Chuck"
      },
    ];
  },
});
