
export const isSuccessful = statusCode => {
    switch(statusCode) {
        case 200:
        case 201:
        return true;
    };
    return false;
};

export const isSimpleSuccessful = statusCode => {
    return statusCode >= 200 && statusCode < 300;
};

export const isSimpleError = statusCode => {
    return statusCode >= 400 && statusCode < 600;
};
