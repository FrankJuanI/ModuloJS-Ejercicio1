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
var usuarios = [];

function solicitarUsuario() {
  let regUser = prompt(`Indica nombre del usuario: `);
  let regPass = prompt(`Indica contraseña: `);
  let regAdm = prompt(`Es admin? `);
  Registrar(regUser, regPass, regAdm);
  console.log(usuarios);
}

function Registrar(nombre, contraseña, admin) {
  if (admin == `si` || admin == true) {
    admin = true;
  } else if ((admin = `no` || admin == false)) {
    admin = false;
  }
  let usuario = {
    nombre: nombre,
    contraseña: contraseña,
    admin: admin,
  };
  usuarios.push(usuario);
}

Registrar(`pepito`, 123, true);
Registrar(`momi`, 321, false);
Registrar(`nacho`, 231, false);
Registrar(`yoyi`, 312, false);

function encontrarUsuario(loginUsuario) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nombre == loginUsuario) {
      console.log(`Usuario encontrado`);
      let usuarioLog = usuarios[i];
      console.log(usuarioLog);
      return usuarioLog;
    }
    return null;
  }
}

function login() {
  let loginUsuario = prompt("Usuario: ");
  let loginPassword = prompt("Contraseña: ");
  let usuarioLog = encontrarUsuario(loginUsuario);

  if (usuarioLog != null) {
    if (usuarioLog.contraseña == loginPassword && usuarioLog.admin == true) {
      console.log(`Legueado como admin`);
      mostrarBotonAdmin();
    } else if (
      usuarioLog.contraseña == loginPassword &&
      usuarioLog.admin == false
    ) {
      console.log(`Logueado como usuario`);
    }
  } else {
    console.log(`Usuario no encontrado`);
  }
}

function mostrarBotonAdmin() {
  let botonAdmin = document.getElementById(`adminbutton`);
  botonAdmin.style.display = `block`;
}
