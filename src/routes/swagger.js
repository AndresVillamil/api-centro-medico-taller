const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui');

//Metadata info about our API
const options = {
    definition: {
        openapi: "3.0.0",
        info: { title: 'Centro Medico API', 'version': '1.0.0'}
    },
    apis: ['src/routes/pacientes.routes.ts', 'src/models/pacientes.models.ts']
}

// Docs en JSON format

const swaggerSpec = swaggerJSDoc(options)

