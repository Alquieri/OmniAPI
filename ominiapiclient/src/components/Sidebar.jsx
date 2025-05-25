import Link from "next/link";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h1>OmniAPI</h1>
      <nav className={styles.nav}>
        <Link href="/criar" className={styles.link}>
          <Plus size={18} /> Adicionar Alien
        </Link>
        <Link href="/visualizar" className={styles.link}>
          <Eye size={18} /> Seus aliens
        </Link>
        <Link href="/editar" className={styles.link}>
          <Pencil size={18} /> Editar
        </Link>
        <Link href="/deletar" className={styles.link}>
          <Trash2 size={18} /> Deletar
        </Link>
      </nav>
    </div>
  );
}
