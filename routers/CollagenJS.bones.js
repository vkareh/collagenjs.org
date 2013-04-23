router = routers.Collagen.extend({
    routes: {
        'about': 'about',
        'examples': 'examples',
        'modules': 'modules'
    }
});

router.prototype.about = function() {
    this.send(views.Page, {template: 'About'});
}

router.prototype.examples = function() {
    this.send(views.Page, {template: 'Examples'});
}

router.prototype.modules = function() {
    this.send(views.Page, {template: 'Modules'});
}
