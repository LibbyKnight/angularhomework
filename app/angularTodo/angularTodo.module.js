angular
	.module('angularTodo', [
		'ui.router',
		'angularTodo.list',
		'angularTodo.completed'
	])

	.config(angularTodoConfig);

function angularTodoConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}
