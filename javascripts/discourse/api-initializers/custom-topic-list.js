// Register a new theme initializer
api.registerInitializer('injectCustomTopicListItem', {
    name: 'inject-custom-topic-list-item',
    initialize() {
      const currentRoute = Discourse.Route.current().name;
  
      // Define the routes where the custom topic list item should be used
      const customRoutes = [
        'discovery.latest',
        'discovery.top',
        'discovery.new'
      ];
  
      // Check if the current route is in the customRoutes array
      const useCustomTopicListItem = customRoutes.includes(currentRoute);
  
      // Define the template to be used based on the condition
      const templateName = useCustomTopicListItem
        ? 'components/custom-topic-list-item'
        : 'components/default-topic-list-item';
  
      // Modify the TopicListItemClass to use the selected template
      api.modifyClass('component:topic-list-item', {
        tagName: templateName
      });
    }
  });
  