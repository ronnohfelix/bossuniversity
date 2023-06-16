const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>First Name: </h1>${fname.value}
    <br>
    <h1>Last Name: </h1>${lname.value}
    `;

    Email.send({
        SecureToken : "686dd4aa-64ed-4cd5-8972-21b183302793",
        To : 'felixronoh258@gmail.com', 
        From : "felixronoh258@gmail.com",
        Subject : "This is the subject",
        Body : "ebody"
    }).then(
      message => alert(message)
    );
});