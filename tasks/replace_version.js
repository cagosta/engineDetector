module.exports = function( grunt ) {


    grunt.config.set( 'replace.version', {
        overwrite: true,
        src: [ 'README.md', 'app/engineDetector.js' ],
        // overwrite matched source files
        replacements: [
            {
                from: /"version": "[^"]+"/gi,
                to: '"version": ""'
                }
            ]
    } )

    grunt.registerTask( 'replace_version', [ 'replace:version' ] )

}