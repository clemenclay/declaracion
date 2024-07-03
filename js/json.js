const json = {
  "locale": "es",
  "logo": "https://clemenclay.github.io/declaracion/logo-agc-mail.png",
  "logoWidth": "230",
  "logoHeight": "81",
  "pages": [
   {
    "name": "page3",
    "elements": [
     {
      "type": "text",
      "name": "question4",
      "title": {
       "es": "Nombre"
      },
      "isRequired": true
     },
     {
      "type": "text",
      "name": "question3",
      "startWithNewLine": false,
      "title": {
       "es": "Apellido"
      },
      "isRequired": true
     },
     {
      "type": "text",
      "name": "question5",
      "title": {
       "es": "Usuario Actual (Mail)"
      },
      "isRequired": true,
      "inputType": "email"
     },
     {
      "type": "text",
      "name": "question6",
      "startWithNewLine": false,
      "title": {
       "es": "CUIT del Usuario Actual"
      },
      "isRequired": true,
      "maskType": "pattern",
      "maskSettings": {
       "pattern": "99-99999999-9"
      }
     },
     {
      "type": "matrixdynamic",
      "name": "question7",
      "title": {
       "es": "Dominios del Titular"
      },
      "isRequired": true,
      "columns": [
       {
        "name": "Column 1",
        "title": {
         "es": "Dominio/s"
        },
        "cellType": "text",
        "placeholder": {
         "es": "Agregue la patente de 1 o más vehiculos del titular"
        }
       }
      ],
      "choices": [
       1,
       2,
       3,
       4,
       5
      ],
      "rowCount": 1,
      "confirmDelete": true,
      "allowRowsDragAndDrop": true
     },
     {
      "type": "signaturepad",
      "name": "question2",
      "title": "Firma",
      "isRequired": true
     }
    ],
    "title": {
     "es": "Declaracion jurada"
    }
   }
  ],
  "showQuestionNumbers": "off"
 };
