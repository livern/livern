function show_points(){
   const list = document.querySelector('.list')
   list.classList.toggle('visible')
   list.classList.toggle('animate__bounceIn')
   const button = document.getElementById('button')
   button.classList.toggle('move-to-close')
}