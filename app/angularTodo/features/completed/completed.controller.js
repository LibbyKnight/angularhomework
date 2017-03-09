angular
	.module('angularTodo.completed')
	.controller('CompletedCtrl', CompletedCtrl);

function CompletedCtrl() {
	var vm = this;

	vm.todoCompleted= [];

};