import { AnimatedWord } from './AnimatedWord'	
import { BookCard } from './BookCard';
import './app.css'

export function App() {

  return (
    <>
      <h1>
        ¿Cuál será mi próxima{' '}
        <span style={{ display: 'inline-block', minWidth: 90, transition: 'color 0.3s' }}>
          <AnimatedWord words={['lectura', 'aventura', 'historia', 'investigación']} interval={3000} />
        </span>
        ?
      </h1>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
      {[
        {
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          cover: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
          download: 'https://www.gutenberg.org/ebooks/64317.pdf.utf-8'
        },
        {
          title: 'Pride and Prejudice',
          author: 'Jane Austen',
          cover: 'https://covers.openlibrary.org/b/id/8231856-L.jpg',
          download: 'https://www.gutenberg.org/ebooks/1342.pdf.utf-8'
        },
        {
          title: 'Moby-Dick',
          author: 'Herman Melville',
          cover: 'https://covers.openlibrary.org/b/id/8100920-L.jpg',
          download: 'https://www.gutenberg.org/ebooks/2701.pdf.utf-8'
        }
      ].map(book => (
          <BookCard {...book} key={book.title} />
      ))}
      </ul>
    </>
  )
}
