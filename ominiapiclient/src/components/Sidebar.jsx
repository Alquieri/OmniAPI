import Link from "next/link";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";

export default function Sidebar() {
return (
    <div
        style={{
            width: "16rem",
            height: "100vh",
            background: "#111",
            color: "#fff",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            borderRight: "4px solid #43c654",
            boxShadow: "0 0 24px #43c65455",
        }}
    >
        <h1
            style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                letterSpacing: "2px",
                textShadow: "0 0 3px #43c65499",
            }}
        >
            OmniAPI
        </h1>
        <nav
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                fontSize: "1.125rem",
            }}
        >
            <Link
                href="/criar"
                style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1rem",
                    border: "1px solid #43c654",
                    borderRadius: "8px",
                    background: "rgba(67,198,84,0.08)",
                    transition: "background 0.2s, border 0.2s",
                }}
            >
                <Plus size={18} /> Criar
            </Link>
            <Link
                href="/visualizar"
                style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1rem",
                    border: "1px solid #43c654",
                    borderRadius: "8px",
                    background: "rgba(67,198,84,0.08)",
                    transition: "background 0.2s, border 0.2s",
                }}
            >
                <Eye size={18} /> Visualizar
            </Link>
            <Link
                href="/editar"
                style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1rem",
                    border: "1px solid #43c654",
                    borderRadius: "8px",
                    background: "rgba(67,198,84,0.08)",
                    transition: "background 0.2s, border 0.2s",
                }}
            >
                <Pencil size={18} /> Editar
            </Link>
            <Link
                href="/deletar"
                style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1rem",
                    border: "1px solid #43c654",
                    borderRadius: "8px",
                    background: "rgba(67,198,84,0.08)",
                    transition: "background 0.2s, border 0.2s",
                }}
            >
                <Trash2 size={18} /> Deletar
            </Link>
        </nav>
    </div>
);
}
