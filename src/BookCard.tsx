import type { FunctionComponent } from 'preact';

interface BookCardProps {
  title: string;
  author: string;
  cover: string;
  download: string;
}

export const BookCard: FunctionComponent<BookCardProps> = ({ title, author, cover, download }) => (
  <li
    style={{
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 16px rgba(0,0,0,0.07), 0 1.5px 4px rgba(0,0,0,0.04)',
      padding: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      position: 'relative',
      transition: 'box-shadow 0.2s',
      overflow: 'hidden',
      minHeight: 160,
      width: '100%',
    }}
  >
    <div
      style={{
        width: 110,
        minWidth: 110,
        height: 160,
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        flexShrink: 0,
      }}
    />
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '18px 20px 20px 20px',
        position: 'relative',
        minHeight: 0,
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: '1.08rem',
          color: '#222',
          lineHeight: 1.2,
          marginBottom: 6,
          textAlign: 'left',
          width: '100%',
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontWeight: 400,
          fontSize: '0.98rem',
          color: '#666',
          marginBottom: 0,
          textAlign: 'left',
          width: '100%',
        }}
      >
        {author}
      </div>
      <a
        href={download}
        target="_blank"
        rel="noopener noreferrer"
        download
        style={{
          position: 'absolute',
          right: 20,
          bottom: 20,
          background: 'linear-gradient(90deg, #ffe066 60%, #ffd18c 100%)',
          color: '#222',
          fontWeight: 600,
          border: 'none',
          borderRadius: 6,
          padding: '0.45em 1em',
          textDecoration: 'none',
          fontSize: '0.98rem',
          boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
          cursor: 'pointer',
          transition: 'background 0.2s, box-shadow 0.2s',
          letterSpacing: '0.01em',
          whiteSpace: 'nowrap',
        }}
      >
        ¡Lo quiero!
      </a>
    </div>
  </li>
);
