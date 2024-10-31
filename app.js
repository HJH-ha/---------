// alert("test");

const uploadInput = document.getElementById("upload-input");
const chosenImage = document.getElementById("chosen-image");
const fileName = document.getElementById("file-name");

// onchange 파일을 새로선택, 변경 했을때 함수실행
uploadInput.onchange = () => {
  const reader = new FileReader();
  //선택한 이미지는 files[0] (한개만 선택시)
  const imageFile = uploadInput.files[0]; // 선택하면 files에 임시로 가지고있음

  //파일 리더로 이미지의 주소를 읽음. 파일의 주소(위치)
  reader.readAsDataURL(imageFile);
  //리더가 이미지를 다읽으면 이벤트 ,함수실행
  reader.onload = () => {
    chosenImage.setAttribute("src", reader.result);
  };
  fileName.textContent = imageFile.name;
};
