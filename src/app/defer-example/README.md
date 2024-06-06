In this examples we will use Angular @defer along with @loading and @placeholder. We will use there triggers: timer, minimum, interaction, hover, prefetch and conditions when.

1. In the first example we should use trigger timer to delay fetching heavy component for 2 seconds, include placeholder text and loading text (loading should be visible for minimum 2 seconds).

2. In the second example we should use trigger interaction and hover combined. Interaction trigger should be fired when we click on the button "show more" without using any variables (signals are not allowed in this example also). Hover trigged should be triggered when @placeholder is hovered.

3. In the third example we should use when condition and prefetch trigger. Component should be shown when isComponentVisible is set to true, but prefetching heavy component should be triggered when shouldPrefetch is set to true.

Documentation:

- https://angular.dev/guide/defer
- https://blog.angular-university.io/angular-defer/
