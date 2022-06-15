export let redirect_uri: string;
if (process.env.NODE_ENV === "development") {
    redirect_uri = "http%3A%2F%2Flocalhost%3A8100%2Fauth";
} else {
    redirect_uri = "https%3A%2F%2Fcontinuationapp.netlify.app%2Fauth";
}

export let api_url: string;

if (process.env.NODE_ENV === "development") {
    api_url = "http://127.0.0.1:5000";
} else {
    api_url = "https://continuation-app.herokuapp.com";
}