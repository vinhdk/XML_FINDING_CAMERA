import {LoadingService} from './loading.service.js';
export class HttpService {
    static GET = async(URL) => {
        LoadingService.showLoading();
        const xhr = new XMLHttpRequest();
        return await new Promise((resolve, reject) => {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 300) {
                        setTimeout(() => {
                            LoadingService.hideLoading();
                            reject({message: "Error: " + xhr.responseText});
                        }, 1000);
                    } else {
                        setTimeout(() => {
                            LoadingService.hideLoading();
                            resolve(xhr.responseText);
                        }, 1000);
                    }
                }
            };
            xhr.open("GET", URL, true);
            xhr.send();
        });
    }

    static POST = async(URL, DATA) => {
        LoadingService.showLoading();
        const xhr = new XMLHttpRequest();
        return await new Promise((resolve, reject) => {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 300) {
                        setTimeout(() => {
                            LoadingService.hideLoading();
                            reject({message: "Error: " + xhr.responseText});
                        }, 1000);
                    } else {
                        setTimeout(() => {
                            LoadingService.hideLoading();
                            resolve(xhr.responseText);
                        }, 1000);
                    }
                }
            };
            xhr.open("POST", URL, true);
            xhr.send(DATA);
        });
    }
    static REQUEST = async(URL, DATA) => {
        LoadingService.showLoading();
        const xhr = new XMLHttpRequest();
        return await new Promise((resolve, reject) => {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 300) {
                        setTimeout(() => {
                            LoadingService.hideLoading();
                            reject({message: "Error: " + xhr.responseText});
                        }, 1000);
                    } else {
                        setTimeout(() => {
                            LoadingService.hideLoading();
                            resolve({message: "Create Success"});
                        }, 1000);
                    }
                }
            };
            xhr.open("POST", URL, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(DATA);
        });
    }
    static PUT = async(URL, DATA) => {
        LoadingService.showLoading();
        const xhr = new XMLHttpRequest();
        return await new Promise((resolve, reject) => {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 300) {
                        setTimeout(() => {
                            LoadingService.hideLoading();
                            reject({message: "Error: " + xhr.responseText});
                        }, 1000);
                    } else {
                        setTimeout(() => {
                            LoadingService.hideLoading();
                            resolve({message: "Update Success"});
                        }, 1000);
                    }
                }
            };
            xhr.open("PUT", URL, true);
            xhr.send(DATA);
        });
    }
    static DELETE = async(URL) => {
        LoadingService.showLoading();
        const xhr = new XMLHttpRequest();
        return await new Promise((resolve, reject) => {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 300) {
                        setTimeout(() => {
                            LoadingService.hideLoading();
                            reject({message: "Error: " + xhr.responseText});
                        }, 1000);
                    } else {
                        setTimeout(() => {
                            LoadingService.hideLoading();
                            resolve({message: "Delete Success"});
                        }, 1000);
                    }
                }
            };
            xhr.open("DELETE", URL, true);
            xhr.send();
        });
    }
}