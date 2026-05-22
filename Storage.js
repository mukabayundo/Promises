
async function saveToLocal(data) {

  try {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem("userPosts", stringifiedData);
    console.log("Posts saved to Local Storage successfully!");

  } catch (err) {
    console.error(err);
  }

}

export default saveToLocal;     