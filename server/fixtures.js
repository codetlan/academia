// if (Courses.find().count() === 0) {
// 	var courseId = 0,
// 		agendaId;
// 	for (i = 0; i < 2; i++) {
// 		courseId = Courses.insert({
// 			title: 'Curso de sencha-extjs' + i,
// 			description: 'Esta es la descripcion ' + i,
// 			image: './images/nuevo_logo.png'
// 		});

// 		for (x = 0; x < 5; x++) {
// 			for (y = 0; y < 3; y++) {
// 				agendaId = Agendas.insert({
// 					module: 'Module ' + x,
// 					submodule: 'Submodule ' + y,
// 					duration: '14.46 mins',
// 					courseId: courseId
// 				});
// 				console.log(agendaId);
// 			}
// 		}
// 	}
// }