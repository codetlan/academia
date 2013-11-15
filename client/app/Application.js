Ext.define('Cursos.Application', {
    name: 'Cursos',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Main'
    ],

    stores: [
        'Courses',
        'Agendas',
        'MenuItems'
    ]
});
