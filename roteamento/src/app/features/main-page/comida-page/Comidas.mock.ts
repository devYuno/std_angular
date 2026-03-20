export interface IComida {
  id: number;
  name: string;
  category: string;
  description?: string;
  price: number;
  flavor?: string;
  image: string;
}

export const MockComidas: IComida[] = [
  {
    id: 1,
    name: "Pizza Margherita",
    category: "Italiana",
    description: "Clássica pizza italiana feita com molho de tomate pelati, muçarela de búfala fresca e manjericão.\nA massa é de fermentação natural, garantindo uma borda crocante e um centro macio e saboroso.",
    price: 35.9,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  },
  {
    id: 2,
    name: "Hambúrguer Artesanal",
    category: "Lanches",
    description: "Blend de carne bovina selecionada grelhada no fogo, servido em pão brioche selado na manteiga.\nAcompanha queijo cheddar derretido, cebola caramelizada e nossa maionese especial da casa.",
    price: 28.5,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    id: 3,
    name: "Sushi",
    category: "Japonesa",
    description: "Combinado premium com peixes frescos do dia, preparados com técnicas tradicionais japonesas.\nInclui niguiris e uramakis que derretem na boca, acompanhados de shoyu e gergelim tostado.",
    price: 52.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351"
  },
  {
    id: 4,
    name: "Lasanha",
    category: "Italiana",
    description: "Camadas intercaladas de massa fresca artesanal, molho bolonhesa rico em carne e molho branco cremoso.\nFinalizada com uma generosa camada de queijo gratinado para um sabor reconfortante e caseiro.",
    price: 30.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1604908811887-2d1b4c3c1c9c"
  },
  {
    id: 5,
    name: "Salada Caesar",
    category: "Saudável",
    description: "Mix de alfaces romanas crocantes envolvidas em um molho Caesar autêntico e levemente picante.\nDecorada com croutons de ervas finas, lascas de parmesão e tiras de frango grelhado suculentas.",
    price: 22.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9"
  },
  {
    id: 6,
    name: "Açaí",
    category: "Sobremesa",
    description: "Polpa de açaí orgânico batida na hora, servida gelada com uma textura cremosa e irresistível.\nVocê pode sentir a energia natural da fruta, ideal para um lanche refrescante a qualquer hora do dia.",
    price: 18.0,
    flavor: "Doce",
    image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c"
  },
  {
    id: 7,
    name: "Coxinha",
    category: "Salgados",
    description: "O salgado mais amado do Brasil, com massa de batata dourada e recheio de frango desfiado temperado.\nFrita na hora para garantir a crocância externa e a cremosidade por dentro que todo mundo adora.",
    price: 7.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1625944525903-cf5b1aef1a3e"
  },
  {
    id: 8,
    name: "Brigadeiro",
    category: "Sobremesa",
    description: "Doce tradicional brasileiro feito com leite condensado de alta qualidade e cacau puro 50%.\nEnrolado manualmente em granulado de chocolate belga, proporcionando uma explosão de sabor a cada mordida.",
    price: 3.5,
    flavor: "Doce",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
  },
  {
    id: 9,
    name: "Taco",
    category: "Mexicana",
    description: "Tortilha de milho crocante recheada com carne moída temperada com especiarias mexicanas e pimenta.\nLeva alface picada, queijo, pico de gallo fresco e um toque de sour cream para equilibrar o sabor.",
    price: 19.9,
    flavor: "Picante",
    image: "https://images.unsplash.com/photo-1601924582975-7e6c7b62e7a3"
  },
  {
    id: 10,
    name: "Frango Grelhado",
    category: "Prato Principal",
    description: "Filé de peito de frango marinado em ervas cítricas e grelhado até atingir o ponto perfeito de suculência.\nAcompanha uma porção de legumes cozidos no vapor, sendo a escolha ideal para uma refeição equilibrada.",
    price: 26.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1604908176997-4317a4f43c7f"
  },
  {
    id: 11,
    name: "Batata Frita",
    category: "Acompanhamento",
    description: "Batatas selecionadas cortadas em palito e fritas em imersão para garantir a textura sequinha e crocante.\nSalgadas na medida certa, são o acompanhamento perfeito para qualquer lanche ou como petisco principal.",
    price: 12.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f"
  },
  {
    id: 12,
    name: "Milkshake",
    category: "Bebidas",
    description: "Bebida gelada ultra cremosa feita com sorvete premium de baunilha e calda de chocolate artesanal.\nFinalizado com chantilly aerado e uma cereja no topo, ideal para adoçar o seu dia com estilo.",
    price: 15.5,
    flavor: "Doce",
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707"
  },
  {
    id: 13,
    name: "Panqueca",
    category: "Prato Principal",
    description: "Massa fina e leve enrolada com recheio de carne bovina bem temperada e molho de tomate rústico.\nGratinada ao forno com muçarela, oferece aquele sabor de comida feita em casa com muito carinho.",
    price: 24.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1587738347110-0f0a46a4bdf0"
  },
  {
    id: 14,
    name: "Risoto",
    category: "Italiana",
    description: "Arroz arbóreo cozido lentamente em caldo de legumes, finalizado com manteiga e parmesão de qualidade.\nPossui uma textura aveludada e um aroma marcante de cogumelos frescos e ervas finas.",
    price: 38.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
  },
  {
    id: 15,
    name: "Hot Dog",
    category: "Lanches",
    description: "Pão de leite macio com salsicha tipo Viena, molho de tomate caseiro, milho e batata palha crocante.\nUm clássico rápido e saboroso que agrada todas as idades, perfeito para um lanche no fim de tarde.",
    price: 10.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65"
  },
  {
    id: 16,
    name: "Pudim",
    category: "Sobremesa",
    description: "O tradicional pudim de leite condensado com textura lisa, sem furinhos e que derrete na boca.\nBanhado por uma calda de caramelo dourada que traz o equilíbrio perfeito entre o doce e o amargo.",
    price: 9.0,
    flavor: "Doce",
    image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31"
  },
  {
    id: 17,
    name: "Macarrão",
    category: "Italiana",
    description: "Massa tipo Spaghetti 'al dente' servida com um molho de tomates frescos colhidos na hora e manjericão.\nSimples, autêntico e delicioso, finalizado com um fio de azeite de oliva extravirgem aromatizado.",
    price: 21.0,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1521389508051-d7ffb5dc8cfd"
  },
  {
    id: 18,
    name: "Churrasco",
    category: "Brasileira",
    description: "Cortes selecionados de carne bovina assados na brasa no ponto desejado para manter a suculência.\nServido com farofa crocante e molho à campanha, trazendo o verdadeiro sabor do churrasco brasileiro.",
    price: 49.9,
    flavor: "Salgado",
    image: "https://images.unsplash.com/photo-1558030006-450675393462"
  },
  {
    id: 19,
    name: "Crepe",
    category: "Sobremesa",
    description: "Massa francesa finíssima recheada com creme de avelã e morangos frescos fatiados.\nPolvilhado com açúcar de confeiteiro e servido quente, é a escolha perfeita para os amantes de chocolate.",
    price: 17.0,
    flavor: "Doce",
    image: "https://images.unsplash.com/photo-1584270354949-1b9f1d3c2c78"
  },
  {
    id: 20,
    name: "Suco de Laranja",
    category: "Bebidas",
    description: "Suco 100% natural extraído das melhores laranjas selecionadas, sem adição de açúcar ou conservantes.\nUma fonte rica em vitamina C, gelada e refrescante, ideal para acompanhar qualquer uma de nossas refeições.",
    price: 8.0,
    flavor: "Doce",
    image: "https://images.unsplash.com/photo-1571689936114-b16146f1e8c8"
  }
];

export default MockComidas;