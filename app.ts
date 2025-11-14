/* import _ from 'lodash';

const number = [1,2,3,4,5]; 

const chunkedArr = _.chunk(number, 2); */

import { z } from 'zod';
import fs from 'node:fs';

const dataSchema = z.object({
    key: z.string(),
    title: z.string(),
    id: z.number(),
    values: z.array(z.string().regex(/^\d+\.\d+$/))
});

const userSchema = z.object({
    name: z.string(),
    age: z.number().min(18)
});

type Data= {
    key: string;
    title: string;
    id: number;
    values: string[];
};
type Data1 = z.infer<typeof dataSchema>;

function output(data: Data) {
    console.log(data);
}

const dataSchema1 = z.string();

const content = JSON.parse(fs.readFileSync('data.json').toString());
const parsedData = JSON.parse(content);
output(parsedData);
