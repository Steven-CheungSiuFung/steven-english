const API_URL = "";

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

export const httpAddNewVocab = async (form) => {
  try {
    const result = await fetch(`${API_URL}/vocabs/addNewVocab`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    if (result.ok) {
      return { ok: result.ok };
    }
  } catch (error) {
    console.log("httpAddNewVocab Error", error);
    throw new Error("httpAddNewVocab failed");
  }
};
