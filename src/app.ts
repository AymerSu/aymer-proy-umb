import express, { Request, Response } from 'express';

import {
  crearUsuario,
  listarUsuarios,
  eliminarUsuario
} from './services/usuario.services';

const app = express();

app.use(express.json());

app.post('/usuarios', (req: Request, res: Response) => {
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({
      mensaje: 'El nombre es obligatorio'
    });
  }

  const usuario = crearUsuario(nombre);

  return res.status(201).json(usuario);
});

app.get('/usuarios', (_req: Request, res: Response) => {
  return res.status(200).json(listarUsuarios());
});

app.delete('/usuarios/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const eliminado = eliminarUsuario(id);

  if (!eliminado) {
    return res.status(404).json({
      mensaje: 'Usuario no encontrado'
    });
  }

  return res.status(200).json({
    mensaje: 'Usuario eliminado'
  });
});

export default app;