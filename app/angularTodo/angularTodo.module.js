angular
	.module('angularTodo', [
		'ui.router',
		'angularTodo.list'
	])

	.config(angularTodoConfig);

function angularTodoConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}
