import { action } from "@ember/object";
import { getOwner } from "discourse-common/lib/get-owner";
import Composer from "discourse/models/composer";
import DropdownSelectBoxComponent from "select-kit/components/dropdown-select-box";
import { computed } from "@ember/object";
                                
export default DropdownSelectBoxComponent.extend({
  classNames: ["new-topic-dropdown"],

  selectKitOptions: {
    showFullTitle: false,
    autoFilterable: false,
    filterable: false,
    showCaret: true,
    none: "topic.create",
  },
  
  content: computed(function () {
    
    const hideForNewUser = this.currentUser && this.currentUser.trust_level > 0;
    
    const items = [
      {
        id: "new_discussion",
        name: "New Topic",
        description: "Start a mew discussion",
        icon: "comment",
      },
    ];
    items.push({
      id: "new_question",
      name: "New Question",
      description: "What would you like to know?",
      icon: "question-circle",
    });
    return items;
  }),

  @action
  onChange(selectedAction) {
    
    if (selectedAction === "new_question") {
      const composerController = getOwner(this).lookup("controller:composer");
      let categoryId = 115;
      
      composerController.open({
        action: Composer.CREATE_TOPIC,
        draftKey: Composer.NEW_TOPIC_KEY,
        categoryId: categoryId,
      });
    }
  
  },
});