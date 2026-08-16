const SUPPORT_EMAIL = "kurwa.offc@proton.me";

document.addEventListener("DOMContentLoaded", () => {
  const mailtoHref = SUPPORT_EMAIL
    ? `mailto:${SUPPORT_EMAIL}`
    : "mailto:";

  const supportLinks = document.querySelectorAll(
    "#support-link, .support-link-side"
  );

  supportLinks.forEach((link) => {
    link.setAttribute("href", mailtoHref);
  });
});
