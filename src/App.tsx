import { Header } from './components/Header';
import { Post, PostProps } from './components/Post';

import './global.css';

import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/camarvito.png',
      name: 'Victor Camargo',
      role: 'Back-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Oi pessoal!' },
      {
        type: 'paragraph',
        content:
          'Meu amigo Matheus acabou de subir mais um projeto no portifa dele. É um projeto que ele fez no Ignite, bootcamp da Rocketseat. O nome do projeto é Ignite Feed 🚀'
      },
      { type: 'link', content: 'github.com/math-rm1' }
    ],
    publishedAt: new Date('2022-06-30 08:00')
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/math-rm1.png',
      name: 'Matheus Rodrigues Mariano',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, bootcamp da Rocketseat. O nome do projeto é Ignite Feed 🚀'
      },
      { type: 'link', content: 'github.com/math-rm1' }
    ],
    publishedAt: new Date('2022-06-29 09:25')
  }
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts?.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
