const API_URL = "http://localhost:8000";

export const httpGetVocabs = async () => {
  try {
    const response = await fetch(`${API_URL}/vocabs/vocabsList`, {
      method: "GET",
      "Content-Type": "application/json",
    });
    return await response.json();
  } catch (error) {
    console.log("httpGetVocabs Error", error);
    throw new Error("httpGetVocabs failed");
  }
};

export const httpGetCoverContent = async () => {
  try {
    const response = await fetch(`${API_URL}/cover/coverContent`, {
      method: "GET",
      "Content-Type": "application/json",
    });
    return await response.json();
  } catch (error) {
    console.log("httpGetCoverContent Error", error);
    throw new Error("httpGetCoverContent failed");
  }
};
