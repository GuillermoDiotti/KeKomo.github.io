export class Sistema {
  constructor() {
    this.listMenu = [];
    this.listReserva = [];
  }

  addMenu(newMenu) {
    this.listMenu.push(newMenu);
  }

  getMenu() {
    return this.listMenu;
  }

  addReserva(newReserva) {
    this.listReserva.push(newReserva);
  }

  vaciarReservas() {
    this.listReserva = [];
  }

  getReserva() {
    return this.listReserva;
  }
}
