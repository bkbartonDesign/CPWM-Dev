module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      prod: {
        src: '<%= pkg.name %>/js/',
        dest: './js/min',
        files:{'./js/min/cpwm-js.min.js':['./js/*','!./js/min']}
      },
      val:{
        //src:'./js/libs/',
        //dest:'./js/libs/',
        files:{'./js/libs/jquery.validate.min.js':['.js/libs/jquery.validate.js']}
      }
    },
    watch:{ 
      scripts:{ 
        files: "*, !node-modules",
        tasks: ['sync'],
        options:{ 
          spawn: false
        }
      }
    },
    sync:{ 
      main:{ 
        files:[
          { src:['**','./js/**,','./css/**','!node_modules/**', '!./redir/**', '!package.json','!Gruntfile.js'], dest: '/Users/brianbarton/Sites/bkbd/CPWM/CPWM-Prod' },
          //{ cwd: './', src:['**','!node_modules/**', '!./redir/**', '!package.json','!Gruntfile.js']}
        ],
        verbose:true
      }
    },
    concat:{
      prod:{
        src: ['./css/*.min.css','!flexslider.**.*'],
        dest: './css/combined.css'
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: './css/',
        src: ['*.css', '!*.min.css'],
        dest: './css/',
        ext: '.min.css'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sync');

  // Default task(s).
  grunt.registerTask('watchDev', ['watch']);
  grunt.registerTask('val', ['uglify:val']);
  grunt.registerTask('min', ['cssmin']);
  grunt.registerTask('con', ['concat']);
  grunt.registerTask('syncProd', ['sync:main']);
  grunt.registerTask('default', ['uglify']);

};