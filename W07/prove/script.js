const form = document.querySelector("#ticketForm");
const type = document.querySelector("#type");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const dynamicType =document.querySelector('#dynamic-field');

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
form.availableDate.min = tomorrow.toLocaleDateString('en-CA');


type.addEventListener('change', updateDynamicField);

function updateDynamicField () {


    let fieldset = document.querySelector('fieldset');
    if(type.value == 'student' || type.value == 'guess'){
        fieldset.style.display = 'block';

        let legend = fieldset.querySelector('legend');
        if(type.value == 'student'){
            legend.textContent = 'Student I#'
            dynamicType.required = true;
            dynamicType.pattern = '\\d{9,}';
        }if(type.value == 'guess'){
            legend.textContent = 'Access Code'
            dynamicType.required = true;
            dynamicType.pattern = 'EVENT131';
        }
    }
    notesContainer.hidden = true;
}


dynamicType.addEventListener('invalid', showNotes);

function showNotes () {
    notes.textContent = type.value == 'student'
        ? 'Student ID must be at least 9 digits'
        : 'Event code is invalid';
    notesContainer.hidden = false;
}

// submit only fires once every field passes validation
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const typeText = type.options[type.selectedIndex].text;
    const lines = ['Ticket created:', name, typeText, form.availableDate.value];
    notes.replaceChildren(...lines.map((line) => {
        const p = document.createElement('p');
        p.textContent = line;
        return p;
    }));
    notesContainer.hidden = false;
});