import './style.styl';
import 'jquery';
import 'ion-rangeslider';
import 'bootstrap-slider';
import 'bootstrap-slider/dist/css/bootstrap-slider.css';

//ripple effect for buttons
import { defaultOptions } from 'ripplet.js/es/ripplet-declarative';
defaultOptions.color = 'rgba(230, 220, 255, .3)';


function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}
// requires and returns all modules that match
var modules = requireAll(require.context("./src/", true, /^\.\/.*\.js$/));
// is an array containing all the matching modules



//jQuery test
(function () {

    $(document).ready(function() {
        console.log("It works!");
    });

})();