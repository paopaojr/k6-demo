import http from 'k6/http';
import { check, sleep} from 'k6';
import { TEST_URL } from './test-url.js'

// k6 run -e TEST_TAG=test-1 --out influxdb=http://localhost:8086/k6  7-visualize-with-grafana.js
const testTag = __ENV.TEST_TAG;

export const options={
    vus: 50,
    duration: '10s',
    tags: {
        testName: testTag,
    }
}

export default function(){
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
