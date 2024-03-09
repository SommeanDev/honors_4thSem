// api calls
import querystring from 'node:querystring';

const baseUrl = 'https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6'

const createRequestUrl = (limit, offset) => { 
    const parameters = {
        'api-key': '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b',
        format: 'json',
        offset,
        limit
    }

    const url = baseUrl + '?' + querystring.stringify(parameters);
    return url;
}
// console.log(url);

// //without async await
// const responsePromise = fetch(url);
// const dataPromise = responsePromise.then((response) => {
//         return response.json();
// })

// dataPromise.then((data) => {
//     console.log(data);
// });

// console.log('script execution completed');

// with async await
// const response1 = await fetch(createRequestUrl(10,10));

const fetchResponse = async (fetch_offset) => {
    const response1 = await fetch(createRequestUrl(10,fetch_offset));
    const {total, count, offset, records} = await response1.json();
    console.log(`Total records: ${total}`);
    console.log(`Records fetched: ${count}`);
    console.log(`Offset: ${offset}`);
    return records;
}

const promiseArray = [];
const callcount = 4
for (let i = 0; i < callcount; i++) {
    const promise = fetchResponse(i > 0? 10 * i + 1 : i);
    promiseArray.push(promise);
}

const dataArray = await Promise.all(promiseArray);
console.log('data count: ', dataArray.length);
const resultArray = dataArray.map((item) => {
    return item.map((record) => {
        return {
            pincode: record.pincode,
            name: record.officename,
        };
    });
});

console.log(resultArray);

console.log('execution finished');
