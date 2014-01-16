Accounts.onCreateUser(function (options, user) {
    console.log('=======onCreateUser========');
    console.log(options);
    var admins = [
        "luis_mtzg@msn.com","joagolo@hotmail.com",//Facebook
        "lumartineck@gmail.com", "waldix86@gmail.com", "iam@armando.mx", "armando@cursa.me"];//Google
    if (options.profile) {
        console.log(user.services);
        user.profile = user.services.google || user.services.facebook;
        user.profile.picture = user.profile.picture || 'images/profile/default_picture.png';
        // le asignamos el badge inicial
        user.profile.badges =[{
            image:'images/badges/Arrow.png',
            active:true
        }];

        if(admins.indexOf(user.profile.email) !== -1){
            user.profile.role = "admin";
        }
    }
    return user;
});