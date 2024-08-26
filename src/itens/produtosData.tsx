interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  discountPrice?: string;
  rating: number;
  available: boolean;
  images: string[];
}

const products: Product[] = [

  {
    id: 1,
    name: "Cristal de Quartzo",
    description: "Cristal de Quartzo puro, conhecido por suas propriedades de amplificação energética e clareza mental. Ideal para meditação e harmonização.",
    price: "R$ 129,99",
    discountPrice: "R$ 99,99", // Preço com desconto
    rating: 4.8, // Avaliação de 0 a 5
    available: true, // Disponibilidade
    images: [
      "/produtos/CristaDeQuartzo/CristaldeQuartzo1.jpeg",
      "/produtos/CristaDeQuartzo/CristaldeQuartzo2.jpeg",
      "/produtos/CristaDeQuartzo/CristaldeQuartzo3.jpeg",
    ]
  },
  {
    id: 2,
    name: "Colar de Ametista",
    description: "Colar com pedra de Ametista, que auxilia na tranquilidade, proteção espiritual e intuição. Um amuleto elegante e poderoso.",
    price: "R$ 89,99",
    discountPrice: "R$ 69,99", // Preço com desconto
    rating: 4.6,
    available: true, // Disponível
    images: [
      "/produtos/ColarDeAmetista/ColarDeAmetista1.jpeg",
      "/produtos/ColarDeAmetista/ColarDeAmetista2.jpeg",
      "/produtos/ColarDeAmetista/ColarDeAmetista3.jpeg",

    ]
  },

  {
    id: 3,
    name: "Livro de Feitiços",
    description: "Um livro raro de feitiçaria antiga, repleto de encantamentos, rituais e sabedoria esotérica para aprimorar suas práticas místicas.",
    price: "R$ 199,99",
    discountPrice: "R$ 159,99", // Preço com desconto
    rating: 4.9,
    available: true, // Disponível
    images: [
      "/produtos/LivrodeFeiticos/LivrodeFeiticos3.jpg",
      "/produtos/LivrodeFeiticos/LivrodeFeiticos1.jpg",
      "/produtos/LivrodeFeiticos/LivrodeFeiticos2.jpg",
    ]
  },

  {
    id: 4,
    name: "Pêndulo de Ouro",
    description: "Pêndulo de ouro para radiestesia e consultas espirituais. Ajuda a encontrar respostas e direcionar a energia.",
    price: "R$ 159,99",
    discountPrice: "R$ 139,99", // Preço com desconto
    rating: 4.7,
    available: false, // Indisponível
    images: [
      "/produtos/PendulodeOuro/PendulodeOuro.jpeg",
    ]
  },
  {
    id: 5,
    name: "Incenso de Sândalo",
    description: "Conjunto de incensos de sândalo para purificação e meditação. Produz uma fumaça suave e fragrância relaxante.",
    price: "R$ 29,99",
    discountPrice: "R$ 24,99", // Preço com desconto
    rating: 4.5,
    available: true, // Disponível
    images: [
      "/produtos/IncensodeSandalo/IncensodeSandalo1.jpeg",
      "/produtos/IncensodeSandalo/IncensodeSandalo2.jpeg",
      "/produtos/IncensodeSandalo/IncensodeSandalo3.jpeg",
    ]
  },
  {
    id: 6,
    name: "Bola de Cristal",
    description: "Bola de cristal para visualização e leitura espiritual. Usada para acessar informações do plano espiritual e promover insights.",
    price: "R$ 299,99",
    discountPrice: "R$ 249,99", // Preço com desconto
    rating: 4.8,
    available: true, // Disponível
    images: [
      "/produtos/BoladeCristal/BoladeCristal1.jpeg",
      "/produtos/BoladeCristal/BoladeCristal2.jpeg",
      "/produtos/BoladeCristal/BoladeCrista3.jpeg",
    ]
  },
  // Adicione mais produtos conforme necessário
];

export default products;
