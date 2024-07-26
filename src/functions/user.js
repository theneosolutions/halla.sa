function User() {
  if (typeof window !== "undefined") {
    const storage = localStorage.getItem("user");
    if (storage) {
      const user = JSON.parse(storage);
      console.log("token", user?.data?.accessToken);
      if (user?.data?.accessToken) {
        return user?.data;
      } else {
        return null;
      }
    }
  }
  return null;
}

export { User };
