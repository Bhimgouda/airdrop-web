export default async function handler(req, res) {
  if (req.query.userId != undefined) {
    const token = req.query.token;
    const userId = req.query.userId;

    const phonePromise = fetch(
      `https://api.moinet.io/iome/v0/user/${userId}/digitalme?dimension=personal&attributes=phone`,
      {
        headers: {
          Authorization: `EC_S256-B58 ${token}`,
        },
      }
    ).then((response) => response.json());

    const emailPromise = fetch(
      `https://api.moinet.io/iome/v0/user/${userId}/digitalme?dimension=personal&attributes=email`,
      {
        headers: {
          Authorization: `EC_S256-B58 ${token}`,
        },
      }
    ).then((response) => response.json());

    const kycPromise = fetch(
      `https://api.moinet.io/iome/v0/user/${userId}/digitalme?dimension=personal&attributes=kyc`,
      {
        headers: {
          Authorization: `EC_S256-B58 ${token}`,
        },
      }
    ).then((response) => response.json());

    const validatorNodesPromise = fetch(
      `https://api.moinet.io/moi-id/moinode/list?userID=${userId}`,
      {
        headers: {
          Authorization: `EC_S256-B58 ${token}`,
        },
      }
    ).then((response) => response.json());

    const interactionsPromise = fetch(`https://api.moinet.io/iome/v0/user/${userId}/interactions`, {
      headers: {
        Authorization: `EC_S256-B58 ${token}`,
      },
    }).then((response) => response.json());

    const kramaIDPromise = fetch(`https://api.moinet.io/moi-id/moinode/list?userID=${userId}`, {
      headers: {
        Authorization: `EC_S256-B58 ${token}`,
      },
    }).then((response) => response.json());

    const [
      phone_no_response,
      email_response,
      kyc_response,
      validator_nodes_response,
      interactions_response,
      kramaID_response,
    ] = await Promise.all([
      phonePromise,
      emailPromise,
      kycPromise,
      validatorNodesPromise,
      interactionsPromise,
      kramaIDPromise,
    ]);

    res.status(200).json({
      moiId: userId,
      phone_no: phone_no_response,
      email: email_response,
      kyc: kyc_response,
      validator_nodes: validator_nodes_response,
      interactions: interactions_response,
      kramaID: kramaID_response,
    });
  } else {
    res.status(400).json({ error: "userId parameter is required" });
  }
}
