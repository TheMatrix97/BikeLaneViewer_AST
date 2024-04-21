const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'})

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes.js']

const doc = {
    components: {
        schemas: {
            userSchema: {
                $id: 0,
                $username: 'Neo Felipez',
                $mail: 'matrix@test.net',
            },
            userSchemaInput: {
                $username: 'Neo Felipez',
                $mail: 'matrix@test.net',
            }
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc)