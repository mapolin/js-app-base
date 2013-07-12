/* 
    Define Application Class;

    var app_instance = new Application( autoInvoke[, Arguments] );

    @param autoInvoke {Boolean} - if True runs the Initialization functions
    @param [, Arguments] {*} - optional arguments added to the constructor function
*/
"use strict";

/* 
    Global Array containing all application instances;
*/
var APPLICATION_INSTANCES = window.APPLICATION_INSTANCES || [];

/* 
    Global indexing variable
*/
var APPLICATION_NDEXES = window.APPLICATION_NDEXES || 0;

function Application( autoInvoke /*, Arguments */ ) {

    this.INSTANCE_INDEX = APPLICATION_NDEXES;

    if( autoInvoke ) {

        this.Init( /* Arguments */ )

    }

    APPLICATION_INSTANCES.push({
        instance: this,
        index: APPLICATION_NDEXES
    });

    APPLICATION_NDEXES++;

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
    Destroy: function( instance ) {

        /* Optional destruction code */

        delete APPLICATION_INSTANCES[this.INSTANCE_INDEX];
        APPLICATION_INSTANCES.splice(this.INSTANCE_INDEX-1, this.INSTANCE_INDEX);
        APPLICATION_NDEXES--;

    }

};