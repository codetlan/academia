Ext.define('Cursos.controller.Admin', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'adminCoursePanel',
        selector: 'admincoursespanel'
    }, {
        ref: 'coursesGridPanel',
        selector: 'coursesgrid'
    }],

    init: function() {
        var me = this;

        me.control({
            'admincoursespanel courseform #addOrUpdateCourseBtn': {
                click: me.onAddOrUpdateCourse
            },
            'admincoursespanel #deleteCourseBtn': {
                click: me.onDeleteCourse
            },
            'admincoursespanel #addAgendaToCourseBtn': {
                click: me.onAddAgendaToCourse
            }
        });

    },
    onAddAgendaToCourse: function () {
        var win = Ext.create('Cursos.view.admin.AgendaWindow');
        win.show();
    },

    onAddOrUpdateCourse: function(btn) {
        var values = btn.up('form').getValues(),
            me = this;
        Courses.insert(values);
    },

    onDeleteCourse: function() {
        var records = this.getCoursesGridPanel().getSelectionModel().getSelection();
        Ext.each(records, function(record) {
            Courses.remove(record.get('_id'));
        }, this);
    }
});