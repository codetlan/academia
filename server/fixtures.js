if (Courses.find().count() === 0) {
	for(i=0;i<12;i++){
		Courses.insert({
			title: 'Curso de sencha-extjs' + i,
			description:'Esta es la descripcion ' + i,
			image:'./images/nuevo_logo.png'
		});
	}
}