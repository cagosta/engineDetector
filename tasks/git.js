module.exports = function( grunt ) {



    grunt.registerTask( 'git:add_origin', function() {

        grunt.config.set( 'exec.git_add_origin', {

            command: 'git remote add origin git@github.com:cagosta/engineDetector.git'

        } )

        grunt.task.run( 'exec:git_add_origin' )

    } )

    grunt.registerTask( 'git:push_set_upstream', function() {

        grunt.config.set( 'exec.git_set_upstream', {

            command: 'git push --set-upstream origin master'

        } )

        grunt.task.run( 'exec:git_set_upstream' )

    } )


    grunt.config.set( 'exec.git_add_dist', {

        command: 'git add dist'

    } )

    grunt.registerTask( 'git:add_dist', [ 'exec:git_add_dist' ] )



    grunt.registerTask( 'git:initial_commit', function() {

        grunt.config.set( 'exec.git_initial_commit', {
            command: 'git add .; git commit -am "initial commit"'
        } )

        grunt.task.run( 'exec:git_initial_commit' )

    } )

    grunt.registerTask( 'git:create_github_repo', function() {

        var curlCommand = grunt.config.process( 'curl -u \'cagosta\' https://api.github.com/user/repos -d \'{"name":"engineDetector"}\'' )

        grunt.config.set( 'exec.git_create_github_repo', {
            command: curlCommand
        } )

        grunt.task.run( 'exec:git_create_github_repo' )

    } )

    grunt.registerTask( 'git:init', function() {

        grunt.config.set( 'exec.gitInit', {
            command: 'git init'
        } )

        grunt.task.run( 'exec:gitInit' )

    } )

    grunt.registerTask( 'git:install', [ 'git:init', 'git:create_github_repo', 'git:initial_commit', 'git:add_origin' ] )


}