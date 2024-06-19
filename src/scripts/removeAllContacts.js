import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const removeAllContacts = async () => {
    try {
    const emptyContactsArray = [];
    await fs.writeFile(path.resolve(PATH_DB), JSON.stringify(emptyContactsArray, null, 2), 'utf8');
    console.log('All contacts have been removed.');
    } catch (error) {
        console.error ('Error removing contacts:', error);
    }
};

removeAllContacts();
