
import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure files are saved to public/assets so Vite serves them at root/assets
const ASSETS_DIR = path.join(__dirname, 'public', 'assets');

// Ensure directory exists
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

const images = [
  // Core Images
  { url: "https://i.postimg.cc/D0cZ73YY/5705dabafa41867aae67508a3257bce8.jpg", dest: "profile.jpg" },
  { url: "https://i.postimg.cc/2jvb6PZr/Screen-Shot-2025-11-21-174929-506.png", dest: "wechat-qr.png" },
  
  // Lifestyle
  { url: "https://i.postimg.cc/Gt99zTS4/a2e6531bfd5ab3d768f73c7af6a0406c.jpg", dest: "lifestyle-cycling.jpg" },
  { url: "https://i.postimg.cc/T1hhQ5H2/18ba752bc1aadd28b223716c05903d3d.jpg", dest: "lifestyle-travel.jpg" },
  { url: "https://i.postimg.cc/Zn00jvDS/08b7f5a3e05ee05a6552be5bec42a28c.jpg", dest: "lifestyle-sports.jpg" },
  { url: "https://i.postimg.cc/Y9dh1z8B/6d52bafd84f33d89b8cc2a9e318cf75e.jpg", dest: "lifestyle-life.jpg" },

  // Portfolio Covers
  { url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/China_Mobile_logo_%282019%29.svg/1599px-China_Mobile_logo_%282019%29.svg.png?20241018090546", dest: "p1-china-mobile.png" },
  { url: "https://i.postimg.cc/zGD8KLvC/c40ac9eb63699cce091459aec714a917.png", dest: "p2-ubox-face.png" },
  { url: "https://i.postimg.cc/y6ZpdpNg/e8fb80fe3550878e3e87c62b4753bfb6.png", dest: "p3-ubox-tmall.png" },
  { url: "https://www.winnermedical.cn/Uploads/Temp/image/20211026/61778604016b1.jpg", dest: "p4-winner.jpg" },
  
  // Portfolio 5 (Ubox VI)
  { url: "https://i.postimg.cc/288Kxnd3/20251124she-ji-03.jpg", dest: "p5-01.jpg" },
  { url: "https://i.postimg.cc/kXXpyWNB/20251124she-ji-04.jpg", dest: "p5-02.jpg" },
  { url: "https://i.postimg.cc/xTT4PLG8/20251124she-ji-05.jpg", dest: "p5-03.jpg" },
  { url: "https://i.postimg.cc/CLLQ4bC1/20251124she-ji-06.jpg", dest: "p5-04.jpg" },
  { url: "https://i.postimg.cc/c495k6TH/20251124she-ji-07.jpg", dest: "p5-05.jpg" },
  { url: "https://i.postimg.cc/NfJPCLbr/20251124she-ji-08.jpg", dest: "p5-06.jpg" },
  { url: "https://i.postimg.cc/3JSbfW94/20251124she-ji-09.jpg", dest: "p5-07.jpg" },
  { url: "https://i.postimg.cc/FsWnC1Gc/20251124she-ji-10.jpg", dest: "p5-08.jpg" },
  { url: "https://i.postimg.cc/MKPr3Xty/20251124she-ji-11.jpg", dest: "p5-09.jpg" },
  { url: "https://i.postimg.cc/15CY74Mr/20251124she-ji-12.jpg", dest: "p5-10.jpg" },
  { url: "https://i.postimg.cc/3JSbfW9S/20251124she-ji-13.jpg", dest: "p5-11.jpg" },
  { url: "https://i.postimg.cc/FHYCMmnj/20251124she-ji-14.jpg", dest: "p5-12.jpg" },
  { url: "https://i.postimg.cc/T3KNzG4x/20251124she-ji-15.jpg", dest: "p5-13.jpg" },
  { url: "https://i.postimg.cc/dVgNvXbv/20251124she-ji-16.jpg", dest: "p5-14.jpg" },
  { url: "https://i.postimg.cc/JzSYmgfL/20251124she-ji-17.jpg", dest: "p5-15.jpg" },
  { url: "https://i.postimg.cc/6pFbwSkq/20251124she-ji-18.jpg", dest: "p5-16.jpg" },
  { url: "https://i.postimg.cc/HkFvHKqJ/20251124she-ji-19.jpg", dest: "p5-17.jpg" },

  // Portfolio 6 (Winner Showroom)
  { url: "https://i.postimg.cc/bv8bQ9b9/20251124she-ji-26.jpg", dest: "p6-01.jpg" },
  { url: "https://i.postimg.cc/HLH5Q950/20251124she-ji-27.jpg", dest: "p6-02.jpg" },
  { url: "https://i.postimg.cc/jjKNz4NH/20251124she-ji-28.jpg", dest: "p6-03.jpg" },
  { url: "https://i.postimg.cc/CKYDjsDB/20251124she-ji-29.jpg", dest: "p6-04.jpg" },
  { url: "https://i.postimg.cc/25mv47vK/20251124she-ji-30.jpg", dest: "p6-05.jpg" },
  { url: "https://i.postimg.cc/5t3zpQqh/20251124she-ji-31.jpg", dest: "p6-06.jpg" },
  { url: "https://i.postimg.cc/tg56DnN7/20251124she-ji-32.jpg", dest: "p6-07.jpg" },
  { url: "https://i.postimg.cc/wvjmrxw9/20251124she-ji-33.jpg", dest: "p6-08.jpg" },

  // Portfolio 7 (ABC Bank)
  { url: "https://i.postimg.cc/FFfZFGxj/20251124she-ji-20.jpg", dest: "p7-01.jpg" },
  { url: "https://i.postimg.cc/HWftr5SM/20251124she-ji-21.jpg", dest: "p7-02.jpg" },
  { url: "https://i.postimg.cc/2jPx1vHF/20251124she-ji-22.jpg", dest: "p7-03.jpg" },
  { url: "https://i.postimg.cc/y6wTD9fc/20251124she-ji-23.jpg", dest: "p7-04.jpg" },
  { url: "https://i.postimg.cc/WpQ7dr9w/20251124she-ji-24.jpg", dest: "p7-05.jpg" },
  { url: "https://i.postimg.cc/2jPx1vHH/20251124she-ji-25.jpg", dest: "p7-06.jpg" },

  // Portfolio 8 (Others)
  { url: "https://i.postimg.cc/jSh631sr/20251124she-ji-40.jpg", dest: "p8-01.jpg" },
  { url: "https://i.postimg.cc/QdqgYzj2/20251124she-ji-41.jpg", dest: "p8-02.jpg" },
  { url: "https://i.postimg.cc/rw9GZH86/20251124she-ji-42.jpg", dest: "p8-03.jpg" },
  { url: "https://i.postimg.cc/L8VkQWHK/20251124she-ji-43.jpg", dest: "p8-04.jpg" },
  { url: "https://i.postimg.cc/sgJPHLVz/20251124she-ji-44.jpg", dest: "p8-05.jpg" },
  { url: "https://i.postimg.cc/6Q5rkhQD/20251124she-ji-45.jpg", dest: "p8-06.jpg" },
  { url: "https://i.postimg.cc/8CPR2b5V/20251124she-ji-46.jpg", dest: "p8-07.jpg" },
  { url: "https://i.postimg.cc/FKsyMxRs/20251124she-ji-47.jpg", dest: "p8-08.jpg" },
  { url: "https://i.postimg.cc/PqrWgMxP/20251124she-ji-48.jpg", dest: "p8-09.jpg" },
  { url: "https://i.postimg.cc/GphFWj2G/20251124she-ji-49.jpg", dest: "p8-10.jpg" },
  { url: "https://i.postimg.cc/QMxQ2qt5/20251124she-ji-50.jpg", dest: "p8-11.jpg" }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    https.get(url, options, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}, status code: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${path.basename(dest)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // Delete file on error
      reject(err);
    });
  });
};

const run = async () => {
  console.log('Starting image downloads to public/assets...');
  for (const img of images) {
    try {
      await download(img.url, path.join(ASSETS_DIR, img.dest));
    } catch (err) {
      console.error(`Error downloading ${img.url}:`, err.message);
    }
  }
  console.log('All downloads completed! You can now run the app.');
};

run();
