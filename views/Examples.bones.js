view = views.Page.extend({});

view.prototype.attach = function() {
    $('#examples-menu').css('position', 'fixed');
    var menu =  new views.CollagenMenu({
        el: 'div#examples-menu',
        type: 'tabs',
        stacked: true
    });
    menu.addMenuItem({path: '#models', label: 'Models'});
    menu.addMenuItem({path: '#views', label: 'Views'});
    menu.addMenuItem({path: '#routers', label: 'Routers'});
    menu.render();
    $('#examples-menu li a').append($('<i>').addClass('icon-chevron-right'));
    return this;
}
