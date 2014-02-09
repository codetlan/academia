Ext.define('Cursos.Application', {
    name: 'Cursos',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Main',
        'Admin'
    ],

    stores: [
        'Courses',
        'Agendas',
        'MenuItems',
        'FileTypes',
        'Codes',
        'Comments',
        'Users'
    ]
});
