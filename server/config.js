//Facebook
Accounts.loginServiceConfiguration.remove({
    service:"facebook"
});
Accounts.loginServiceConfiguration.insert({
    service:"facebook",
    appId:'355198821250387',
    secret:'83f0e90401f12ccfc74fcd853f961d5d'
});

Accounts.loginServiceConfiguration.remove({
    service:"google"
});
Accounts.loginServiceConfiguration.insert({
    service:"google",
    clientId:'410190650489.apps.googleusercontent.com',
    secret:'tcu0kIf56ctv-KQYzXlUozbT'
});