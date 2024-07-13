import blackShirt from "../assets/black-shirt.png";
import whiteShirt from "../assets/white-shirt.png";
import redShirt from "../assets/red-shirt.png";
import blueShirt from "../assets/blue-shirt.png";
import yellowShirt from "../assets/yellow-shirt.png";
import indigoShirt from "../assets/indigo-shirt.png";

export default {
  id: "1",
  name: "polo shirt",
  brand: "teixeira design studio",
  discount: "0.2044",
  likes: 109,
  free_delivery: true,
  colors: [
    { id: 1, color: "black", img: blackShirt },
    {
      id: 2,
      color: "white",
      img: whiteShirt,
    },
    { id: 3, color: "orange", img: yellowShirt },
    { id: 4, color: "blue", img: blueShirt },
    { id: 5, color: "red", img: redShirt },
    { id: 6, color: "indigo", img: indigoShirt },
  ],
  sizes: [
    {
      id: 1,
      size: "small",
      price: 89.95,
    },
    {
      id: 2,
      size: "medium",
      price: 99.95,
    },
    {
      id: 3,
      size: "large",
      price: 109.95,
    },
    {
      id: 4,
      size: "extra large",
      price: 119.95,
    },
    {
      id: 5,
      size: "XXL",
      price: 129.95,
    },
  ],
  description:
    "When it's colder than the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you can keep your flame burning when the weather hits. Metal lace hardware and extended tongue bring mountain boot toughness, while the star-studded toe design gives your look the edge",
  benefits: [
    "Durable leather is easily cleanable so you can keep your look fresh.",
    "Water-repellent finish and internal membrane help keep your feet dry.",
    "Toe piece with star pattern adds durability.",
    "Synthetic insulation helps keep you warm.",
    "Originally designed for performance hoops, the Air unit delivers lightweight cushioning.",
    "Plush tongue wraps over the ankle to help keep out the moisture and cold.",
    "Rubber outsole with aggressive traction pattern adds durable grip.",
    "Durable leather is easily cleanable so you can keep your look fresh.",
  ],
};
