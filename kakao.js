const KAKAO_API_KEY = "YOUR_KAKAO_API_KEY";
const KAKAO_REDIRECT_URI = "YOUR_REDIRECT_URI";

const kakaoInitElement = document.getElementById("kakao-init");
const userInfoElement = document.getElementById("user-info");

Kakao.init(KAKAO_API_KEY);
kakaoInitElement.innerText = `Has Kakao been initialized?: ${Kakao.isInitialized()}`;

function kakaoLogin() {
  Kakao.Auth.authorize({
    redirectUri: KAKAO_REDIRECT_URI,
  });
}

function requestAccessToken() {
  const url = window.location;
  const authorizationCode = new URLSearchParams(url.search).get("code");
  console.log(`Your authorizationCode is: ${authorizationCode}`);

  $.ajax({
    type: "POST",
    url: "https://kauth.kakao.com/oauth/token",
    data: {
      grant_type: "authorization_code",
      client_id: KAKAO_API_KEY,
      redirect_uri: KAKAO_REDIRECT_URI,
      code: authorizationCode,
    },
    contentType: "application/x-www-form-urlencoded;charset=utf-8",
    dataType: null,
    success: function (response) {
      Kakao.Auth.setAccessToken(response.access_token);
    },
    error: function (jqXHR, error) {
      // Handle error
    },
  });
}

function requestUserInfo() {
  Kakao.API.request({
    url: "/v2/user/me",
  })
    .then(function (res) {
      userInfoElement.innerText = JSON.stringify(res, null, 2);
    })
    .catch(function (err) {
      alert(
        "failed to request user information: " + JSON.stringify(err, null, 2)
      );
    });
}

function requestOIDCInfo() {
  $.ajax({
    type: "GET",
    url: "https://kapi.kakao.com/v1/oidc/userinfo",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Kakao.Auth.getAccessToken()}`,
    },
    dataType: null,
    success: function (res) {
      userInfoElement.innerText = JSON.stringify(res, null, 2);
    },
    error: function (jqXHR, error) {
      // Handle error
    },
  });
}

function kakaoLogout() {
  Kakao.Auth.logout()
    .then(function () {
      alert("logout ok\naccess token -> " + Kakao.Auth.getAccessToken());
      deleteCookie();
    })
    .catch(function () {
      alert("Not logged in");
    });
}

function unlinkApp() {
  Kakao.API.request({
    url: "/v1/user/unlink",
  })
    .then(function (res) {
      alert("success: " + JSON.stringify(res, null, 2));
      deleteCookie();
    })
    .catch(function (err) {
      alert("fail: " + JSON.stringify(err, null, 2));
    });
}

function deleteCookie() {
  document.cookie =
    "authorize-access-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
