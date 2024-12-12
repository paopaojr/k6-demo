import http from 'k6/http';
import { check, sleep} from 'k6';
import { TEST_URL } from './test-url.js'

export const options={
    vus: 1,
    iteration : 1,
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
