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
// Ocultar el botón de guardar como PDF al principio
$(document).ready(function() {
    $("#deshabilit").hide();
});

// Manejar el evento onComplete de SurveyJS

survey.onComplete.add((sender, options) => {
    
    saveSurveyToPdf("surveyResult.pdf", survey);

});



// Agregar el botón de navegación para guardar como PDF
survey.addNavigationItem({
    id: "deshabilit",
    title: "Save as PDF",
    action: function() {
        saveSurveyToPdf("surveyResult.pdf", survey);
    }
});

// Renderizar la encuesta en el elemento con id "surveyContainer"
survey.render("surveyContainer");



$("#surveyElement").Survey({ model: survey });
