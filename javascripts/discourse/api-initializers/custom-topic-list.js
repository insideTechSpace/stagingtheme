import { withPluginApi } from "discourse/lib/plugin-api";
import { findRawTemplate } from "discourse-common/lib/raw-templates";
import { htmlSafe } from "@ember/template";

export default {
  name: "fkbpro",
  initialize() {
    withPluginApi("0.8.7", (api) => {
      api.modifyClass("component:topic-list-item", {
        pluginId: "fkb-template",

        renderTopicListItem() {
          const isLatestPostsPage = api.container.lookup("router:main").currentRouteName === "discovery.latest";

          let templateName = isLatestPostsPage ? "list/custom-topic-list-item" : "components/topic-list-item";
          const template = findRawTemplate(templateName);

          if (template) {
            this.set("topicListItemContents", htmlSafe(template(this)));
          }
        },
      });
    });
  },
};
