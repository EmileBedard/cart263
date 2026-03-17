
window.onload = goFetch;

async function goFetch() {
    try {
        let response = await fetch('../files/tests.json');
        let data = await response.json();
        console.log(data);
    }
    catch (err) {
        console.log(err)
    }
}
