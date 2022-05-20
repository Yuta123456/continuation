const getRandomString = () => {
    const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const n = 16
    return Array.from(crypto.getRandomValues(new Uint8Array(n))).map((n)=>S[n%S.length]).join('');
} 

export default getRandomString;