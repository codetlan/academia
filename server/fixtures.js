if (Courses.find().count() === 0) {
	var courseId = 0,
		agendaId;
	for (i = 0; i < 2; i++) {
		courseId = Courses.insert({
			title: 'Sencha-extjs' + i,
			description: 'Esta es la descripcion ' + i,
			price : "25",
			user_id : "Armando",
			image : "http://academia-codetlan.s3.amazonaws.com/academia/9fc1562e-892d-4a7b-bd20-e115bfa9692e.jpeg",
			trailer : "http://academia-codetlan.s3.amazonaws.com/academia/916cf61f-870b-40e3-9e85-795643c46b7c.m4v",
			badge : "http://academia-codetlan.s3.amazonaws.com/academia/4a72808f-0865-4a27-8a5e-06f9832bf646.png"
		});

		// for (x = 0; x < 5; x++) {
		// 	for (y = 0; y < 3; y++) {
		// 		agendaId = Agendas.insert({
		// 			module: 'Module ' + x,
		// 			submodule: 'Submodule ' + y,
		// 			duration: '14.46 mins',
		// 			courseId: courseId
		// 		});
		// 		console.log(agendaId);
		// 	}
		// }
	}
}