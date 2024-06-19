import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';


export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(path.resolve(PATH_DB), 'utf8');
        const contacts = JSON.parse(data);
        return contacts;
    } catch (error) {
        console.error ('Error reading contacts from file:', error);
        return [];
    }
};

console.log(await getAllContacts());
