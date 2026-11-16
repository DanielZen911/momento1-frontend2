import './CategoriaCard.css';

export function CategoriaCard({ categoria }) {
  return (
    <li className="catalogo-categoria-card">
      <div className="catalogo-categoria-card__media">
        <img
          src={categoria.imagen}
          alt={categoria.nombre}
          className="catalogo-categoria-card__imagen"
        />
        <span className="catalogo-categoria-card__etiqueta">
          {categoria.nombre}
        </span>
      </div>

      <div className="catalogo-categoria-card__cuerpo">
        <span className="catalogo-categoria-card__subtitulo">
          {categoria.subtitulo}
        </span>
        <h3 className="catalogo-categoria-card__titulo">{categoria.nombre}</h3>
        <p className="catalogo-categoria-card__descripcion">
          {categoria.descripcion}
        </p>

        <div className="catalogo-categoria-card__footer">
          <span className="catalogo-categoria-card__cantidad">
            {categoria.cantidadProductos} prod.
          </span>
          <button type="button" className="catalogo-categoria-card__boton">
            Ver Categoría
          </button>
        </div>
      </div>
    </li>
  );
}