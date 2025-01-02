'use strict';

import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../lib/db'; // Assuming you have a database connection setup

export default async function updateUser(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { id, name, email } = req.body;

    if (!id || (!name && !email)) {
        return res.status(400).json({ message: 'ID and at least one field to update are required' });
    }

    try {
        const updatedUser = await db.user.update({
            where: { id },
            data: { name, email },
        });
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({ message: 'Error updating user', error });
    }
}
