
module.exports = function( grunt ) {



    grunt.registerTask( 'bower_install', function() {
        var done = this.async()
        
            done()
        
    } )

    grunt.registerTask( 'postinstall', 'Bower install and inject R.js config in main files.', [
        'node app/bower_install.js'
    ] )


}