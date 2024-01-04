import { withPluginApi } from "discourse/lib/plugin-api";
import { htmlSafe } from "@ember/template";
import { schedule } from "@ember/runloop";

export default {
  name: "ltlitemp",
  initialize() {
    withPluginApi("0.8.7", (api) => {
      // Replace the latest-topic-list-item template
      api.replaceWith("components/latest-topic-list-item", "list/custom-latest-topic-list-item", {
        id: "latest-topic-list-item-override"
      });

      // Modify the component to use the custom template
      api.modifyClass("component:latest-topic-list-item", {
        pluginId: "ltli-template",

        renderLatestTopicListItem() {
          const customTemplate = api.rawTemplates["list/custom-latest-topic-list-item"];
          if (customTemplate) {
            this.set(
              "topicListItemContents", 
              htmlSafe(customTemplate(this))
            );
            schedule("afterRender", () => {
              // ... your existing code here
            });
          } else {
            // If the custom template doesn't exist, fall back to the default behavior
            this._super();
          }
        },
      });
    });
  },
};
