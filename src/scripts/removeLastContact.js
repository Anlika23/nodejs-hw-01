import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(path.resolve(PATH_DB), 'utf8');
        let contacts =JSON.parse(data);
        if (contacts.length > 0) {
            contacts.pop();
            await fs.writeFile(path.resolve(PATH_DB), JSON.stringify(contacts, null, 2), 'utf8');
            console.log('Last contact has been removed.');
        } else {
            console.log('No contacts to remove.');
        }
    } catch (error) {
        console.error('Error removing last contact:', error);
    }
};

removeLastContact();
