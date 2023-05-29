import axios from "axios";

const API_KEY = process.env.CONVERKIT_TOKEN;
const FORM_ID = "5204468";
const headers = {
  "Content-Type": "application/json; charset=utf-8",
};

export const createSubscription = async (email: string) => {
    try {
        const response = await axios.post(
            `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
            {
                api_key: API_KEY,
                email,
                tags: ['web_site']
            },
            {
                headers
            }
        );
    
        if (response.status >= 200 && response.status <= 299) {
            return 'Email registered. Thanks!!'
        }
    } catch (err) {
        console.log(err)
        return "Something went wrong. Please try again"
    }
}