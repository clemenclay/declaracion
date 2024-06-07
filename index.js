// const SURVEY_ID = 1;
<script>
const json = "{\r\n \"title\": \"Formulario para Declaracion Jurada\",\r\n \"completedHtml\": \"<h3>Thank you for your feedback<\/h3>\",\r\n \"completedHtmlOnCondition\": [\r\n  {\r\n   \"html\": \"<h3>Thank you for your feedback<\/h3> <h4>We are glad that you love our product. Your ideas and suggestions will help us make it even better.<\/h4>\"\r\n  },\r\n  {\r\n   \"html\": \"<h3>Thank you for your feedback<\/h3> <h4>We are glad that you shared your ideas with us. They will help us make our product better.<\/h4>\"\r\n  }\r\n ],\r\n \"pages\": [\r\n  {\r\n   \"name\": \"page1\",\r\n   \"elements\": [\r\n    {\r\n     \"type\": \"text\",\r\n     \"name\": \"question1\",\r\n     \"title\": \"Nombre\",\r\n     \"isRequired\": true\r\n    },\r\n    {\r\n     \"type\": \"checkbox\",\r\n     \"name\": \"question3\",\r\n     \"title\": \"Confirmo Declaracion Jurada\",\r\n     \"isRequired\": true,\r\n     \"choices\": [\r\n      {\r\n       \"value\": \"Item 1\",\r\n       \"text\": \"OK\"\r\n      }\r\n     ]\r\n    },\r\n    {\r\n     \"type\": \"file\",\r\n     \"name\": \"question4\",\r\n     \"title\": \"Suba DNI\",\r\n     \"isRequired\": true\r\n    },\r\n    {\r\n     \"type\": \"signaturepad\",\r\n     \"name\": \"question2\",\r\n     \"title\": \"Firma\",\r\n     \"isRequired\": true\r\n    }\r\n   ]\r\n  }\r\n ],\r\n \"showQuestionNumbers\": \"off\"\r\n}";

function createSurveyPdfModel (surveyModel) {

    const pdfWidth = !!surveyModel && surveyModel.pdfWidth ? surveyModel.pdfWidth : 210;
    const pdfHeight = !!surveyModel && surveyModel.pdfHeight ? surveyModel.pdfHeight : 297;
    const options = {
        fontSize: 14,
        margins: {
            left: 10,
            right: 10,
            top: 10,
            bot: 10
        },
        format: [pdfWidth, pdfHeight],

    };
    const surveyPDF = new SurveyPDF.SurveyPDF(json, options);
    if (surveyModel) {
        surveyPDF.data = surveyModel.data;
    }

    return surveyPDF;
}
function saveSurveyToPdf (filename, surveyModel) {
    createSurveyPdfModel(surveyModel).save(filename);
}
const survey = new Survey.Model(json);
survey.addNavigationItem({
    id: "survey_save_as_file",
    title: "Save as PDF",
    action: () => {
        saveSurveyToPdf("surveyResult.pdf", survey);
    }
});
survey.data = {
  "qualities": {
    "affordable": 0,
    "does-what-it-claims": 0,
    "better-than-others": 0,
    "easy-to-use": 0
  },
  "satisfaction-score": 0,
  "recommend": 0,
  "suggestions": "24/7 support would help a lot.",
  "price-comparison": "Not sure",
  "current-price": "correct",
  "price-limits": {
    "highest": 450,
    "lowest": 200
  },
  "email": "@example.com"
};

$("#surveyElement").Survey({ model: survey });

</script>