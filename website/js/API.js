const nameListPush = document.querySelector("#nameList");

async function nameGet() {
  try {
    const nameWhat = await fetch("API.json");
    const nameData = await nameWhat.json();

    console.log(nameData);

    nameListPush.innerHTML = "";

    for (let i = 0; i < nameData.length; i++) {
      const nameCurrent = nameData[i];

      nameListPush.innerHTML += `
        
        <div>
          <ul>
            <li>${nameCurrent.english}</li>
            <li>${nameCurrent.roman}</li>
            <li>${nameCurrent.latin}</li>
            <li>${nameCurrent.greek}</li>
            <li>${nameCurrent.greekLetters}</li>
          </ul>
        </div>
      `;
    }
  } catch (e) {
    console.warn(e);
  }
}

nameGet();
