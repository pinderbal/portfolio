window.sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2000,
    reset: false,
    mobile: false
});

sr.reveal('.jumbo-info',{});

sr.reveal('.skills-title',{}); 
sr.reveal('.skills-description',{delay: 200}); 
sr.reveal('.section img',{ interval: 70});

sr.reveal('.projects-title',{}); 
sr.reveal('.projects-description',{delay: 200});
sr.reveal('.project-item',{ interval: 100});

sr.reveal('.contact-title',{}); 
sr.reveal('.contact-description',{delay: 200}); 

sr.reveal('.form-row',{ interval: 200});
sr.reveal('.form-group', {interval: 200});
sr.reveal('.form-btn',{delay: 200});
