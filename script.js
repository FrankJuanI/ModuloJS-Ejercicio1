class cProducto {
  constructor(titulo, precio, descuento, descripcion) {
    (this.titulo = titulo),
      (this.precio = precio),
      (this.descuento = `El descuento es de ${descuento}`),
      (this.precioConDescuento = `Precio con descuento $ ${this.calculateTotalPrice(
        precio,
        descuento
      )}`),
      (this.precioCuotas = `Hasta 12 cuotas sin descuento: precio de cuota $${this.calculateCuotaPrice()}`),
      (this.descripcion = descripcion);
  }

  calculateTotalPrice() {
    const discountToApply = (this.precio * this.descuento) / 100;
    const totalPrice = this.precio - discountToApply;
    return totalPrice;
  }

  calculateCuotaPrice() {
    const precioCuota = this.precio / 12;
    return precioCuota;
  }
}

function crearProducto(titulo, precio, descuento, descripcion) {
  let producto = {
    titulo: titulo,
    precio: precio,
    descuento: descuento,
    precioConDescuento: `El descuento es de ${calcularPrecioTotal()}`,
    precioCuotas: `Precio cuotas ${calcularPrecioCuota()}`,
    descripcion: descripcion,
  };

  function calcularPrecioTotal() {
    const discountToApply = (this.precio * this.descuento) / 100;
    const totalPrice = this.precio - discountToApply;
    return totalPrice;
  }

  function calcularPrecioCuota() {
    const precioCuota = this.precio / 12;
    return precioCuota;
  }
  return producto;
}

productos = [];

const producto1 = new cProducto(
  "MacBook",
  1500,
  10,
  "La macBook es nueva, cuenta con 16gb de ram y u chip M1"
);

const producto2 = new cProducto(
  "PadMouse Logitech",
  500,
  25,
  "Es excelente para que puedas pegar varios HEADSHOTS"
);

const producto3 = new cProducto(
  "Joystick",
  3500,
  35,
  "Tremendo Jpystick XBOX para ganarle a tu amigo al fifa"
);

const producto4 = crearProducto(
  "Mancuerna",
  500,
  10,
  "Terrible herramienta para pegarle a los tacheros"
);

productos.push(producto1, producto2, producto3, producto4);

console.log(productos[0]);
console.log(productos[1]);
console.log(productos[2]);
console.log(productos[3]);
