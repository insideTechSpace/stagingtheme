import { withPluginApi } from "discourse/lib/plugin-api";
import { findRawTemplate } from "discourse-common/lib/raw-templates";
import { htmlSafe } from "@ember/template";

export default {
  name: "fkbpro",
  initialize() {
    withPluginApi("0.8.7", (api) => {
      // Use same template only on the "discovery.latest" route
      api.modifyClass("component:topic-list-item", {
        pluginId: "fkb-template",

        renderTopicListItem() {
          // Get the current route
          const currentRoute = Discourse.Route.current().name;

          // Check if the current route is "discovery.latest"
          if (currentRoute === "discovery.latest") {
            // Use the custom template for "discovery.latest" route
            const template = findRawTemplate("list/custom-topic-list-item");
            if (template) {
              this.set("topicListItemContents", htmlSafe(template(this)));
            }
          } else {
            // Use the default template for other routes
            super.renderTopicListItem();
          }
        },
      });


    });
  },
};
