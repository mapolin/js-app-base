/* 
    Define Application Class;

    var app_instance = new Application( autoInvoke[, Arguments] );

    @param autoInvoke {Boolean} - if True runs the Initialization functions
    @param [, Arguments] {*} - optional arguments added to the constructor function
*/
"use strict";

/* 
    Global variables uppercase + underscore

    var GLOBAL_VARIABLE = 1;
*/

function Application( autoInvoke /*, Arguments */ ) {

    if( autoInvoke ) {

        this.Init( /* Arguments */ )

    }

    return this;
}

Application.prototype = {

    /* 
        Built-in Initialization function.
        Called by the constructor.

        @param args {*}
    */
    Init: function( args ) {

        /* Initialization code */

    },

    /* 
        Built-in destructor function.
        Destroy the current instance of the class.
    */
    Destroy: function( ) {

        /* Optional destruction code */

    }

};