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

var usuarios = [];

function registrarUsuario(nombre, contraseña, admin) {
  let usuario = {
    nombre: nombre,
    contraseña: contraseña,
    admin: admin,
  };
  usuarios.push(usuario);
}

registrarUsuario(`pepito`, 123, true);
registrarUsuario(`momi`, 321, false);

function login() {
  let loginUsuario = prompt("Usuario: ");
  let loginPassword = prompt("Contraseña: ");
  for (let i = 0; i <= usuarios.length; i++) {
    if (
      usuarios[i].nombre == loginUsuario &&
      usuarios[i].contraseña == loginPassword &&
      usuarios[i].admin
    ) {
      console.log(`admin`);
      break;
    } else if (
      usuarios[i].nombre == loginUsuario &&
      usuarios[i].contraseña == loginPassword &&
      !usuarios[i].admin
    ) {
      console.log("user");
    }
  }
}

productos = [];
