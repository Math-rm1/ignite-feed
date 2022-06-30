import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1501769752-a59efa2298ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt="Imagem de Capa"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/math-rm1.png" />
        <strong>Matheus Rodrigues Mariano</strong>
        <span>Front-end Developer</span>
      </div>

      <footer>
        <a href="/#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
