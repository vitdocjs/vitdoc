export function isMobile() {
  if (
    /(iphone|ios|android|mini|mobile|mobi|Nokia|Symbian|iPod|iPad|Windows\s+Phone|MQQBrowser|wp7|wp8|UCBrowser7|UCWEB|360\s+Aphone\s+Browser)/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  }

  return window.innerWidth <= 750;
}
