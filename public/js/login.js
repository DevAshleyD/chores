$(document).ready(function () {
  $("#signUpBttn").click(function () {
    window.location.href = "./views/signup.handlebars";
    return false;
  });

  $("#logInBttn").on("click", function () {
    event.preventDefault();

    var loginInfo = {
      email: $("#logInEmail")
        .val()
        .trim(),
      password: $("#logInPassword")
        .val()
        .trim()
    };
    console.log(loginInfo);

    $.ajax({
      type: "POST",
      url: "/api/user/login",
      data: loginInfo
    }).then(function (result) {
      console.log(result);
      if (loginInfo.email && loginInfo.password) {
        console.log("MATCH!");
        // if (admin) {
        //   window.location.href = "./views/indexadmin.handlebars";
        // } else {
        //   window.location.href = "./views/indexuser.handlebars";
        // }

        // return false;
      }
    });
  });
});
