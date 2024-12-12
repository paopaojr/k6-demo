import http from 'k6/http';
import { check, sleep} from 'k6';
import { TEST_URL } from './test-url.js'

export const options={
    stages: [
        {
            duration: '5s',
            target: 1000
        },
        {
            duration: '2s',
            target: 0
        }
    ]
}

export default function(){
    // https://designer.mocky.io/
    const url = TEST_URL;
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const res = http.get(url, null, params);

    check(res, {
        'is status 200': (r) => r.status === 200
    });

    sleep(1);
}
