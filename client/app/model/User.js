/**
 * @class Cursos.model.User
 * @extends Ext.data.Model
 * This is the User item model
 */
Ext.define('Cursos.model.User', {
    extend: 'Ext.data.Model',
    fields: [{
        name: '_id',
        type: 'string'
    }, {
        name: 'name',
        type: 'string',
        convert: function (v, record) {
        	return record.data.profile.name
        }
    }, {
        name: 'avatar',
        type: 'string',
        convert: function (v, record) {
        	return record.data.profile.picture;
        }
    }, {
        name: 'role',
        type: 'string',
        convert: function (v, record) {
        	return record.data.profile.role;
        }
    }, {
        name: 'email',
        type: 'string',
        convert: function (v, record) {
        	return record.data.profile.email;
        }
    }, {
        name: 'badges',
        convert: function (v, record) {
        	return record.data.profile.badges;
        }
    }, {
        name: 'courses',
        convert: function (v, record) {
        	return record.data.profile.courses;
        }
    }, {
        name: 'profile',
        type: 'object'
    }]
});
