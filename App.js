const qrData = document.querySelector(".data");
const btnSubmit = document.querySelector(".submit");
const qrImage = document.getElementById("img");

btnSubmit.addEventListener("click", () => {
  if (qrData.value)
    fetch(
      `http://api.qrserver.com/v1/create-qr-code/?data=${qrData.value}&size=150x150`
    )
      .then((res) => {
        qrImage.style.display = "block";
        qrImage.src = res.url;
      })
      .catch((err) => console.log(err));
});
