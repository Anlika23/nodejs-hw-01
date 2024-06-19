import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(path.resolve(PATH_DB), 'utf8');
        const contacts = JSON.parse(data);
        return contacts.length;
    } catch (error) {
        console.error('Error counting contacts:', error);
        return 0;
    }
};

console.log(await countContacts());

