import './style.styl';
import 'jquery';
import 'jquery-ui';
import './src/vendors/jquery-ui-slider-pips/jquery-ui-slider-pips';
import './src/vendors/jquery-ui-slider-pips/jquery-ui-slider-pips.css';
import './src/vendors/jquery-ui-slider-pips/flick/jquery-ui-1.10.4.custom'
import './src/vendors/jquery-ui-slider-pips/flick/jquery-ui-1.10.4.custom.css'

// import 'jquery-ui-slider-pips';
// import 'bootstrap-slider';
// import 'bootstrap-slider/dist/css/bootstrap-slider.css'
// import 'nouislider/distribute/nouislider.css'
// import 'nouislider';


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