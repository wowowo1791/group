const nameListPush = document.querySelector("#nameList");

async function nameGet() {
  try {
    const nameWhat = await fetch("API.json");

    const nameData = await nameResponse.json();

    console.log(nameData);

    nameListPush.innerHTML = "";

    for (let i = 0; i < nameData.length; i++) {
      const nameCurrent = nameData[i];

      nameListPush.innerHTML += (
        <li>
          ${nameCurrent.english} ( ${nameCurrent.roman})
        </li>
      );
    }
  } catch (e) {
    console.warn(e);
  }
}

nameGet();
