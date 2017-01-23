/*This gulpfile.js configuration differs from basic one. It was done
in order to systematizate the tasks(they are divided in separate .js files
in folder gulp_tasks). If you want to add new task, create new .js file
in folder gulp_tasks. During building require-dir will perform it*/

var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./gulp_tasks', { recurse: true });

