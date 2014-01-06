'use strict'


var GruntInitializer = function( o ) {
    this.grunt = o.grunt
    this.initiliazeConfig()
    this.initializeGrunt()
    this.loadGruntDependencies()
    this.loadTasks()
}

GruntInitializer.prototype = {

    initiliazeConfig: function() {
        this.moduleConfig = this.grunt.file.readJSON( './config.json' )
        this.packageConfig = this.grunt.file.readJSON( './package.json' )
        try {
            this.credentialsConfig = this.grunt.file.readJSON( './.credentials.json' )
        } catch ( e ) {
            this.credentialsConfig = this.credentialsConfig ||  {}
        }
        this.config = this.moduleConfig
        this.config.credentials = this.credentialsConfig
        for ( var i in this.packageConfig ) // extend module config with package.json
            if ( this.packageConfig.hasOwnProperty( i ) )
                if ( !this.config[ i ] )
                    this.config[ i ] = this.packageConfig[ i ]
    },

    loadGruntDependencies: function() {
        [
            "grunt-contrib-connect",
            "grunt-contrib-watch",
            "grunt-bower-requirejs",
            "grunt-contrib-requirejs",
            "grunt-text-replace",
            "grunt-contrib-copy",
            "grunt-contrib-stylus",
            "grunt-open",
            "grunt-release",
            "grunt-exec",
            "grunt-jsdoc",
            "grunt-bump",
            "grunt-saucelabs"
        ].forEach(function( gruntModuleName ){
            this.grunt.loadNpmTasks( gruntModuleName )
        }.bind( this ))
    },

    initializeGrunt: function() {

        this.grunt.initConfig( {

            config: this.config

        } )
    },

    loadTasks: function() {
        this.grunt.loadTasks( 'tasks' )
    }

}


module.exports = function( grunt ) {

    new GruntInitializer( {
        grunt: grunt
    } )

}