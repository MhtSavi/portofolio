document.addEventListener('DOMContentLoaded', function() {
    const humburger = document.querySelector('.humburger');
    const lienNavig = document.querySelector('.lien-nav');

    humburger.addEventListener('click', function(){
        lienNavig.classList.toggle('afficher');
    });
     
    const liens = document.querySelectorAll('.lien-nav a');
    liens.forEach(lien => {
        lien.addEventListener('click', function(){
            lienNavig.classList.remove('afficher');
        });
    });

    const form = document.getElementById('contact-form');
    if(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nom = document.querySelector('#contact-form input[type="text"]');
            const email = document.querySelector('#contact-form input[type="email"]');
            const message = document.querySelector('#contact-form textarea');

            let erreurs= [];
            if(!nom.value.trim()) erreurs.push("Veuillez entrer votre nom.");
            if(!email.value.trim() || !email.value.includes('@')) 
                erreurs.push('Email invalide');
            if(!message.value.trim()) erreurs.push("Veuillez entrer un message");
            
            if (erreurs.length > 0) {
                alert("Erreurs:\n"+erreurs.join("\n"));
            }else{
                form.Message.textContent ="✅️ Message envoyé. Merci !";
                form.reset();
                setTimeout()=> { form.Message.textContent ='';}, 4000);
            }
        });
    }
});