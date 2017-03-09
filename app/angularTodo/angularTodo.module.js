angular
	.module('angularTodo', [
		'ui.router',
		'angularTodo.list',
		'angularTodo.completed',
		'angularTodo.create'
	])

	.config(angularTodoConfig);

function angularTodoConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}
