// accordionExample

class View {
  accordionExample;
  dataOutput(dataApi) {
    this.accordionExample = document.getElementById("accordionExample");
    for (let data of dataApi) {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = ` <div class=" m-4 card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Погода в городе ${data.name}</h5>
    <p class="card-text">
    Средняя температура воздуха: ${Math.floor(data.main.temp - 273)}°C <br>
    Максимальная температура воздуха: ${Math.floor(data.main.temp_max - 273)}°C <br>
    Минимальная температура воздуха: ${Math.floor(data.main.temp_min - 273)}°C<br>
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

      this.accordionExample.appendChild(newDiv);
    }
  }
}
