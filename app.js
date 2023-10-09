const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const mainImg = document.querySelector(".main-img");
const imgName = document.querySelector(".image-name");
const modalImgContainer = document.querySelector(".modal-images");
let singleModalImg;
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const images = Array.from(document.querySelectorAll(".img"));
let modalImgs = Array.from(document.querySelectorAll(".modal-images > .modal-img"))
let index;

images.forEach(function (image) {
	modalImgContainer.innerHTML += `<img src=${image.getAttribute("src")} title=${image.getAttribute("title")} id=${image.getAttribute("data-id")} class="modal-img" alt="modal-image" />`;
	modalImgs = Array.from(document.querySelectorAll(".modal-images > .modal-img"));
	image.addEventListener("click", function (e) {
		index = images.indexOf(image);
		modal.classList.add("open");
		mainImg.src = e.target.src;
		imgName.innerText = e.target.title;

		modalImgs.forEach(function (singleModalImg) {
			singleModalImg.classList.remove("selected");
			if (singleModalImg.src === image.src) {
				singleModalImg.classList.add("selected")
				index = modalImgs.indexOf(singleModalImg)

			}
		})

	})
})

modalImgs.forEach(function (singleModalImg) {
	singleModalImg.addEventListener("click", function (e) {
		mainImg.src = e.target.src;
		imgName.innerText = e.target.title;
		index = modalImgs.indexOf(singleModalImg);

		modalImgContainer.querySelectorAll(".modal-img").forEach(function (singleModalImg) {
			singleModalImg.classList.remove("selected");
		})
		singleModalImg.classList.add("selected")
	})
})




closeBtn.addEventListener("click", function () {
	modal.classList.remove("open");
})

nextBtn.addEventListener("click", function (e) {
	index++;
	if (index >= modalImgs.length) {
		index = 0;
		mainImg.src = modalImgs[0].src;
		imgName.innerText = modalImgs[0].title;
	} else {
		mainImg.src = modalImgs[index].src;
		imgName.innerText = modalImgs[index].title;
	}
	modalImgContainer.querySelectorAll(".modal-img").forEach(function (singleModalImg) {
		singleModalImg.classList.remove("selected");
	})
	modalImgs[index].classList.add("selected")
})

prevBtn.addEventListener("click", function () {
	index--;
	if (index < 0) {
		index = modalImgs.length - 1;
		mainImg.src = modalImgs[index].src;
		imgName.innerText = modalImgs[index].title;
	} else {
		mainImg.src = modalImgs[index].src;
		imgName.innerText = modalImgs[index].title;
	}
	modalImgContainer.querySelectorAll(".modal-img").forEach(function (singleModalImg) {
		singleModalImg.classList.remove("selected");
	})
	modalImgs[index].classList.add("selected")
})

