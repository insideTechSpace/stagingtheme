import { withPluginApi } from "discourse/lib/plugin-api";
import { findRawTemplate } from "discourse-common/lib/raw-templates";
import { htmlSafe } from "@ember/template";
import { addObserver, removeObserver } from "@ember/object/observers";

export default {
  name: "fkbpro",
  initialize() {
    withPluginApi("0.8.7", (api) => {
      api.modifyClass("component:topic-list-item", {
        pluginId: "fkb-template",

        addCustomBodyClass(isLatestPostsPage) {
          const bodyElement = document.querySelector("body");

          if (bodyElement) {
            if (isLatestPostsPage) {
              bodyElement.classList.add("custom-tl");
            } else {
              bodyElement.classList.remove("custom-tl");
            }
          }
        },

        setupObservers() {
          const router = api.container.lookup("router:main");

          addObserver(this, "attrs.isLatestPostsPage", this, "addCustomBodyClass");

          this.addCustomBodyClass(router.currentRouteName === "discovery.latest");
        },

        destroy() {
          removeObserver(this, "attrs.isLatestPostsPage", this, "addCustomBodyClass");
        },

        renderTopicListItem() {
          const isLatestPostsPage = this.attrs.isLatestPostsPage;
          this.setupObservers();

          let templateName = isLatestPostsPage ? "list/custom-topic-list-item" : "components/topic-list-item";
          let template = findRawTemplate(templateName);

          // Fallback to the original Discourse template if neither custom nor default is available
          if (!template) {
            templateName = isLatestPostsPage ? "list/latest-topic-list-item" : "list/topic-list-item";
            template = findRawTemplate(templateName);
          }

          if (template) {
            this.set("topicListItemContents", htmlSafe(template(this)));
          }
        },
      });
    });
  },
};
