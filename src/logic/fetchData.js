export const httpGet = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const responseJson = await response.json();

    if (!response.ok) {
        throw new Error(responseJson.error || "An error occurred");
    }

    return responseJson;
};

export const httpPost = async (url, object) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
    }
}

export const httpPut = async (url, object) => {
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
    }
}

export const httpDelete = async (url) => {
    const response = await fetch(url, {
        method: "DELETE"
    })

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
    }
}

export const httpPatch = async (url) => {
    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const responseJson = await response.json();

    if (!response.ok) {
        throw new Error(responseJson.error || 'An error occurred');
    }
}