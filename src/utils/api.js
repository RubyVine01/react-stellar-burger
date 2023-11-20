// function checkResponse(res) {
//   if (res.ok) {
//     return res.json();
//   }
//   return Promise.reject(`Ошибка: ${res.status}`);
// }

function checkResponse(res) {
  const contentType = res.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    return res.json().then((data) => {
      if (res.ok) {
        return data;
      } else {
        return Promise.reject(data.message || `Ошибка: ${res.status}`);
      }
    });
  } else {
    // Возвращение только кода статуса ошибки
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  
}

export function request(url, options) {
  return fetch(url, options)
    .then(checkResponse)
    .catch((error) => {
      if (error.name === "TypeError" && error.message === "Failed to fetch") {
        return Promise.reject("Ошибка сети: Не удалось выполнить запрос");
      }
      return Promise.reject(error.message || error.toString());
    });
}
