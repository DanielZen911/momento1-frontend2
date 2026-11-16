const CATEGORIAS_ESTATICAS = [
  {
    id: 1,
    nombre: 'Cárnicos',
    subtitulo: 'Salchichas, jamones y cortes',
    descripcion: 'Cortes seleccionados, embutidos y proteínas frescas.',
    imagen: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80',
    cantidadProductos: 24,
  },
  {
    id: 2,
    nombre: 'Pastas',
    subtitulo: 'Espaguetis, tornillos y más',
    descripcion: 'Pastas artesanales, integrales y tradicionales.',
    imagen: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=600&q=80',
    cantidadProductos: 15,
  },
  {
    id: 3,
    nombre: 'Galletas',
    subtitulo: 'Tradicionales, dulces y saladas',
    descripcion: 'Opciones dulces, saladas y horneadas para acompañar.',
    imagen: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80',
    cantidadProductos: 18,
  },
  {
    id: 4,
    nombre: 'Café',
    subtitulo: 'Tostado, molido y soluble',
    descripcion: 'Granos tostados, molidos y especialidades de origen.',
    imagen: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
    cantidadProductos: 12,
  },
  {
    id: 5,
    nombre: 'Chocolates',
    subtitulo: 'Barras, chocolatinas y de mesa',
    descripcion: 'Chocolates tradicionales y golosinas para toda ocasión.',
    imagen: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80',
    cantidadProductos: 20,
  },
];

export const productoServicio = {
  listarCategorias: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(CATEGORIAS_ESTATICAS);
      }, 300);
    });
  },
};