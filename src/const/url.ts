let redirect_uri: string;
if (process.env.NODE_ENV === "development") {
    redirect_uri = "http%3A%2F%2Flocalhost%3A8100%2Fauth";
} else {
    redirect_uri = "https%3A%2F%2Fmusical-lamington-39fe95.netlify.app%2Fauth";
}
export default redirect_uri;