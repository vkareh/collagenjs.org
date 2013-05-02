router = routers.Collagen.extend({
    routes: {
        'about': 'about',
        'examples': 'examples',
        'modules': 'modules',
        'download': 'download'
    }
});

router.prototype.about = function() {
    this.send(views.Page, {template: 'About'});
}

router.prototype.examples = function() {
    this.send(views.Examples, {template: 'Examples'});
}

router.prototype.modules = function() {
    this.send(views.Page, {template: 'Modules'});
}
