const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could nor fetch ${url}, received ${res.status}`)
    }
    const body = await res.json();
    return body;
};

getResource('https://swapi.co/api/people/999s/')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.log('Could not fetch', err)
    })