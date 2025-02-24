import Choices from "choices.js";

var singleFetch = new Choices('#choices-single-remote-fetch', {
  allowHTML: false,
  // searchPlaceholderValue: 'sas',
  itemSelectText: '',
})
  .setChoices(function() {
    return fetch(
      'https://restcountries.com/v3.1/all'
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        return data.map(function(country) {
          return { label: country.name.common, value: country.name.common };
        });
      });
  })
  // .then(function(instance) {
  //   instance.setChoiceByValue('Angola');
  // });
