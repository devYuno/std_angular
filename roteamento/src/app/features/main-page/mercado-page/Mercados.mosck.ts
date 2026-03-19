export interface IMercados {
    nome: string,
    cidade: string,
    bairro: string,
    rua: string,
    numero: string,
    foto: string,
    telefone: string,
    email: string
}

export const MockMercado: IMercados[] = [
    {
        nome: "Mercado Central Curitiba",
        cidade: "Curitiba",
        bairro: "Centro",
        rua: "Rua XV de Novembro",
        numero: "100",
        foto: "https://oquefazercuritiba.com.br/wp-content/uploads/2025/07/Mercado-Municipal10-Fachada-PMC.webp",
        telefone: "(41) 3000-1000",
        email: "central@mercado.com"
    },
    {
        nome: "Supermercado Cabral",
        cidade: "Curitiba",
        bairro: "Cabral",
        rua: "Rua Pres. Carlos Cavalcanti",
        numero: "2280",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWRbxhzBEbgc85tDlAbHDv-6NBMo9i3r5cA&s",
        telefone: "(41) 3000-2000",
        email: "cabral@mercado.com"
    },
    {
        nome: "Vila Supermarket",
        cidade: "Curitiba",
        bairro: "Batel",
        rua: "Rua Comendador Araújo",
        numero: "452",
        foto: "https://s2-g1.glbimg.com/OASXKlAfiYQJmSv7p1sDPSnn-SU=/0x0:800x533/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/8/e/I05JoyRoSDqDzq6eJR5g/capaoraso.jpg",
        telefone: "(41) 3000-3000",
        email: "vila@supermercado.com"
    },
    {
        nome: "Mercado Água Verde",
        cidade: "Curitiba",
        bairro: "Água Verde",
        rua: "Rua Padre Anchieta",
        numero: "1415",
        foto: "https://images.pexels.com/photos/373948/pexels-photo-373948.jpeg",
        telefone: "(41) 3000-4000",
        email: "aguaverde@mercado.com"
    },
    {
        nome: "Supermercado Portão",
        cidade: "Curitiba",
        bairro: "Portão",
        rua: "Rua Brigadeiro Franco",
        numero: "1022",
        foto: "https://mid-noticias.curitiba.pr.gov.br/2023/00400503.jpg",
        telefone: "(41) 3000-5000",
        email: "portao@supermercado.com"
    },
    {
        nome: "Hortifruti Mercês",
        cidade: "Curitiba",
        bairro: "Mercês",
        rua: "Rua Francisco Rocha",
        numero: "786",
        foto: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
        telefone: "(41) 3000-6000",
        email: "merces@hortifruti.com"
    },
    {
        nome: "Mini Mercado São Francisco",
        cidade: "Curitiba",
        bairro: "São Francisco",
        rua: "Rua São Francisco",
        numero: "55",
        foto: "https://s2-g1.glbimg.com/yIyts_iazcT_b7PKZ5jy-tec-8M=/0x0:631x352/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/e/5/Nlq0UzQRiFPj4GBpMy4Q/mercado.png",
        telefone: "(41) 3000-7000",
        email: "saofrancisco@mercado.com"
    },
    {
        nome: "Supermercado Rebouças",
        cidade: "Curitiba",
        bairro: "Rebouças",
        rua: "Rua Martim Afonso",
        numero: "1120",
        foto: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        telefone: "(41) 3000-8000",
        email: "reboucas@supermercado.com"
    },
    {
        nome: "Mercadão do Batel",
        cidade: "Curitiba",
        bairro: "Batel",
        rua: "Rua Bispo Dom José",
        numero: "890",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniLFfBLmUubsAB1VfqIqd9Wsp5w0xgsVqqA&s",
        telefone: "(41) 3000-9000",
        email: "batel@mercadao.com"
    },
    {
        nome: "Supermercado Santa Felicidade",
        cidade: "Curitiba",
        bairro: "Santa Felicidade",
        rua: "Rua Manoel Ribas",
        numero: "323",
        foto: "https://resize.casapino.com.br/?u=https://cms-bomgourmet.s3.amazonaws.com/bomgourmet%2F2023%2F09%2F05102325%2F0A5A8164.jpg&w=661",
        telefone: "(41) 3001-0000",
        email: "santafelicidade@mercado.com"
    },
    {
        nome: "Supermercado Bigorrilho",
        cidade: "Curitiba",
        bairro: "Bigorrilho",
        rua: "Rua Deputado Lacerda Junior",
        numero: "150",
        foto: "https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg",
        telefone: "(41) 3001-1000",
        email: "bigorrilho@supermercado.com"
    },
    {
        nome: "Mercadinho Água Clara",
        cidade: "Curitiba",
        bairro: "Água Clara",
        rua: "Rua João Negrão",
        numero: "2072",
        foto: "https://www.bemparana.com.br/wp-content/uploads/2024/10/Verde_Mais-1-scaled.jpg.webp",
        telefone: "(41) 3001-2000",
        email: "aguaclara@mercadinho.com"
    }
];

export default IMercados;