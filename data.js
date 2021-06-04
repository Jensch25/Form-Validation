async function fetchData() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/all');
        const countries = result.data;
        console.log(result);
    } catch(e) {
        console.error(e);
    }
}

fetchData();

async function fetchDataNew() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/all');
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}

fetchDataNew();

function fetchDataOld() {
    axios.get('https://restcountries.eu/rest/v2/all')
        .then((result) => {
            return console.log(result);
        }).catch((e) => {
        return console.error(e);
    });
}

fetchDataOld();


