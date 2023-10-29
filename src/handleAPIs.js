import axios from "axios";

let homeurl = "http://localhost:3001";

const loadHomePage = async (setHomeData) => {
    try {
        const data = await axios.get(homeurl);
        setHomeData(data);
    } catch (error) {
        console.log(error);
    }
}
export {loadHomePage};