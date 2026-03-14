let inputColl = (event) => {
  event.preventDefault();
  let input = document.getElementById("u1");
  if (!input.checkValidity()) {
    // built-in URL validation
    input.classList.add("wobble");

    setTimeout(() => {
      input.classList.remove("wobble");
    }, 350);

    return;
  }

  let input2 = document.getElementById("u2");
  let urL = input.value;

  input.readOnly = true;

  let count = 0;
  let fileId = urL.split("/d/")[1]?.split("/")[0];

  if (!fileId) {
    input.classList.add("wobble");
    return;
  }

  input2.value = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=AIzaSyDYQFuXOidJ6Vp_auXLHLPCusTi_d9XCJc`;
  input2.readOnly = true;
};
document.getElementById("f1").addEventListener("submit", inputColl);

// adas/adad/ada/adad/ad/ad/ad/a/da/d

//
