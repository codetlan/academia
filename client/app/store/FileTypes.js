/**
 * @class Cursos.store.Courses
 * @extends Ext.data.Store
 * Store para listar los file types
 */
Ext.define('Cursos.store.FileTypes', {
	extend: 'Ext.data.Store',

	fields: ['mode', 'name'],
	data: [{
		mode: 'text/javascript',
		name: 'JS'
	}, {
		mode: 'text/x-ruby',
		name: 'RUBY'
	}, {
		mode: 'text/x-python',
		name: 'PHYTON'
	}, {
		mode: 'text/x-php',
		name: 'PHP'
	}, {
		mode: 'text/x-java',
		name: 'JAVA'
	}, {
		mode: 'text/x-c',
		name: 'C'
	}, {
		mode: 'text/html',
		name: 'HTML'
	}, {
		mode: 'text/x-sh',
		name: 'SHELL'
	}, {
		mode: 'text/css',
		name: 'CSS'
	}, {
		mode: 'text/x-scss',
		name: 'SASS'
	}, {
		mode: 'text/x-less',
		name: 'LESS'
	}, {
		mode: 'text/x-sql',
		name: 'SQL'
	}, {
		mode: 'text/xml',
		name: 'XML'
	}, {
		mode: 'text/x-coffeescript',
		name: 'COFFEESCRIPT'
	}, {
		mode: 'text/x-yaml',
		name: 'YAML'
	}, {
		mode: 'application/x-erb',
		name: 'ERB'
	}, {
		mode: 'application/json',
		name: 'JSON'
	}, {
		mode: 'text/plain',
		name: 'Texto Plano'
	}]
});