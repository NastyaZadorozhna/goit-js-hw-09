const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {email: "", message: ""};


const fillFormField = () => {
    const formDataFromLs = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (formDataFromLs === null){
        return;
    }

    formData = formDataFromLs;

   

    for (const key in formDataFromLs){
        if (formDataFromLs.hasOwnProperty(key)){
            feedbackFormEl.elements[key].value = formDataFromLs[key];
        }  
    }
}

fillFormField();

const onFormFieldInput = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


const onFeedbackSubmit = event => {
    event.preventDefault();

    if(!feedbackFormEl.elements.email.value.trim() || !feedbackFormEl.elements.message.value.trim()){
        alert('Fill please all fields');
            return;
    }

    console.log(formData);
   
    localStorage.removeItem('feedback-form-state');
    formData = {
        email: "",
        message: ""
    };
    event.target.reset();
};


feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackSubmit);
