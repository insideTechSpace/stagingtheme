import { withPluginApi } from "discourse/lib/plugin-api";
import { findRawTemplate } from "discourse-common/lib/raw-templates";
import { htmlSafe } from "@ember/template";

export default {
  name: "itspace",
  initialize() {
    withPluginApi("0.8.7", (api) => {
      const customRoutes = [
        'discovery.latest',
        'discovery.unread',
        'discovery.new',
        'discovery.top',
        'tag.show'
       // 'c/category-slug' // Replace 'category-slug' with the actual category slug,
       // 'tag/sample-tag' // Replace 'sample-tag' with the actual tag,
      ];

      // Use same template on Desktop and MobileView
      api.modifyClass("component:topic-list-item", {
        pluginId: "its-template",

        renderTopicListItem() {
          const currentRoute = Discourse.Route.current().name;

          // Check if the current route is in the customRoutes array
          const useCustomTopicListItem = customRoutes.includes(currentRoute);

          // Use the custom template only on specified routes
          if (useCustomTopicListItem) {
            const template = findRawTemplate("list/custom-topic-list-item");
            if (template) {
              this.set("topicListItemContents", htmlSafe(template(this)));
            }
          }
        },
      });

      api.onPageChange((url, title) => {
        const itsHidden = localStorage.getItem("its_panel_hidden") === "true";
        const itsVisible = localStorage.getItem("its_panel_hidden") === "false";
        const isHidden = document.body.classList.contains("its-panel-hidden");
        
        if (itsHidden && !isHidden) {
          document.body.classList.add("its-panel-hidden");
        } else if (itsVisible && isHidden) {
          document.body.classList.remove("its-panel-hidden");
        }
      });
    });
  },
};
