'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.NamedBase.extend({
	prompting: function () {
		var done = this.async();

		// Have Yeoman greet the user.
		this.log(yosay(
			'Welcome to the ' + chalk.red('LasagnaJS') + ' generator for modules!'
			));

		var prompts = [{
			type: 'confirm',
			name: 'async',
			message: 'Would you like to make your module async?',
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

		var destination = 'modules/' + name + '/';

		var files = ['routes/admin.js',
			'routes/api.js',
			'routes/base.js',
			'index.js'];

		var filesToRename = ['public/scripts/index.js',
			'public/styles/index.css',
			'views/index.handlebars',
			'views/index-admin.handlebars'];

		for (var i = 0; i < files.length; i++) {
			this.fs.copyTpl(
				this.templatePath(files[i]),
				this.destinationPath(destination + files[i]),
				context);
		}

		for (var i = 0; i < filesToRename.length; i++) {
			this.fs.copyTpl(
				this.templatePath(filesToRename[i]),
				this.destinationPath((destination + filesToRename[i]).replace('index', name)),
				context);
		}
	}
});