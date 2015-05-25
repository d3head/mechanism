var params = {
    snap: false,
    grid: [20, 50],
    //snapMode: 'both',
    containment: "#page-frame",
    //helper: 'clone',
    //opacity: '0.35'
};

var blocks = [
    {
        id: 0,
        params: params
    },
    {
        id: 1,
        params: params
    },
    {
        id: 2,
        params: params
    }
];

var Mechanism = {};

Mechanism.init = function() {
    console.log('lol init');

    $(blocks).each(function(a, o) {
        $(".blocks").append("<div class='block' id='block_" + o.id + "' style='z-index: " + o.id + "'>Block " + o.id + "</div>");
        $("#block_" + o.id).draggable(o.params).resizable();
    });
};

$(document).ready(function() {
   Mechanism.init();
});