Ext.define('Cursos.controller.Admin', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'adminCoursePanel',
        selector: 'admincoursespanel'
    }, {
        ref: 'agendaWindow',
        selector: 'agendawindow'
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
                click: me.onAddOrUpdateAgendaItem
            },
            'agendawindow #deleteFromAgendaBtn': {
                click: me.onDeleteItemFromAgenda
            },
            'agendawindow  #showAgendaFiles': {
                click: me.onShowAgendaFiles
            },
            'courseform fieldset uploadcontainer': {
                loaded: me.onCourseImageLoaded
            },
            'agendaform fieldset uploadcontainer': {
                loaded: me.onAgendaVideoLoaded
            },
            'admincoursespanel coursesgrid': {
                itemclick: this.onCourseSelect
            },
            'agendawindow courseagendagrid': {
                itemclick: this.onCourseAgendaSelect
            },
            'agendacodeswindow': {
                savecode: this.addOrUpdateCodesToAgenda,
                deletecode: this.deleteCodeFromAgenda
            }
        });

    },
    onCourseAgendaSelect: function(grid, record, item, index, e, eOpts) {
        var form = this.getAgendaWindow().down('form');
        form.loadRecord(record);
        form.down('#addOrUpAgendaItem').setText('Editar');
        form.down('fieldset uploadcontainer').setVideo(record.get('video'));
    },
    onCourseSelect: function(grid, record, item, index, e, eOpts) {
        var form = this.getAdminCoursePanel().down('form');
        form.loadRecord(record);
        form.down('#addOrUpdateCourseBtn').setText('Editar');
        form.down('fieldset #imageContanier imagecomponent').setSrc(record.get('image'));
        form.down('fieldset #badgeContanier imagecomponent').setSrc(record.get('badge'));
        form.down('fieldset #videoContanier').setVideo(record.get('trailer'));
    },
    onAgendaVideoLoaded: function(contanier, src) {
        contanier.up('form').down('#imageHiddenField').setValue(src);
    },
    onCourseImageLoaded: function(contanier, src) {
        var itemId;

        switch(contanier.itemId){
            case 'imageContanier':
                itemId = '#imageHiddenField';
            break;
            case 'videoContanier':
                itemId = '#videoHiddenField';
            break;
            case 'badgeContanier':
                itemId = '#badgeHiddenField';
            break;
        }
        contanier.up('form').down(itemId).setValue(src);
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
    onShowAgendaOfCourse: function() {
        var me = this,
            win = Ext.create('Cursos.view.admin.agenda.AgendaWindow'),
            course = me.getCoursesGridPanel().getSelectionModel().getSelection()[0];
        if (!course) {
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
        }, {
            sort: {
                order: 1
            }
        }).fetch();
        this.getStore('Agendas').loadData(data);
    },
    onAddOrUpdateAgendaItem: function(btn) {
        var me = this,
            values = btn.up('form').getValues(),
            course = me.getCoursesGridPanel().getSelectionModel().getSelection()[0];

        values.courseId = course.get('_id');
        values.order = values.order * 1;
        if (values['_id']) { //actualizamos la agenda
            id = values['_id'];
            delete values['_id'];
            Agendas.update(id, {
                $set: values
            });
        } else {
            delete values['_id'];
            Agendas.insert(values);
        }
        me.loadAgendaData(course.get('_id'));
    },

    onAddOrUpdateCourse: function(btn) {
        var values = btn.up('form').getValues(),
            me = this,
            id;
        if (values['_id']) { //actualizamos el curso
            id = values['_id'];
            delete values['_id'];
            Courses.update(id, {
                $set: values
            });
        } else {
            delete values['_id'];
            Courses.insert(values);
        }
    },
    onDeleteCourse: function() {
        var records = this.getCoursesGridPanel().getSelectionModel().getSelection();
        Ext.each(records, function(record) {
            Courses.remove(record.get('_id'));
        }, this);
    },
    onShowAgendaFiles: function() {
        var me = this,
            data, win,
            agendaItem = me.getCourseAgendaGrid().getSelectionModel().getSelection()[0];

        if (!agendaItem) {
            Ext.Msg.alert('Aviso', 'Debes seleccionar alguna lección');
            return;
        }

        win = Ext.create('Cursos.view.admin.agenda.AgendaCodesWindow');
        win.show();
        // win.on('savefile', me.addOrUpdateCodesToAgenda, me);

        // cargamos los codigos de el temario actual
        data = Codes.find({
            agendaId: agendaItem.get('_id')
        }, {
            sort: {
                order: 1
            }
        }).fetch();

        me.getStore('Codes').loadData(data);
    },
    addOrUpdateCodesToAgenda: function(win, values) {
        var me = this,
            record = me.getCourseAgendaGrid().getSelectionModel().getSelection()[0];

        if (values['_id']) { //editamos el codigo
            id = values['_id'];
            delete values['_id'];
            Codes.update(id, {
                $set: values
            });
        } else {
            delete values['_id'];
            Ext.apply(values, {
                agendaId: record.get('_id')
            });
            Codes.insert(values);
        }
    },
    deleteCodeFromAgenda: function(win, record) {
        Codes.remove(record.get('_id'));
        win.reset();
    }
});