angular
	.module('angularTodo.completed')
	.config(completedConfig);

function completedConfig($stateProvider) {

	$stateProvider.state({
		name: 'completed',
		url: '/completed',
		templateUrl: '/angularTodo/features/completed/completed.html',
		controller: 'ListCtrl',
		controllerAs: 'ListVM'
	})
}
