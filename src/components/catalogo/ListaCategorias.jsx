import { useEffect, useState } from 'react';
import { productoServicio } from '../../services/productoServicio';
import { CategoriaCard } from './CategoriaCard';
import './ListaCategorias.css';

export function ListaCategorias() {
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarCategorias = async () => {
      try {
        const data = await productoServicio.listarCategorias();
        setCategorias(data);
      } catch (error) {
        console.error('Error al listar las categorías:', error);
      } finally {
        setCargando(false);
      }
    };

    cargarCategorias();
  }, []);

  return (
    <section
      className="catalogo-categorias-seccion"
      aria-labelledby="titulo-categorias"
    >
      <h2 id="titulo-categorias" className="catalogo-categorias-seccion__titulo">
        Categorías de Productos
      </h2>

      {cargando ? (
        <p className="catalogo-categorias-estado">Cargando categorías...</p>
      ) : (
        <ul className="catalogo-categorias-grid">
          {categorias.map((categoria) => (
            <CategoriaCard key={categoria.id} categoria={categoria} />
          ))}
        </ul>
      )}
    </section>
  );
}