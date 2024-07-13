class Controller {
  model;
  view;
  async start() {
    this.model = new Model();
    this.view = new View();

    const data = await this.model.getData();
    const dataApi = await this.model.getWeather(data);
    const dataView = await this.view.dataOutput(dataApi);
  }
}
