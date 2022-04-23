const sendDoc = (email, text) => {
  Email.send({
    SecureToken: "bd9151f0-18c1-43ca-b131-7016fc6e8096",
    To: email,
    From: "teppy@aol.jp",
    Subject: "注文依頼:もんげ絵",
    Body: text,
  }).then((message) => alert(message));
};

const btn = document.getElementById("send_Doc");
btn.addEventListener(
  "click",
  function() {
    const email = document.getElementById("email").value;
    const name = document.getElementById("full_name").value;
    const line_id = document.getElementById("line_id").value;
    const icon_prefix2 = document.getElementById("icon_prefix2").value;
    const text =
      "依頼者：" +
      name +
      " 様<br>" +
      "メールアドレス: " +
      email +
      "<br>" +
      "LINE ID: " +
      line_id +
      "<br>" +
      "問い合わせ内容: " +
      icon_prefix2 +
      "<br>";
    sendDoc(email, text);
  },
  false
);
