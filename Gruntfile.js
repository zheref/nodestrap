module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-typescript');

    grunt.initConfig({

        typescript: {
            base: {
                src: ['./*.ts', 'config/**/*.ts', 'api/**/*.ts', 'models/**/*.ts', 'values/**/*.ts'],
                dest: './dist',
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    sourceMap: false,
                    declaration: false,
                    keepDirectoryHierarchy: true,
                    removeComments: true
                }
            }
        }

    });

    grunt.registerTask('default', ['typescript']);

};