'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  //Configurations will be loaded here.
  //Ask for user input
  prompting: function() {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your project name'
    }, function(answers) {
      this.props = answers;
      this.props.name = this.props.name.replace(/\b[a-z]/g,function(f){return f.toUpperCase();});
      this.log(answers.name);
      done();
    }.bind(this));
  },
  //Writing Logic here
  writing: {
    config: function() {
      this.fs.copyTpl(
        this.templatePath('_component.ts'),
        this.destinationPath(this.props.name.toLowerCase() + '.component.ts'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_model.ts'),
        this.destinationPath(this.props.name.toLowerCase() + '.model.ts'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_module.ts'),
        this.destinationPath(this.props.name.toLowerCase() + '.module.ts'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_service.ts'),
        this.destinationPath(this.props.name.toLowerCase() + '.service.ts'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_edit.component.html'),
        this.destinationPath(this.props.name.toLowerCase() + '.edit.component.html'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_routing.module.ts'),
        this.destinationPath(this.props.name.toLowerCase() + '.routing.module.ts'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_search.component.html'),
        this.destinationPath(this.props.name.toLowerCase() + '.search.component.html'), {
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_search.component.ts'),
        this.destinationPath(this.props.name.toLowerCase() + '.search.component.ts'), {
          name: this.props.name
        }
      );
    }
  }
});
