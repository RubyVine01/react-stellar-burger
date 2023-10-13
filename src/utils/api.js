function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function request(url) {
  return fetch(`${url}`).then(checkResponse);
}
