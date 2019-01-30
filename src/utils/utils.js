export function isAuthenticated() {
    return localStorage.getItem('isLoggedIn');
}

export function getUsername() {
    return localStorage.getItem('username');
}

export function parseJSON(string) {
    try {
        return JSON.parse(string);
    } catch(err) {
        return [];
    }
}

export function isTitleDuplicated(title) {
    const pages = localStorage.getItem('pages') ? parseJSON(localStorage.getItem('pages')) : null;
    let isDuplicated = false;
    if(pages && pages.length) {
        pages.forEach(page => {
            if (page.title === title) isDuplicated = true;
        });
    }
    return isDuplicated;
}