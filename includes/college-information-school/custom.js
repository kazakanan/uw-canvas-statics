/*jslint browser: true, plusplus: true */
/*global jQuery, UWCanvas */

////////////////////////////////////////////////////
// DESIGN TOOLS CONFIG                            //
////////////////////////////////////////////////////
// Copyright (C) 2016  Utah State University
var DT_variables = {
        iframeID: '',
        // Path to the hosted USU Design Tools
        path: 'https://designtools.ciditools.com/',
        templateCourse: '1190741',
        // OPTIONAL: Button will be hidden from view until launched using shortcut keys
        hideButton: true,
        // OPTIONAL: Limit tools loading by users role
        limitByRole: false, // set to true to limit to roles in the roleArray
        // adjust roles as needed: 'student', 'teacher', ...
        roleArray: [],
        // OPTIONAL: Limit tools to an array of Canvas user IDs
        limitByUser: false, // Change to true to limit by user
        // add users to array (Canvas user ID not SIS user ID)
        userArray: []
    };
////////////////////////////////////////////////////
// END DESIGN TOOLS CONFIG                        //
////////////////////////////////////////////////////

(function ($) {
    'use strict';

    $(document).ready(function () {
        $.getScript(DT_variables.path + 'js/master_controls.js');

        //$("#quiz-instructions:contains('[SEB]')").whenExists(function () {
        //    if (navigator.userAgent.match(/SEB/) === null) {
        //        $("#submit_quiz_form").hide();
        //        alert('You must use the Safe Exam Browser to take this quiz');
        //    }
        //});
    });
}(jQuery));
