import { withPluginApi } from "discourse/lib/plugin-api";
import { htmlSafe } from "@ember/template";
import { schedule } from "@ember/runloop";

export default {
  name: "ltsspace",
  initialize() {
    withPluginApi("0.8.7", (api) => {
      // Override the latest-topic-list-item template
      api.modifyClass("component:latest-topic-list-item", {
        pluginId: "lts-template",

        renderLatestTopicListItem() {
          const customTemplate = api.container.lookup("template:list/custom-topic-list-item");
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

      // ... your other modifications here
    });
  },
};
