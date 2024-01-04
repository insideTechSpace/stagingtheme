import { withPluginApi } from "discourse/lib/plugin-api";
import { htmlSafe } from "@ember/template";
import { schedule } from "@ember/runloop";
import { getOwner } from "@ember/application";

export default {
  name: "ltlitemp",
  initialize() {
    withPluginApi("0.8.7", (api) => {
      // Fetch the theme ID
      const themeId = api.container.lookup("site-settings:main").theme_id;

      // Override the latest-topic-list-item template
      api.rawTemplate("connectors/latest-topic-list-item/default.hbs", `
        {{raw-html topicListItemContents}}
      `, { id: `latest-topic-list-item-override-${themeId}` });

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
                if (this.isDestroyed || this.isDestroying) {
                    return;
                  }
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
