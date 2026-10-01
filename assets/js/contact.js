// Sends the contact form to Formspree without leaving the page.
// Without JavaScript the form still posts normally and Formspree shows its own confirmation.
document.querySelectorAll('[data-contact-form]').forEach(function (form) {
  var status = form.querySelector('.form-status');
  var button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    button.disabled = true;
    button.textContent = 'Sending…';
    status.textContent = '';
    status.className = 'form-status';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(function (response) {
        if (!response.ok) throw new Error('Request failed');
        form.reset();
        status.textContent = 'Message sent. I’ll reply by email.';
        status.classList.add('is-sent');
      })
      .catch(function () {
        status.textContent = 'Your message didn’t send. Check your connection and try again.';
        status.classList.add('is-error');
      })
      .finally(function () {
        button.disabled = false;
        button.textContent = 'Send message';
      });
  });
});
