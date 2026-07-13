export interface Usuario {
  id: number;
  nombre: string;
}

const usuarios: Usuario[] = [];

export const crearUsuario = (nombre: string): Usuario => {
  const usuario = {
    id: usuarios.length + 1,
    nombre
  };

  usuarios.push(usuario);
  return usuario;
};

export const listarUsuarios = (): Usuario[] => usuarios;

export const eliminarUsuario = (id: number): boolean => {
  const index = usuarios.findIndex(u => u.id === id);

  if (index === -1) return false;

  usuarios.splice(index, 1);
  return true;
};