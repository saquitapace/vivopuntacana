'use server';

import { query } from '@/src/lib/db';
import { auth, clerkClient, currentUser } from '@clerk/nextjs/server';

function snakeToCamel(snakeCaseString) {
  const t = snakeCaseString.replace(/(_\w)/g, (matches) =>
    matches[1].toUpperCase()
  );
  return t;
}

export async function createOrUpdateUser(userData) {
  const { userId } = auth();
  if (!userId) {
    return { err: 'Unauthorized' };
  }
  const user = await currentUser();
  userData['email'] = user.emailAddresses[0]?.emailAddress;
  userData['clerkId'] = userId;
  //   const { email, ...fields } = userData;

  // Define allowed fields to prevent SQL injection
  const allowedFields = [
    'email',
    'phone_number',
    'role',
    'business_info',
    'business_link',
    'business_email',
    'interests',
    'first_name',
    'last_name',
    'clerk_id',
    'profile_completed',
  ];

  const dataToSave = {};

  // Collect only allowed fields present in the input
  for (const field of allowedFields) {
    const camelField = snakeToCamel(field);
    if (userData[camelField] !== undefined) {
      dataToSave[field] = userData[camelField];
    }
  }

  if (dataToSave.interests) {
    dataToSave.interests = JSON.stringify(dataToSave.interests);
  }

  console.log('dataToSave', dataToSave);
  try {
    const existingUser = await findUniqueUser(dataToSave?.email);

    if (existingUser) {
      // Update existing user
      const { email, ...fields } = dataToSave;
      const updateSql = `UPDATE users SET ${Object.keys(fields)
        .map((key) => `${key} = ?`)
        .join(', ')} WHERE email = ?`;
      const updateParams = [...Object.values(fields), email];

      await query(updateSql, updateParams);
      await clerkClient.users.updateUser(userId, {
        publicMetadata: {
          profileCompleted: true,
          role: dataToSave?.role ?? 'user',
        },
      });
      return existingUser;
    } else {
      // Insert new user
      const insertFields = [...Object.keys(dataToSave)];
      const insertSql = `INSERT INTO users (${insertFields.join(
        ', '
      )}) VALUES (${insertFields.map(() => '?').join(', ')})`;
      const insertParams = [...Object.values(dataToSave)];

      await query(insertSql, insertParams);
      await clerkClient.users.updateUser(userId, {
        publicMetadata: {
          profileCompleted: true,
          role: dataToSave?.role ?? 'user',
        },
      });
      return {
        data: { message: 'User created successfully', user: dataToSave },
      };
    }
  } catch (error) {
    console.log('error ', error);
    return { err: error };
  }
}

export async function updateUser(clerkId, updates) {
  const allowedFields = [
    'first_name',
    'last_name',
    'email',
    'phone_number',
    'role',
    'profile_completed',
  ];

  const validUpdates = Object.entries(updates)
    .filter(([key]) => allowedFields.includes(key))
    .map(([key, value]) => `${key} = ?`);

  if (validUpdates.length === 0) {
    return null;
  }

  const sql = `
        UPDATE users
        SET ${validUpdates.join(', ')}
        WHERE clerk_id = ?
    `;

  const params = [
    ...Object.entries(updates)
      .filter(([key]) => allowedFields.includes(key))
      .map(([_, value]) => value),
    clerkId,
  ];

  try {
    const result = await query(sql, params);
    return result.affectedRows > 0;
  } catch (error) {
    throw error;
  }
}

export async function getUserByClerkId(clerkId) {
  const sql = 'SELECT * FROM users WHERE clerk_id = ?';
  try {
    const users = await query(sql, [clerkId]);
    return users[0] || null;
  } catch (error) {
    throw error;
  }
}

export async function getUsersByRole(role) {
  const sql = 'SELECT * FROM users WHERE role = ?';
  try {
    return await query(sql, [role]);
  } catch (error) {
    throw error;
  }
}

export async function findUniqueUser(email) {
  if (!email) return false;
  const sql = 'SELECT * FROM users WHERE email = ?';
  const params = [email];
  const result = await query(sql, params);
  return result.length > 0 ? result[0] : null;
}

export async function findUniqueUserRaw(email) {
  const sql = 'SELECT * FROM users WHERE email = ?';
  const params = [email];
  const result = await query(sql, params);
  return result.length > 0 ? result[0] : null;
}

export async function fetchUsers(attributes, filter = {}) {
  const allowedAttributes = [
    'name',
    'email',
    'phone_number',
    'role',
    'business_info',
    'business_link',
    'business_email',
    'interests',
    'first_name',
    'last_name',
    'clerk_id',
    'profile_completed',
  ];

  // Validate attributes to fetch
  const selectedAttributes = attributes.filter((attr) =>
    allowedAttributes.includes(attr)
  );
  if (selectedAttributes.length === 0) {
    throw new Error('No valid attributes provided to fetch.');
  }

  let sql = `SELECT ${selectedAttributes.join(', ')} FROM users`;
  const params = [];

  if (filter?.role) {
    sql += ' WHERE role = ?';
    params.push(filter.role);
  }

  if (filter?.clerk_id) {
    sql += params.length ? ' AND' : ' WHERE';
    sql += ' clerk_id = ?';
    params.push(filter.clerk_id);
  }
  // add more filter params if needed
  try {
    const users = await query(sql, params);
    return users;
  } catch (error) {
    throw error;
  }
}

export async function isProfileCompleted(clerkId) {
  const sql = 'SELECT profile_completed FROM users WHERE clerk_id = ?';
  try {
    const users = await query(sql, [clerkId]);
    return users[0]?.profile_completed || false;
  } catch (error) {
    console.log('error ', error);
    return false;
  }
}
