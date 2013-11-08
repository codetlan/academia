Accounts.onCreateUser(function (options, user) {
    console.log('=======onCreateUser========');
    console.log(options);
    var admins = [
        "luis_mtzg@msn.com","joagolo@hotmail.com",//Facebook
        "lumartineck@gmail.com", "waldix86@gmail.com", "iam@armando.mx"];//Google
    if (options.profile) {
        console.log(user.services);
        user.profile = user.services.google || user.services.facebook;
        user.profile.picture = user.profile.picture || 'images/profile/default_picture.png';

        if(admins.indexOf(user.profile.email) !== -1){
            user.profile.rol = "admin";
        }
    }
    return user;
});