export const isEmpty = (arg) => {
  const checkProperties = (obj) => {
    for (let key in obj) {
      if (obj[key] === null || obj[key] === "") {
        return true;
      }
    }
    return false;
  };

  return (
    arg == null || // Check for null or undefined
    arg.length === 0 || // Check for empty String (Bonus check for empty Array)
    (typeof arg === "object" && (Object.keys(arg).length === 0 || checkProperties(arg))) // Check for empty Object or Array
  );
};

export const formatBytes = (bytes, decimals = 2) => {
  if (!+bytes) {
    return "0 B";
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export const containsDoubleByte = (arg) => {
  const regex = /[^\u0000-\u00ff]/;

  if (!arg.length) return false;
  if (arg.charCodeAt(0) > 255) return true;
  return regex.test(arg);
};

export const getBlastMessageCount = (message) => {
  const BLAST_MESSAGE_CHAR_COUNT = message && message.length;
  const HAS_UNICODE = message && containsDoubleByte(message);

  if (BLAST_MESSAGE_CHAR_COUNT === 0) return 0;

  const BLAST_MESSAGE_CHAR_COUNT_UNICODE = BLAST_MESSAGE_CHAR_COUNT <= 70 ? 1 : Math.ceil((BLAST_MESSAGE_CHAR_COUNT - 70) / 70) + 1;
  const BLAST_MESSAGE_CHAR_COUNT_NONUNICODE = BLAST_MESSAGE_CHAR_COUNT <= 160 ? 1 : Math.ceil((BLAST_MESSAGE_CHAR_COUNT - 160) / 154) + 1;
  return HAS_UNICODE ? BLAST_MESSAGE_CHAR_COUNT_UNICODE : BLAST_MESSAGE_CHAR_COUNT_NONUNICODE;
};

export const getUniqueKey = () => {
  const crypto = window.crypto || window.msCrypto;
  const array = new Uint32Array(1);
  
  return Math.floor(crypto.getRandomValues(array) * Date.now()).toString(16);
};