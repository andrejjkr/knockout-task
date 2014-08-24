var documentsViewModel = function(){
    var self = this;
    self.documents = [
        {name:'О компании QAP INT.'},
        {name:'Преимущества использования CLM-инструмента для Вашего бизнеса.'},
        {name:'Перспективы сотрудничества с QAP INT.'},
        {name:'Описание решения для разработки HTML5-презинтаций.'},
        {name:'Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com (русский).'},
        {name:'Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com (english).'}
    ];

    self.mail = ko.observable();
    self.subject = ko.observable();
    self.mailText = ko.observable();
    self.selectedDocs = ko.observableArray([]);
}

var docVM = new documentsViewModel();
ko.applyBindings(docVM);

window.displayResults = function(){
    var mail = docVM.mail();
    var subject = docVM.subject();
    var mailText = docVM.mailText();
    var selectedDocsName = docVM.selectedDocs().join('\n');
    alert('E-mail: ' + mail + '\n' + 'Тема: '+subject+'\n'+'Текст сообщения: '+mail+'\n'+'Прикрепленные файлы: ' +'\n'+ selectedDocsName);
};