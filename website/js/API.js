const nameListSource = document.querySelector("#nameList");

async function nameGet() {
  try {
    const nameWhat = await fetch("API.json");
    const nameData = await nameWhat.json();

    console.log(nameData);

    nameListSource.innerHTML = `
      <tr>
        <th>English</th>
        <th>Ancient Roman</th>
        <th>Latin</th>
        <th>Ancient Greek</th>
        <th>Greek Letters</th>
        <th>Likes</th>
        <th>Number</th>
      </tr>
    `;

    for (let i = 0; i < nameData.length; i++) {
      const nameCurrent = nameData[i];

      nameListSource.innerHTML += `
        
        <tr>
          <td>${nameCurrent.english}</td>
          <td>${nameCurrent.roman}</td>
          <td>${nameCurrent.latin}</td>
          <td>${nameCurrent.greek}</td>
          <td>${nameCurrent.greekLetters}</td>
          <td>Picture</td>
          <td>0</td>
        </tr>
      `;
    }
  } catch (e) {
    console.warn(e);
  }
}

nameGet();
