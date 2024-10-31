function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId)
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    console.log("Wait for next data...")
    getData(2, () => {
        console.log("Wait for next data...");
        getData(3, () => {
            console.log("Wait for next data...");
            getData(4);
        })
    
    })
})