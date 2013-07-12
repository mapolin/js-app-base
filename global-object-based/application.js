/* 
    Define Application Namespace;

    The namespace is added to the global scope,
    it can be accessed from everywhere.
*/
"use strict";
var Application = window.Application || {};


/*
    Create the Application Object;

    Methods usage:
        Init: @required; auto invoked on application start; calls all public methods unless Application.autoInvoke = false;
        _function: @optional; helper(private) function skipped by the Init method;
*/

(function() {

    Application = {

        /*
            Determine where the Application shoud use the built-in Init to run all member functions
        */
        AutoInvoke: true,

        /*
            Optional conditions which should be met by all methods found when Init runs;

            @param name {String} - name of the member function
        */
        AutoInvokeSkip: [

            function(name) {
                if( name.charAt(0) == '_' )
                    return false;
                else
                    return true;
            },

            function(name) {
                if( name == 'Init' )
                    return false;
                else
                    return true;
            },

        ],

        /* 
            Initialization function;
            Optional skip conditions can be added to the Application.autoInvokeSkip array;
        */
        Init: function() {

            var index, name, fn, i, checks = 0;

            for(index in this) {

                checks = 0;
                fn = this[index];
                name = (typeof(fn)).toLowerCase();

                if( name == 'function' ) {

                    for( i = 0; i < this.AutoInvokeSkip.length; i++ ) {

                        if( this.AutoInvokeSkip[i](index) ) {

                            checks++;
                            
                        }
                        
                    }

                    if( checks == this.AutoInvokeSkip.length )
                        fn.call(this);
                }

            }

        },

        /*
            @Private

            return all AutoInvoke filters
        */
        _getInvokeSkip: function() {

            return this.AutoInvokeSkip;

        },

        /*
            @Private

            Add a new filter to the AutoInvokeSkip que
        */
        _addInvokeSkip: function(fn) {

            this.AutoInvokeSkip.push(fn);

        }

    };

    if( Application.AutoInvoke ) {

        /* 
            If Application.autoInvoke = true {
                
                Start the application automatically and run all of its public methods

            }
        */
        Application.Init();

    }

})(Application);