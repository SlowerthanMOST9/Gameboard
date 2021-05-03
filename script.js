var main = function() {
    $('.more-btn').on('click', (event) => {
      $(event.currrentTarget).siblings('.more-menu').toggle();
    });
    $('.share').on('click', (event) => {
      $(event.currentTarget).next().toggle();
    });
  
    $('notification').on('click', (event) => {
  
      $(event.currentTarget).toggleClass('active');
    })
  
  };
  
  $(document).ready(main);