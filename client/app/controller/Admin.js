Ext.define('Cursos.controller.Admin', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'adminCoursePanel',
        selector: 'admincoursespanel'
    }, {
        ref: 'coursesGridPanel',
        selector: 'coursesgrid'
    }, {
        ref: 'courseAgendaGrid',
        selector: 'agendawindow courseagendagrid'
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
            'admincoursespanel #showAgendaOfCourseBtn': {
                click: me.onShowAgendaOfCourse
            },
            'agendawindow agendaform #addOrUpAgendaItem': {
                click: me.onAddOrUpAgendaItem
            },
            'agendawindow #deleteFromAgendaBtn': {
                click: me.onDeleteItemFromAgenda
            }
        });

    },
    onDeleteItemFromAgenda: function() {
        var me = this,
            records = me.getCourseAgendaGrid().getSelectionModel().getSelection(),
            course = me.getCoursesGridPanel().getSelectionModel().getSelection()[0];
        Ext.each(records, function(record) {
            Agendas.remove(record.get('_id'));
        }, this);
        me.loadAgendaData(course.get('_id'));
    },
    onAddOrUpAgendaItem: function(btn) {
        var me = this,
            values = btn.up('form').getValues(),
            course = me.getCoursesGridPanel().getSelectionModel().getSelection()[0];

        values.courseId = course.get('_id');
        Agendas.insert(values);
        me.loadAgendaData(course.get('_id'));
    },
    onShowAgendaOfCourse: function() {
        var me = this,
            win = Ext.create('Cursos.view.admin.AgendaWindow'),
            course = me.getCoursesGridPanel().getSelectionModel().getSelection()[0];
        if(!course){
            Ext.Msg.alert('Aviso', 'Debes seleccionar un curso');
            return;
        }
        me.loadAgendaData(course.get('_id'));
        win.show();
        win.setTitle(course.get('title'));
    },

    loadAgendaData: function(id) {
        data = Agendas.find({
            courseId: id
        }).fetch();

        this.getStore('Agendas').loadData(data);
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