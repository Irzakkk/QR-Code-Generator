let imageBox = document.querySelector(".imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#inputField");
function QRGenerator() {
  // imageBox.style.display="block";
  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    qrText.value;
  imageBox.classList.add("show-img");
}
