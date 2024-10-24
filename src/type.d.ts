declare type Prato = {
  id: number;
  titulo: string;
  tipo: string;
  avaliacao: string;
  descricao: string;
  capa: string;
  destacado?: string;
  cardapio: {
    foto: string;
    preco: number;
    id: number;
    nome: string;
    descricao: string;
    porcao: string;
  };
};

declare interface GalleryItem {
  foto: string;
}

declare interface CartItem {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
}
