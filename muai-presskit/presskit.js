function openLinkedSection() {
  let id;
  try {
    id = decodeURIComponent(window.location.hash.slice(1));
  } catch {
    return;
  }

  const target = document.getElementById(id);
  if (!target) return;

  let section = target.closest("details");
  while (section) {
    section.open = true;
    section = section.parentElement?.closest("details");
  }
  requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
}

document.querySelectorAll("details.press-section").forEach((section) => {
  section.addEventListener("toggle", () => {
    if (!section.open) {
      section.querySelectorAll("video").forEach((video) => video.pause());
    }
  });
});

window.addEventListener("hashchange", openLinkedSection);
openLinkedSection();
