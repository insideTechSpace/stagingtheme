import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "discourse-navigation-controls",

  initialize() {
    withPluginApi("0.8.13", (api) => {
      const site = api.container.lookup("site:main");
      if (!site.mobileView) return;
      
      const body = document.body;
      const hiddenNavClass = "scroll-down";

      const add_class_on_scroll = () => body.classList.add(hiddenNavClass);
      const remove_class_on_scroll = () => body.classList.remove(hiddenNavClass);

      const handleScroll = () => {
        const scrollTop = window.scrollY;
        
        if (body.classList.contains("has-full-page-chat")) {
          // If the body has class .has-full-page-chat, remove the scroll-down class
          remove_class_on_scroll();
        } else if (
          lastScrollTop < scrollTop &&
          scrollTop > scrollMax &&
          !body.classList.contains(hiddenNavClass)
        ) { 
          // Add scroll-down class based on your existing conditions
          add_class_on_scroll();
        } else if (
          lastScrollTop > scrollTop &&
          body.classList.contains(hiddenNavClass)
        ) { 
          // Remove scroll-down class based on your existing conditions
          remove_class_on_scroll();
        }
        
        lastScrollTop = scrollTop;
      };

      let scrollTop = window.scrollY;
      const scrollMax = 0;
      let lastScrollTop = 0;

      window.addEventListener('scroll', handleScroll);

      // Trigger handleScroll on initialization
      handleScroll();
    });
  },
};
