export default async function handler(req, res) {
  if (req.query.userId != undefined) {
    const token = req.query.token;
    const userId = req.query.userId;

    const social_response = await fetch(
      `https://api.moinet.io/iome/v0/user/${userId}/digitalme?dimension=social&attributes=twitter,telegram,discord`,
      {
        headers: {
          Authorization: `EC_S256-B58 ${token}`,
        },
      }
    ).then((response) => response.json());

    let telegramPromise, discordPromise, twitterPromise;

    if (social_response.data.result.givenAttributes.telegram) {
      const telegramUsername = social_response.data.result.givenAttributes.telegram.value.username;
      telegramPromise = fetch(
        `https://qa-sm.moinet.io/api/v1/engagement/telegram/${telegramUsername}`,
        {
          headers: {
            Authorization: `EC_S256-B58 ${token}`,
          },
        }
      ).then((response) => response.json());
    }

    if (social_response.data.result.givenAttributes.discord) {
      const discordUsername = social_response.data.result.givenAttributes.discord.value.username;
      discordPromise = fetch(
        `https://qa-sm.moinet.io/api/v1/engagement/discord/${discordUsername}`,
        {
          headers: {
            Authorization: `EC_S256-B58 ${token}`,
          },
        }
      ).then((response) => response.json());
    }

    if (social_response.data.result.givenAttributes.twitter) {
      const twitterUsername = social_response.data.result.givenAttributes.twitter.value.username;
      twitterPromise = fetch(
        `https://qa-sm.moinet.io/api/v1/engagement/twitter/${twitterUsername}`,
        {
          headers: {
            Authorization: `EC_S256-B58 ${token}`,
          },
        }
      ).then((response) => response.json());
    }

    const [telegram_response, discord_response, twitter_response] = await Promise.all([
      telegramPromise,
      discordPromise,
      twitterPromise,
    ]);
  } else {
    res.status(400).json({ error: "userId parameter is required" });
  }
}
