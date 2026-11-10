const fs = require('fs');
const path = require('path');
const readline = require('readline');

async function exportChat() {
  const transcriptPath = 'C:\\Users\\kavin\\.gemini\\antigravity\\brain\\7a178b8d-758c-40ca-bab9-546a1e0145e0\\.system_generated\\logs\\transcript.jsonl';
  if (!fs.existsSync(transcriptPath)) {
    console.log('Transcript not found');
    return;
  }

  const fileStream = fs.createReadStream(transcriptPath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  let chatEntries = [];
  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
      const obj = JSON.parse(line);
      if (obj.type === 'USER_INPUT' && obj.content) {
        chatEntries.push({ role: 'Dasun (You)', content: obj.content });
      } else if (obj.type === 'PLANNER_RESPONSE' && obj.content) {
        chatEntries.push({ role: 'Antigravity AI', content: obj.content });
      }
    } catch(e) {}
  }

  let html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>OCTEWYA Project - Complete Chat & Decisions Record</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #090A0F; color: #E5E7EB; max-width: 960px; margin: 30px auto; padding: 24px; line-height: 1.6; }
    h1 { color: #fff; border-bottom: 2px solid #D4AF37; padding-bottom: 12px; font-size: 24px; }
    .meta { font-size: 13px; color: #9CA3AF; margin-bottom: 24px; }
    .msg { background: #161924; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 20px 24px; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.4); }
    .msg.user { border-left: 4px solid #D4AF37; background: #1A1D2B; }
    .msg.ai { border-left: 4px solid #2EC4B6; }
    .role { font-weight: 700; font-size: 14px; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; }
    .msg.user .role { color: #D4AF37; }
    .msg.ai .role { color: #2EC4B6; }
    .content { font-size: 14px; white-space: pre-wrap; word-break: break-word; }
  </style>
</head>
<body>
  <h1>OCTEWYA Wedding Videography - Complete Chat & Project Record</h1>
  <div class="meta">Recorded Conversation between Dasun Kavinda & Antigravity AI | Project Path: E:\\auntgrevity\\wedding</div>
`;

  chatEntries.forEach(c => {
    const isUser = c.role.includes('Dasun');
    const safeContent = c.content.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    html += `
  <div class="msg ${isUser ? 'user' : 'ai'}">
    <div class="role">${c.role}</div>
    <div class="content">${safeContent}</div>
  </div>`;
  });

  html += `
</body>
</html>`;

  fs.writeFileSync('e:\\auntgrevity\\wedding\\Conversation_Record.html', html, 'utf8');
  console.log('SUCCESS: Conversation_Record.html created!');
}

exportChat();
