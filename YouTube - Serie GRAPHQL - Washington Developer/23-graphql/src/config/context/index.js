module.exports = ({ req }) => {
  const user_id = req.headers.authorization;

  return {
    user_id,
  };
};
