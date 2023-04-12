function serializeUserResponse(user) {
  return {
    user: serializeUser(user),
  };
}

function serializeUser(user) {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
  };
}

exports.serializeUserResponse = serializeUserResponse;
exports.serializeUser = serializeUser;
