function sendMail() {
    var params = {
        from_name: document.getElementById("name").value,
        user_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_06kyuos";
    const templateID = "template_0uiwebj";

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        alert("Your message was sent successfully ✅");
        console.log(res);
    })
    .catch(err => console.error("EmailJS Error:", err));
}