module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      inlinecss: {
        main: {
          options: {},
          files: {
            './generated-emails/email-template-INLINED.html': './email-template.html',
            './generated-emails/email-confirm-INLINED.html': './email-confirm.html',

          }
        }
      },
      watch: {
        scripts: {
          files: ['./*.css', './*.html'],
          tasks: ['inlinecss'],
          options: {
            spawn: false,
          },
        },
      },
    });

    grunt.loadNpmTasks('grunt-inline-css');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['inlinecss','watch']);
};
