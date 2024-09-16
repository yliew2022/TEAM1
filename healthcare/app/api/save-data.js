// pages/api/save-data.js

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { username, email, password } = req.body;

      // Define the file path
      const filePath = path.join(process.cwd(), 'data', 'userData.json');

      // Ensure the 'data' directory exists
      if (!fs.existsSync(path.dirname(filePath))) {
        fs.mkdirSync(path.dirname(filePath));
      }

      // Read existing data
      let existingData = [];
      if (fs.existsSync(filePath)) {
        existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      }

      // Add new user data
      existingData.push({ username, email, password });

      // Write updated data to the file
      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf8');

      res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
