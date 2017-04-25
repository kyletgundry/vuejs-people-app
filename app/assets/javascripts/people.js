/* global Vue */

document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      people: [
        {name: "Peter", bio: "He is the teacher!", bioVisible: false},
        {name: "Anu", bio: "She is a student", bioVisible: false},
        {name: "Rebecca", bio: "Loves Oysters", bioVisible: false},
        {name: "Erika", bio: "Just went to London", bioVisible: false}
      ],
      newName: "",
      newBio: ""
    },
    methods: {
      toggle: function(inputPerson) {
        /*if (inputPerson.bioVisible === true) {
          inputPerson.bioVisible = false;
        } else {
          inputPerson.bioVisible = true;
        } */
        inputPerson.bioVisible = !inputPerson.bioVisible;
      },
      addPerson: function() {
        this.people.push({name: this.newName, bio: this.newBio, bioVisible: false});
        this.newName = "";
        this.newBio = "";
      },
      deletePerson: function(inputPerson) {
        var index = this.people.indexOf(inputPerson);
        this.people.splice(index, 1);
      }
    }
  });
});
