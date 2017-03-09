angular
	.module('angularTodo.create')
	.controller('CreateCtrl', CreateCtrl);

function CreateCtrl(todos) {
	var vm = this;

	vm.addTodo = function() {

		todos.addTodo(vm.todos.todoItem, vm.todos.dueDate);

		vm.todos = {

			todoItem: '',
			dueDate: ''
		}
	}

	vm.updatedTodo = function(id) {

		todos.updateTodo();0

	}

}

