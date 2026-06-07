const fs = require("fs");
const path = require("path");

const skipDirs = ["write", "login", "contact", "blog", "post"];
const appDir = path.join(__dirname, "..", "src", "app");

function shouldProcess(filePath) {
  if (!filePath.endsWith(`${path.sep}page.jsx`)) return false;
  return !skipDirs.some(
    (dir) =>
      filePath.includes(`${path.sep}${dir}${path.sep}`) ||
      filePath.endsWith(`${path.sep}${dir}${path.sep}page.jsx`)
  );
}

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full);
    else if (shouldProcess(full)) {
      let content = fs.readFileSync(full, "utf8");
      if (!content.includes("FullPageSpeech") && !content.includes("showSpeech")) continue;

      const original = content;
      content = content.replace(/import FullPageSpeech[^\n]+\n/g, "");
      content = content.replace(/\n\s*const \[showSpeech, setShowSpeech\] = useState\([^)]*\);[^\n]*\n/g, "\n");
      content = content.replace(/\s*<div className=\{styles\.speechFloating\}>[\s\S]*?<\/div>\s*/g, "\n");
      content = content.replace(/\s*\{showSpeech && <FullPageSpeech \/>\}\s*/g, "\n");
      content = content.replace(/\s*\{showSpeech && \([\s\S]*?\)\}\s*/g, "\n");
      content = content.replace(/\s*<FullPageSpeech \/>\s*/g, "\n");

      if (content !== original) {
        fs.writeFileSync(full, content);
        console.log("updated:", full);
      }
    }
  }
}

walk(appDir);
