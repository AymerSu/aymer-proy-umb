import request from 'supertest';
import app from '../../src/app';

import {
  crearUsuario,
  listarUsuarios,
  eliminarUsuario
} from '../../src/services/usuario.services';

describe('Pruebas de Integración - API Usuarios', () => {

  test('POST /usuarios', async () => {
    const res = await request(app)
      .post('/usuarios')
      .send({ nombre: 'Juan' });

    expect(res.status).toBe(201);
  });

  test('GET /usuarios', async () => {
    const res = await request(app)
      .get('/usuarios');

    expect(res.status).toBe(200);
  });

  test('DELETE /usuarios/999', async () => {
    const res = await request(app)
      .delete('/usuarios/999');

    expect(res.status).toBe(404);
  });

});

describe('Pruebas Unitarias - Usuario Service', () => {

  test('Debe crear usuario', () => {
    const usuario = crearUsuario('Pedro');

    expect(usuario.nombre).toBe('Pedro');
  });

  test('Debe asignar id', () => {
    const usuario = crearUsuario('Ana');

    expect(usuario.id).toBeGreaterThan(0);
  });

  test('Listar usuarios retorna arreglo', () => {
    expect(Array.isArray(listarUsuarios())).toBe(true);
  });

  test('Eliminar usuario existente', () => {
    const usuario = crearUsuario('Carlos');

    expect(eliminarUsuario(usuario.id)).toBe(true);
  });

  test('Eliminar usuario inexistente', () => {
    expect(eliminarUsuario(9999)).toBe(false);
  });

  test('Debe conservar correctamente el nombre del usuario creado', () => {
  const usuario = crearUsuario('Laura');

  expect(usuario).toEqual(
    expect.objectContaining({
      nombre: 'Laura'
    })
  );
});


test('Debe aumentar la cantidad de usuarios después de crear uno nuevo', () => {
  const cantidadInicial = listarUsuarios().length;

  crearUsuario('Andrés');

  const cantidadFinal = listarUsuarios().length;

  expect(cantidadFinal).toBe(cantidadInicial + 1);
});

test('POST /usuarios debe retornar 400 cuando no se envía nombre', async () => {
  const res = await request(app)
    .post('/usuarios')
    .send({});

  expect(res.status).toBe(400);
  expect(res.body.mensaje).toBe('El nombre es obligatorio');
});

test('DELETE /usuarios/:id debe eliminar un usuario existente', async () => {
  const creado = await request(app)
    .post('/usuarios')
    .send({ nombre: 'Carlos' });

  const id = creado.body.id;

  const eliminado = await request(app)
    .delete(`/usuarios/${id}`);

  expect(eliminado.status).toBe(200);
  expect(eliminado.body.mensaje).toBe('Usuario eliminado');
});

});