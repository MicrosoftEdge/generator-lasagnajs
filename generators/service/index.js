'use strict';
var chalk = require('chalk');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

module.exports = yeoman.generators.NamedBase.extend({
	prompting: function () {
		var done = this.async();

		// Have Yeoman greet the user.
		this.log(yosay(
			'Welcome to the ' + chalk.red('CalimeroJS') + ' generator for services!'
			));

		var prompts = [{
			type: 'confirm',
			name: 'async',
			message: 'Would you like to make your service async?',
			default: true
		}];

		this.prompt(prompts, function (props) {
			this.props = props;
			// To access props later use this.props.someOption;

			done();
		}.bind(this));
	},
	writing: function () {
		console.log(this.name);
		var name = this.name;
		var async = this.props.async;
		var context = {
			name: name,
			async: async
		};

		var destination = 'services/' + name + '/';

		var files = ['index.js'];

		for (var i = 0; i < files.length; i++) {
			this.fs.copyTpl(
				this.templatePath(files[i]),
				this.destinationPath(destination + files[i]),
				context);
		}
	}
});