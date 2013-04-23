view = views.Page.extend();

views.CollagenNavBar.augment({
    menuItems: [
        {path: '/about', label: 'About', weight: 1},
        {path: '/examples', label: 'Examples', weight: 2},
        {path: '/modules', label: 'Modules', weight: 3}
    ]
});
