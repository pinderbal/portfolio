const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2000,
    reset: true
});

sr.reveal('.jumbo-info',{});
// sr.reveal('.avatar',{delay: 200});
// sr.reveal('.display-4',{delay: 400});
// sr.reveal('.display-test',{delay: 400});

sr.reveal('.skills-title',{}); 
sr.reveal('.skills-description',{delay: 200}); 
sr.reveal('.section img',{ interval: 70});

sr.reveal('.projects-title',{}); 
sr.reveal('.projects-description',{delay: 200});
sr.reveal('.project-item',{ interval: 100});


sr.reveal('.contact_title',{}); 
sr.reveal('.contact_description',{delay: 200});
sr.reveal('.form-row',{ interval: 200});
sr.reveal('.form-group', {interval: 200});
sr.reveal('.form-btn',{delay: 200});
