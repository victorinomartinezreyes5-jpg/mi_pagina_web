
const catalogo=[
{name:"Martillo",precio:250},
{name:"Taladro",precio:1500},
{name:"Pinzas",precio:200},
{name:"Cinta Métrica",precio:150}
];

const contenedor=document.getElementById("productos");

catalogo.forEach(p=>{

const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<h3>${p.name}</h3>
<p>Precio: $${p.precio}</p>
`;

contenedor.appendChild(card);

});
