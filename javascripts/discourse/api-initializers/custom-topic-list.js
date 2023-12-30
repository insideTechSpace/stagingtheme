// Register a new theme initializer
api.registerInitializer('injectCustomTopicListItem', {
    name: 'inject-custom-topic-list-item',
    initialize() {
      const currentRoute = api.container.lookup('router:main').currentRouteName;
  
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
        ? 'list/custom-topic-list-item'
        : 'list/default-topic-list-item';
  
      // Inject the template into the topic list
      api.addTemplate('list/topic-list-item', `theme/${templateName}`);
    }
  });
  