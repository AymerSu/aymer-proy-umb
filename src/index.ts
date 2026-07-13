import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

interface Usuario {
  id: number;
  nombre: string;
}

const usuarios: Usuario[] = [];

app.post("/usuarios", (req: Request, res: Response) => {
  const usuario: Usuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
  };

  usuarios.push(usuario);
  res.status(201).json(usuario);
});

app.get("/usuarios", (_req: Request, res: Response) => {
  res.json(usuarios);
});

app.delete("/usuarios/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const index = usuarios.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      mensaje: "Usuario no encontrado",
    });
  }

  usuarios.splice(index, 1);

  res.json({
    mensaje: "Usuario eliminado",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});