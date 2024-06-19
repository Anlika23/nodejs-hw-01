
import fs from 'fs/promises';
import path from 'path';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const readContactsFromFile = async () => {
    try {
        const data = await fs.readFile(path.resolve(PATH_DB), 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error ('Error reading contacts from file:', error);
        return [];
    }
};
const writeContactsToFile = async (contacts) => {
    try {
        await fs.writeFile(path.resolve(PATH_DB), JSON.stringify(contacts, null, 2), 'utf8');
    } catch (error) {
        console.log.error('Error writing contacts to file:', error);
    }
};

const generateContacts = async (number) => {
    const existingContacts = await readContactsFromFile();
    const newContacts = Array.from({ length: number}, createFakeContact);
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContactsToFile(updatedContacts);
    console.log(`Successfully generated ${number} new contacts.`);
};

generateContacts(5);
