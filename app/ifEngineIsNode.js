define( [
    'engineDetector/engineDetector'
 ], function( engineDetector ) {

    return {

        load: function( name, req, onLoad, config ) {

            engineDetector.ifNode( function() {
                
                req( [ name ], function( module ) {
                    onLoad( module )
                } )

            } )

            engineDetector.ifNotNode( function() {

                onLoad( null )

            } )

        }


    }

} )