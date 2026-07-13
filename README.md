# aymer-proy-umb
Project presentation as an UMB activity

# API REST de Gestión de Usuarios

Proyecto desarrollado con **Node.js**, **TypeScript** y **Express** como parte de la implementación de una API REST básica para la gestión de usuarios.

## Tecnologías utilizadas

- Node.js
- TypeScript
- Express
- Jest
- Supertest
- ESLint
- SonarCloud
- GitHub Actions

---

# Estructura del proyecto

```text
aymer-proy-umb/
│
├── src/
│   ├── services/
│   │   └── usuario.services.ts
│   │
│   ├── app.ts
│   └── index.ts
│
├── tests/
│   └── services/
│       └── usuario.servives.spec.ts
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── coverage/
├── package.json
├── tsconfig.json
├── sonar-project.properties
└── README.md
```

---

# Instalación

Clonar el repositorio:

```bash
git clone https://github.com/TU_USUARIO/aymer-proy-umb.git
```

Entrar al proyecto:

```bash
cd aymer-proy-umb
```

Instalar dependencias:

```bash
npm install
```

---

# Ejecutar el proyecto

Modo desarrollo:

```bash
npm run dev
```

Salida esperada:

```text
Servidor ejecutándose en http://localhost:3000
```

---

# Compilar TypeScript

```bash
npm run build
```

Archivos generados:

```text
dist/
```

---

# Ejecutar pruebas

```bash
npm test
```

Pruebas con cobertura:

```bash
npm test -- --coverage
```

---

# API REST

URL base:

```text
http://localhost:3000
```

---

## Crear usuario

### Endpoint

```http
POST /usuarios
```

### Body

```json
{
  "nombre": "Juan"
}
```

### Curl Linux / Git Bash

```bash
curl -X POST http://localhost:3000/usuarios \
-H "Content-Type: application/json" \
-d '{"nombre":"Juan"}'
```

### Curl Windows CMD

```cmd
curl -X POST http://localhost:3000/usuarios ^
-H "Content-Type: application/json" ^
-d "{\"nombre\":\"Juan\"}"
```

### Respuesta

```json
{
  "id": 1,
  "nombre": "Juan"
}
```

### Código HTTP

```text
201 Created
```

---

## Listar usuarios

### Endpoint

```http
GET /usuarios
```

### Curl

```bash
curl http://localhost:3000/usuarios
```

### Respuesta

```json
[
  {
    "id": 1,
    "nombre": "Juan"
  }
]
```

### Código HTTP

```text
200 OK
```

---

## Eliminar usuario

### Endpoint

```http
DELETE /usuarios/{id}
```

### Ejemplo

```http
DELETE /usuarios/1
```

### Curl

```bash
curl -X DELETE http://localhost:3000/usuarios/1
```

### Respuesta

```json
{
  "mensaje": "Usuario eliminado"
}
```

### Código HTTP

```text
200 OK
```

---

## Usuario no encontrado

### Endpoint

```http
DELETE /usuarios/999
```

### Respuesta

```json
{
  "mensaje": "Usuario no encontrado"
}
```

### Código HTTP

```text
404 Not Found
```

---

## Validación de nombre obligatorio

### Endpoint

```http
POST /usuarios
```

### Body incorrecto

```json
{}
```

### Respuesta

```json
{
  "mensaje": "El nombre es obligatorio"
}
```

### Código HTTP

```text
400 Bad Request
```

---

# Arquitectura

La aplicación sigue una arquitectura simple basada en capas:

```text
Cliente
   │
   ▼
Endpoints REST (Express)
   │
   ▼
Servicios de negocio
   │
   ▼
Arreglo en memoria
```

Actualmente los usuarios se almacenan en memoria:

```ts
const usuarios: Usuario[] = [];
```

Por lo tanto, al reiniciar el servidor los datos se pierden.

---

# Integración Continua (CI)

El proyecto utiliza GitHub Actions para ejecutar automáticamente:

- Instalación de dependencias
- Análisis estático con ESLint
- Ejecución de pruebas
- Cobertura de código
- Compilación TypeScript
- Análisis de calidad con SonarCloud

Workflow:

```text
.github/workflows/ci.yml
```

---

# Cobertura de código

Se configuró Jest con Istanbul para generar métricas de cobertura.

Objetivos establecidos:

- Statements ≥ 80%
- Branches ≥ 80%
- Functions ≥ 80%
- Lines ≥ 80%

---

# Calidad de código

Se utiliza:

- ESLint
- SonarCloud
- GitHub Actions

Para garantizar:

- Estándares de codificación
- Detección temprana de errores
- Cobertura mínima requerida
- Seguridad básica del proyecto

---

# Autor

Aymer Yesid Cruz Suescun

Universidad Manuela Beltrán