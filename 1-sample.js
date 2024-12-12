import http from 'k6/http';
import { check, sleep} from 'k6';
import { TEST_URL } from './test-url.js'

export const options={
    vus: 50,
    duration: '5s',
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
    }
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
