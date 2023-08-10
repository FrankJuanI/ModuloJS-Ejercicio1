function calcularPrecioTotal(precio, descuento) {
  const discountToApply = (precio * descuento) / 100;
  const totalPrice = precio - discountToApply;
  console.log(`calculandoPrecioTotal ${totalPrice}`);
  return totalPrice;
}

function calcularPrecioCuota(precio) {
  const precioCuota = precio / 12;
  console.log(`calculandoPrecioCuota ${precioCuota}`);
  return precioCuota;
}

function crearProducto(titulo, precio, descuento, descripcion) {
  let producto = {
    titulo: titulo,
    precio: precio,
    descuento: descuento,
    precioConDescuento: `El descuento es de ${calcularPrecioTotal(
      precio,
      descuento
    )}`,
    precioCuotas: `Precio cuotas ${calcularPrecioCuota(precio)}`,
    descripcion: descripcion,
  };
  console.log(producto);
  return producto;
}

function solicitarProducto() {
  let titulo = prompt(`Titulo del producto`);
  let precio = prompt(`Ingrese el precio del producto`);
  let descuento = prompt(`Ingrese el descuento por el pago en efectivo`);
  let descripcion = prompt(`Ingrese una descripcion para el producto`);
  productos.push(crearProducto(titulo, precio, descuento, descripcion));
  console.log(productos);
  mostrarProductos();
}

productos = [];
var usuarios = [];
var usuarioLogueado = null;

function solicitarUsuario() {
  let regUser = prompt(`Indica nombre del usuario: `);
  let regPass = prompt(`Indica contraseña: `);
  let regAdm = prompt(`Es admin? `);
  Registrar(regUser, regPass, regAdm);
  console.log(usuarios);
}

function Registrar(nombre, contraseña, admin) {
  let adminn;
  if (admin == `si` || admin == true) {
    adminn = true;
  } else if ((admin = `no` || admin == false)) {
    adminn = false;
  }
  let usuario = {
    nombre: nombre,
    contraseña: contraseña,
    admin: adminn,
  };
  console.log(usuario);
  usuarios.push(usuario);
}

Registrar(`pepito`, 123, true);
Registrar(`momi`, 321, false);
Registrar(`nacho`, 231, false);
Registrar(`yoyi`, 312, false);

function encontrarUsuario(loginUsuario) {
  console.log(loginUsuario);
  console.log(usuarios);
  for (let i = 0; i < usuarios.length; i++) {
    console.log(i);
    if (usuarios[i].nombre == loginUsuario) {
      console.log(usuarios[i].nombre);
      console.log(`Usuario encontrado`);
      let usuarioLog = usuarios[i];
      console.log(usuarioLog);
      return usuarioLog;
    }
  }
  return null;
}

function login() {
  if (usuarioLogueado == null) {
    let loginUsuario = prompt("Usuario: ");
    let loginPassword = prompt("Contraseña: ");
    let usuarioLog = encontrarUsuario(loginUsuario);
    console.log(usuarioLog);
    if (usuarioLog != null) {
      if (usuarioLog.contraseña == loginPassword && usuarioLog.admin == true) {
        console.log(`Legueado como admin`);
        mostrarBotonAdmin();
        mostrarSalirSesion();
        usuarioLogueado = usuarioLog.nombre;
        console.log(usuarioLogueado);
      } else if (
        usuarioLog.contraseña == loginPassword &&
        usuarioLog.admin == false &&
        usuarioLog.admin == false
      ) {
        console.log(`Logueado como usuario`);
        usuarioLogueado = usuarioLog.nombre;
        mostrarSalirSesion();
        console.log(usuarioLogueado);
      }
    } else {
      console.log(`Usuario no encontrado`);
    }
  } else {
    console.log(`Ya hay un usuario logueado: ${usuarioLogueado}`);
  }
}

function mostrarBotonAdmin() {
  let botonAdmin = document.getElementById(`adminbutton`);
  botonAdmin.style.display = `block`;
}

function mostrarSalirSesion() {
  let botonSalirSesion = document.getElementById(`salirbutton`);
  botonSalirSesion.style.display = `block`;
}

function salirSesion() {
  usuarioLogueado = null;
  let botonSalirSesion = document.getElementById(`salirbutton`);
  botonSalirSesion.style.display = `none`;
  let botonAdmin = document.getElementById(`adminbutton`);
  botonAdmin.style.display = `none`;
}

var contenedor0 = document.createElement("div");
document.body.appendChild(contenedor0);

var div = document.getElementsByTagName("div")[0];
div.className = "flex-container";
div.id = "contenedor";

function mostrarProductos() {
  var mostrarInfo = productos
    .map(function (info) {
      return (
        "<div>" +
        "<h2>" +
        info.titulo +
        "</h2>" +
        "<p>" +
        info.precio +
        " $ </p>" +
        "<p>" +
        info.descuento +
        " <p/>" +
        "<p>" +
        info.precioConDescuento +
        " <p/>" +
        "<p>" +
        info.precioCuotas +
        " <p/>" +
        "<p>" +
        info.descripcion +
        " <p/>" +
        "</div>"
      );
    })
    .join("");
  document.getElementById("contenedor").innerHTML = mostrarInfo;
}
