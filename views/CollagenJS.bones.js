view = views.Collagen.augment({});

view.prototype.attach = function() {
    $('a[rel="tooltip"]').tooltip();
    return this;
}
