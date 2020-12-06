window.onload = () => {
  const owl = {
    init: function () {
      this.slider('.overview-carousel');
      this.slider('.client-carousel');
    },
    slider: function (target) {
      const mainWrap = $(target)
      let options = {}
      switch (target) {
        case '.overview-carousel':
          options = {
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
              0: {
                items: 1
              },
            }
          }
          break;
        case '.client-carousel':
          options = {
            loop: false,
            margin: 10,
            autoplay: false,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
              0: {
                items: 2
              },
              425:{
                items:2
              },
              768:{
                items:3
              },
              1024:{
                items: 5
              },
              1520:{
                items: 6
              }
            }
          }
          break;
        default:
          return true
      }
      if (mainWrap) {
        $(mainWrap).owlCarousel(options)
      }
    },
  }
  owl.init();

  // const loading = {
  //   init: function () {
  //     this.loading()
  //   },
  //   loading: function () {
  //     const loading = document.querySelector('#loading')
  //     setTimeout(() => {
  //       loading.classList.add('active')
  //     }, 1000)
  //   },
  // }
  // loading.init()

  const category = {
    init: function() {
      this.openMenu()
    },
    openMenu: function() {
      const main = document.querySelector('#category-menu')
      if (main) {
        const menuLevel = main.querySelectorAll('.menu-level')

        menuLevel.forEach((item, index) => item.addEventListener('click', () => {
          item.classList.toggle('active')

          const menuChild = item.querySelector('.menu-item-child')
          if (menuChild) {
            menuChild.classList.toggle('active')
          }
        }))
      }
    },
  }
  category.init()
}