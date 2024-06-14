const pool = require("../config/database");

exports.uploadImage = async (
  usercode,
  url,
  category,
  weight,
  length,
  location
) => {
  const [result] = await pool.query(
    "INSERT INTO images (usercode, url, category, weight, length, location) VALUES (?, ?, ?)",
    [usercode, url, category, weight, length, location]
  );
  return result;
};

exports.findImagesByCategory = async (usercode, category) => {
  const [results] = await pool.query(
    "SELECT url FROM images WHERE usercode = ? AND category = ?",
    [usercode, category]
  );
  return results;
};
