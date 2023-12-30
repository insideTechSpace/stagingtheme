import { withPluginApi } from "discourse/lib/plugin-api";
import { findRawTemplate } from "discourse-common/lib/raw-templates";
import { htmlSafe } from "@ember/template";

export default {
  name: "itspace",
  initialize() {
    withPluginApi("0.8.7", (api) => {
      // Use default topic-list-item template for all topics
      api.modifyClass("component:topic-list-item", {
        pluginId: "its-template",

        renderTopicListItem() {
          const template = findRawTemplate("list/topic-list-item");
          if (template) {
            this.set("topicListItemContents", htmlSafe(template(this)));
          }
        },
      });

      // Use custom-topic-list-item template only on the specified routes
      if (this.get("router.currentRouteName") in ["discovery.latest", "discovery.unread", "discovery.new", "discovery.top", "tag.show"]) {
        api.modifyClass("component:topic-list-item", {
          pluginId: "its-template",

          renderTopicListItem() {
            const template = findRawTemplate("list/custom-topic-list-item");
            if (template) {
              this.set("topicListItemContents", htmlSafe(template(this)));
            }
          },
        });
      }

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