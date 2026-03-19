export interface IComida {
  name: string;
  category: string;
  description?: string;
  price: number;
  flavor?: string;
  image: string;
}

export const MockComidas: IComida[] = [
  {
    name: "Pizza Margherita",
    category: "Italiana",
    price: 35.9,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  },
  {
    name: "Hambúrguer Artesanal",
    category: "Lanches",
    price: 28.5,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    name: "Sushi",
    category: "Japonesa",
    price: 52.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351"
  },
  {
    name: "Lasanha",
    category: "Italiana",
    price: 30.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1604908811887-2d1b4c3c1c9c"
  },
  {
    name: "Salada Caesar",
    category: "Saudável",
    price: 22.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9"
  },
  {
    name: "Açaí",
    category: "Sobremesa",
    price: 18.0,
    flavor: "Doce",
    image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c"
  },
  {
    name: "Coxinha",
    category: "Salgados",
    price: 7.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1625944525903-cf5b1aef1a3e"
  },
  {
    name: "Brigadeiro",
    category: "Sobremesa",
    price: 3.5,
    flavor: "Doce",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
  },
  {
    name: "Taco",
    category: "Mexicana",
    price: 19.9,
    flavor: "Picante",
    image: "https://images.unsplash.com/photo-1601924582975-7e6c7b62e7a3"
  },
  {
    name: "Frango Grelhado",
    category: "Prato Principal",
    price: 26.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1604908176997-4317a4f43c7f"
  },
  {
    name: "Batata Frita",
    category: "Acompanhamento",
    price: 12.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f"
  },
  {
    name: "Milkshake",
    category: "Bebidas",
    price: 15.5,
    flavor: "Doce",
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707"
  },
  {
    name: "Panqueca",
    category: "Prato Principal",
    price: 24.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1587738347110-0f0a46a4bdf0"
  },
  {
    name: "Risoto",
    category: "Italiana",
    price: 38.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
  },
  {
    name: "Hot Dog",
    category: "Lanches",
    price: 10.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65"
  },
  {
    name: "Pudim",
    category: "Sobremesa",
    price: 9.0,
    flavor: "Doce",
    image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31"
  },
  {
    name: "Macarrão",
    category: "Italiana",
    price: 21.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1521389508051-d7ffb5dc8cfd"
  },
  {
    name: "Churrasco",
    category: "Brasileira",
    price: 49.9,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1558030006-450675393462"
  },
  {
    name: "Crepe",
    category: "Sobremesa",
    price: 17.0,
    flavor: "Doce",
    image: "https://images.unsplash.com/photo-1584270354949-1b9f1d3c2c78"
  },
  {
    name: "Suco de Laranja",
    category: "Bebidas",
    price: 8.0,
    flavor: "Doce",
    image: "https://images.unsplash.com/photo-1571689936114-b16146f1e8c8"
  }
];

export default MockComidas;