function calculateTotalPrice(precio, descuento) {
  const discountToApply = (precio * descuento) / 100;
  const totalPrice = precio - discountToApply;
  return totalPrice;
}

function calculateCuotaPrice(precio) {
  const precioCuota = precio / 12;
  return precioCuota;
}

function producto(titulo, precio, descuento, descripcion) {
  this.titulo = titulo;
  this.precio = precio;
  this.descuento = `El descuento es de ${descuento}`;
  precioConDescuento = `Precio con descuento $ ${calculateTotalPrice(
    precio,
    descuento
  )}`;
  precioCuotas = `Hasta 12 cuotas sin descuento: precio de cuota $${calculateCuotaPrice}`;
  this.descripcion = descripcion;
}

var producto1 = new producto(
  "MacBook",
  1500,
  10,
  "La macBook es nueva, cuenta con 16gb de ram y u chip M1"
);

var producto2 = new producto(
  "PadMouse Logitech",
  500,
  25,
  "Es excelente para que puedas pegar varios HEADSHOTS"
);

var producto3 = new producto(
  "Joystick",
  3500,
  35,
  "Tremendo Jpystick XBOX para ganarle a tu amigo al fifa"
);

console.log(producto1);
console.log(producto2);
console.log(producto3);
