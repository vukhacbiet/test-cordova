document.getElementById("clickme").addEventListener("click", showAlert, false);

function showAlert() {
  // Handle the back button
  //   alert("hihi");
  let ref = cordova.ThemeableBrowser.open("http://apache.org", "_blank", {
    statusbar: {
      color: "#ffffffff",
    },
    toolbar: {
      height: 44,
      color: "#f0f0f0ff",
    },
    title: {
      color: "#003264ff",
      showPageTitle: true,
    },
    backButtonCanClose: true,
  });

  if (this.$app.platform === "iOS") {
    ref.show();
  }

  ref.addEventListener("loadstart", function (e) {});
  ref.addEventListener("loadstop", function (e) {});
  ref.addEventListener("closePressed", function (e) {});
}
