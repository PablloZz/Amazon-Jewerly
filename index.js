const input = document.getElementById('search');
input.value = 'Search here';
input.addEventListener('focus', () => {
  input.value = ''
})

document.addEventListener('click', e => {
  const sidebar = document.querySelector('.footer');
  const sidebar480 = document.querySelector('.footer480');
  const sidebar768 = document.querySelector('.footer768');
  const sidebar1024 = document.querySelector('.footer1024');
  const overlay = document.querySelector('.overlay');



  //768
  if (e.target.matches('[data-show]')) {
    sidebar768.classList.toggle('active')
  }

  if (sidebar768.classList.contains('active') && !e.target.matches('[data-show]') && e.target.closest('[data-footer768]') == null) {
    sidebar768.classList.remove('active')
    overlay.classList.remove('active')
  }

  //480
  if (e.target.matches('[data-show]')) {
    sidebar480.classList.toggle('active')
  }

  if (sidebar480.classList.contains('active') && !e.target.matches('[data-show]') && e.target.closest('[data-footer480]') == null) {
    sidebar480.classList.remove('active')
    overlay.classList.remove('active')
  }

  //1024
  if (e.target.matches('[data-show]')) {
    sidebar1024.classList.toggle('active')
  }

  if (sidebar1024.classList.contains('active') && !e.target.matches('[data-show]') && e.target.closest('[data-footer1024]') == null) {
    sidebar1024.classList.remove('active')
    overlay.classList.remove('active')
  }
  //
  if (e.target.matches('[data-show]')) {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
  }

  if (sidebar.classList.contains('active') && !e.target.matches('[data-show]') && e.target.closest('[data-footer]') == null) {
    sidebar.classList.remove('active')
    overlay.classList.remove('active')
  }

})