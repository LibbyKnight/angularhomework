angular
	.module('angularTodo.list')
	.config(listConfig);

function listConfig($stateProvider) {

	$stateProvider.state({
		name: 'list',
		url: '/',
		templateUrl: '/angularTodo/features/list/list.html',
		controller: 'ListCtrl',
		controllerAs: 'ListVM'
	})
}