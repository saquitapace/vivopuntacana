import { fetchUsers } from '@/src/lib/users';
import jwt from 'jsonwebtoken';
/**
 * Manually parses cookies from the request header.
 * @param {string} cookieHeader - The raw `Cookie` header string.
 * @returns {Object} - Parsed cookies as key-value pairs.
 */
const parseCookies = (cookieHeader) => {
  const cookies = {};
  if (!cookieHeader) return cookies;

  cookieHeader.split(';').forEach((cookie) => {
    const [name, value] = cookie.split('=').map((part) => part.trim());
    if (name && value) {
      cookies[name] = decodeURIComponent(value);
    }
  });

  return cookies;
};

/**
 * Extracts and verifies authentication information from the request.
 * @param {Object} req - The incoming HTTP request object.
 * @returns {Object} - Authentication information (e.g., userId) or an error.
 */
export const getAuth = (req) => {
  try {
    const publicKey = process.env.CLERK_PEM_PUBLIC_KEY.replace(/\\n/g, '\n');
    const cookies = parseCookies(req.headers.cookie || '');
    const token = cookies.__session;
    let decoded;
    const options = { algorithms: ['RS256'] };
    // const permittedOrigins = ['http://localhost:3000', 'https://example.com']; // Replace with your permitted origins in production

    decoded = jwt.verify(token, publicKey, options);
    // }
    // Validate the token's expiration (exp) and not before (nbf) claims
    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp < currentTime || decoded.nbf > currentTime) {
      throw new Error('Token is expired or not yet valid');
    }

    // Validate the token's authorized party (azp) claim
    if (!decoded.azp) {
      throw new Error("Invalid 'azp' claim");
    }

    return {
      userId: decoded.sub, // Assuming the JWT contains `sub` as the user ID
      sessionId: decoded.sid, // Example: session ID if included
      error: null,
    };
  } catch (err) {
    return { userId: null, error: 'Invalid or expired session token' };
  }
};

export default async function handler(req, res) {
  try {
    const { userId } = await getAuth(req);
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const [user] = await fetchUsers(['profile_completed'], {
      clerk_id: userId,
    });
    res
      .status(200)
      .json({ isProfileCompleted: user?.profile_completed ?? false });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
