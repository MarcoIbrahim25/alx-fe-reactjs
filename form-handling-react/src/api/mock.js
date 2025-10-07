export function fakeRegister(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.username?.toLowerCase() === "error") {
        reject(new Error("Mock API: username is already taken"));
      } else {
        resolve({ ok: true, id: Date.now(), ...data });
      }
    }, 800);
  });
}
