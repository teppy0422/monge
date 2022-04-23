const sendDoc = (email, text) => {
  Email.send({
    SecureToken: "bd9151f0-18c1-43ca-b131-7016fc6e8096",
    To: email,
    From: "teppy@aol.jp",
    Subject: "注文依頼:もんげ絵",
    Body: text,
  }).then((message) => alert(message));
};
