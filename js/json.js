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
           "type": "multipletext",
           "name": "question1",
           "title": "Declaracion jurada",
  

           "items": [
            {
             "name": "text1",
             "isRequired": true,
             "title": "Apellido"
            },
            {
             "name": "text2",
             "isRequired": true,
             "title": "Nombre"
            },
            {
             "name": "text3",
             "isRequired": true,
             "title": "Usuario Actual (Mail)",
             "inputType": "email"
            },
            {
             "name": "text4",
             "isRequired": true,
             "title": "CUIT del Usuario Actual",
             "maskType": "pattern",
             "maskSettings": {
             "pattern": "99-99999999-9"
       }
            },

            {
              "name": "text5",
              "isRequired": true,
              "title": "Dominio de algún Vehículo"
             }
           ]
          },
          {
           "type": "signaturepad",
           "name": "question2",
           "isRequired": true,
           "title": "Firma"
          }
         ]
        }
       ]
    
    ,
    "showQuestionNumbers": false
  };
