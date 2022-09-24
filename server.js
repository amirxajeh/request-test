const axios = require("axios")

const req = async () => {
  try {

    for (let i = 0; i < 1000; i++) {

      await axios.get("https://formx.khamenei.link/intro/get-updates")
      console.log(i)
    }

  } catch (error) {
    console.log("error", i)
  }
}

req()