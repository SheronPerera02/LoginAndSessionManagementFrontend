$('#btnSignUp').on('click', () => {
  const data = {
    username: $('#txtUsername').val(),
    password: $('#txtPassword').val(),
  };
  $.ajax({
    url: 'http://localhost:3000/api/v1/user/signUp',
    type: 'POST',
    crossDomain: true,
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: function (result) {
      $('#txtUsername').val('');
      $('#txtPassword').val('');
      alert('Signed Up!');
    },
    error: function (err) {
      alert(err.responseJSON.message);
    },
  });
});

$('#btnLogin').on('click', () => {
  const data = {
    username: $('#txtUsername').val(),
    password: $('#txtPassword').val(),
  };
  $.ajax({
    url: 'http://localhost:3000/api/v1/user/signIn',
    type: 'POST',
    crossDomain: true,
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: function (result) {
      const localStorageData = {
        username: $('#txtUsername').val(),
        token: result.token,
      };
      localStorage.setItem('user', JSON.stringify(localStorageData));

      $('#txtUsername').val('');
      $('#txtPassword').val('');

      $('.sign-in-form').css({
        display: 'none',
      });
      $('.content-area').css({
        display: 'block',
      });

      $('body').css({
        'background-color': 'white',
      });
      alert('Logged In!');
    },
    error: function (err) {
      alert(err.responseJSON.message);
    },
  });
});

$('#btnLogout').on('click', () => {
  if (confirm('Are you sure you want to logout?')) {
    localStorage.removeItem('user');
    $('.sign-in-form').css({
      display: 'block',
    });
    $('.content-area').css({
      display: 'none',
    });

    $('body').css({
      'background-color': 'lightgray',
    });
    alert('Logged Out!');
  }
});

function autoLogin() {
  const user = localStorage.getItem('user');
  if (user !== null) {
    $('.sign-in-form').css({
      display: 'none',
    });
    $('.content-area').css({
      display: 'block',
    });

    $('body').css({
      'background-color': 'white',
    });
  }
}
