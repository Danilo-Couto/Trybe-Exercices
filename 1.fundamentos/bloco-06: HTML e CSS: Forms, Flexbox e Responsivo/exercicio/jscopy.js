new window.JustValidate(js-form,options);

new JustValidate('.js-form', {
  rules: {
    checkbox: {
      required: true
    },
    myField: {
      required: true
    },
    email: {
      required: false,
      email: true
    },
    password: {
      strength: {
        default: true,
      }
  },
  messages: {
    name: {
      minLength: 'My custom message about only minLength rule'
    },
    email: 'My custom message about error (one error message for all rules)'
  },

  submitHandler: function (form, values, ajax) {

    ajax({
      url: 'https://just-validate-api.herokuapp.com/submit',
      method: 'POST',
      data: values,
      async: true,
      callback: function(response)  {
        console.log(response)
      }
    });
  },
});