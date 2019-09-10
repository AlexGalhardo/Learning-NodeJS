const ADMIN_PROFILE = '2';

function isAdmin(profile){
    return profile === ADMIN_PROFILE;
}

module.exports = (request) => {

    const user = request.user;
    if(!user) return false;

    const profile = user.profile;
    const originalUrl = request.originalUrl;
    const method = request.method;//GET, POST, DELETE, etc

    switch(originalUrl){
        case '/': return true;
        case '/index': return true;
        case '/login': return true;
        case '/signup': return true;
        case '/reports': return isAdmin(profile);
        default: return false;
    }

}