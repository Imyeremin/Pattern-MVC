//  oneCity twoCity treeCity form

class Model {
  getData() {
    let cityOne = document.getElementById('oneCity').value;
    let cityTwo = document.getElementById('twoCity').value;
    let cityTree = document.getElementById('treeCity').value;
    let dataCitys = [cityOne, cityTwo, cityTree];
    return dataCitys;
  }
  async getWeather(cityArrData) {
    let result = new Array();
    console.log(typeof result);
    for (let cityData of cityArrData) {
      let resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=f86a408c1e5a6ebd1e5c569b56031e69`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });

      result.push(resp);
    }
    console.log();
    return result;
  }
}
