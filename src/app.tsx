import { useState } from 'preact/hooks';
import { AnimatedWord } from './AnimatedWord';
import { BookCard } from './BookCard';
import './app.css';

export function App() {
  const [showClue, setShowClue] = useState(false);

  return (
    <>
      <h1>
        ¿Cuál será tu próxima{' '}
        <span style={{ display: 'inline-block', minWidth: 90, transition: 'color 0.3s' }}>
          <AnimatedWord
            words={['lectura', 'aventura', 'historia', 'investigación']}
            interval={3000}
          />
        </span>
        ?
      </h1>

      <div style={{ textAlign: 'left', maxWidth: 600, margin: '0 auto 2em auto' }}>
        <p>
          Puede que no sepas qué leer, aquí tien<strong>es</strong> algunas recomendaciones que{' '}
          <strong>t</strong>e pueden g<strong>u</strong>star.
        </p>
        <p>
          No sé si serás capaz de conseguirlos...
          <br />
          <a
            href="#aiudita"
            style={{
              textDecoration: 'underline',
              color: 'inherit',
            }}
          >
            ¿Necesitas ayuda?
          </a>
        </p>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 32, flexWrap: 'wrap' }}>
        {[
          {
            title: 'Todos buscan a Nora Roy',
            author: 'Lorena Franco',
            cover:
              'data:image/jpeg;base64,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',
            download: 'https://password.link/J1pLcf3T/#ak4rMjcqeG9PTERVU3dTSEMh',
          },
          {
            title: 'La isla de las últimas voces',
            author: 'Mikel Santiago',
            cover:
              'data:image/jpeg;base64,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',
            download: 'https://password.link/A7tKSDPW/#MSpVZExeM3pQSUI+S0o5MTcq',
          },
          {
            title: 'La danza de los tulipanes',
            author: 'Ibon Martín',
            cover:
              'data:image/jpeg;base64,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',
            download: 'https://password.link/jBiIWASk/#czUzd1VDLFk+NWkwVz4wVE5E',
          },
          {
            title: 'Sin retorno',
            author: 'Susana Rodríguez Lezaun',
            cover: 'https://m.media-amazon.com/images/I/91QIUE7mQeL._SL1500_.jpg',
            download: 'https://password.link/FUUMqIoG/#dG9GbGcqKSNSUUBrVHRtWjk+',
          },
          {
            title: 'El faro del silencio',
            author: 'Ibon Martín',
            cover: 'https://m.media-amazon.com/images/I/61mS0JP2SAL._SY466_.jpg',
            download: 'https://password.link/ShAWR6dC/#SXNrdklray1tMFplX3MhRlIj',
          },
          {
            title: 'La cueva de Mari',
            author: 'Haizea Lopez',
            cover: 'https://m.media-amazon.com/images/I/71GPpvEjqXL._SL1500_.jpg',
            download: 'https://password.link/fk10b8cI/#SiptWixJWVFHWSYvSk1ISmdq',
          },
        ].map((book) => (
          <BookCard {...book} key={book.title} />
        ))}
      </ul>

      <div
        id="aiudita"
        style={{
          textAlign: 'left',
          maxWidth: 600,
          margin: '3em auto 0 auto',
          background: '#fffbe6',
          borderRadius: 10,
          padding: '1.5em 2em',
          boxShadow: '0 1px 8px rgba(0,0,0,0.04)',
        }}
      >
        <p>
          Vas a necesitar una contraseña para descargar los libros. ¡Vaya faena! Pero no te
          preocupes, es muy fácil.
        </p>
        <p>
          Seguro que no se cansan de decirte <u>qué día es hoy</u>, ¿verdad?
          <br />
          Pues eso es tan importante como cuantos años <strong>cumple</strong>s... Así que{' '}
          <u>todo juntito y con las iniciales en mayúscula</u>
        </p>
        <p style={{ marginTop: '2em' }}>¿Aún no lo tienes claro? ¿Necesitas una pista?</p>
        <button
          type="button"
          style={{
            background: '#ffe066',
            border: 'none',
            borderRadius: 6,
            padding: '1rem 1.5rem',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '1em',
            boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
            transition: 'background 0.2s',
            color: 'inherit',
          }}
          onClick={() => setShowClue((v) => !v)}
        >
          {showClue ? 'Ocultar pista' : 'Mostrar pista'}
        </button>
        {showClue && (
          <p
            style={{
              marginTop: 10,
              background: '#fffde7',
              borderRadius: 6,
              padding: '0.8em 1em',
              fontFamily: 'Delius',
            }}
          >
            Tres palabras y dos números...lee detenidamente y haz preguntas si no lo tienes claro.
          </p>
        )}
      </div>
    </>
  );
}
