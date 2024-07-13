// accordionExample

class View {
  imgHot =
    "https://pic.rutubelist.ru/video/f2/93/f293c2e1da3309e5fd4ae4858dd99980.jpg";
  imgCold = "https://photoclub.by/images/main55/555858_main.jpg";
  imgAverage =
    "https://vsegda-pomnim.com/uploads/posts/2022-03/1648673961_7-vsegda-pomnim-com-p-reka-rannei-vesnoi-foto-7.jpg";
  img = null;
  accordionExample;
  dataOutput(dataApi) {
    this.accordionExample = document.getElementById("accordionExample");

    for (let data of dataApi) {
      if (Math.floor(data.main.temp - 273) < 0) {
        this.img = this.imgCold;
      } else if (Math.floor(data.main.temp - 273) < 15) {
        this.img = this.imgAverage;
      } else {
        this.img = this.imgHot;
      }
      const newDiv = document.createElement("div");
      newDiv.innerHTML = ` <div class=" m-4 card" style="width: 18rem;">
  <img src="${this.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Погода в городе ${data.name}</h5>
    <p class="card-text">
    Средняя температура воздуха: ${Math.floor(data.main.temp - 273)}°C <br>
    Максимальная температура воздуха: ${Math.floor(
      data.main.temp_max - 273
    )}°C <br>
    Минимальная температура воздуха: ${Math.floor(
      data.main.temp_min - 273
    )}°C<br>
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

      this.accordionExample.appendChild(newDiv);
    }
  }
}
