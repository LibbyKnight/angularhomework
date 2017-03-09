angular
	.module('angularTodo.create')
	.config(createConfig);

function createConfig($stateProvider) {

	$stateProvider.state({
		name: 'create',
		url: '/create',
		templateUrl: 'angularTodo/features/create/create.html',
		controller: 'CreateCtrl',
		controllerAs: 'CreateVM'
	})
}
