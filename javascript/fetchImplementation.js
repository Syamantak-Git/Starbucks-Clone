fetch("./json_data/data.json")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Something Wrong");
		}
		return response.json();
	})
	.then((data) => {
		const container = document.getElementById("mySwiper1");

		data.forEach((item) => {
			const slideDiv = document.createElement("div");
			slideDiv.className =
				"swiper-slide swiper-slide1 d-flex justify-content-start align-items-start rounded-2";

			const imgContainer = document.createElement("div");
			imgContainer.className = "img-container";
			const img = document.createElement("img");
			img.src = `assets/images/home_page/Swiper1-Background/${item.backgroundImg}`;
			imgContainer.appendChild(img);

			const textDiv = document.createElement("div");
			textDiv.className = "text p-4 flex-grow-1";
			textDiv.innerHTML = `
        <p class="mb-1">${item.title}</p>
        <p class>${item.code}</p>
        <p style="line-height: normal; width: inherit; height: auto">${item.description}</p>
        <div class="mb-0 d-flex">
          <div>For</div>
          <div class="btn btn-success rounded-pill ps-3 pe-3 pt-1 pb-1 ms-auto me-3">${item.buttonText}</div>
        </div>
        <p class="mt-0">${item.price}</p>
      `;

			slideDiv.appendChild(imgContainer);
			slideDiv.appendChild(textDiv);
			container.appendChild(slideDiv);
		});
	})
	.catch((error) => {
		console.error(
			"Something wrong with fetch operation:",
			error.message
		);
	});
