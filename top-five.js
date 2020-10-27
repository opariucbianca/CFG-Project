let project = {
  title: "CFG Project Website",
  description:
    "I created this website with two teammates during CFG. It showcased everything we had learned and showed our teamwork to get it looking great. We came first in the competition too!",
  image_url: "./images/placeholder-cfg.png",
  link: {
    text: "See it live",
    url: "#"
  }
};
console.log(project);

let projects = [
  {
    title: "CFG Project Website",
    description:
      "I created this website with two teammates during CFG. It showcased everything we had learned and showed our teamwork to get it looking great. We came first in the competition too!",
    image_url: "./images/placeholder-cfg.png",
    link: {
      text: "See it live",
      url: "#"
    }
  },
  {
    title: "My Portfolio",
    description:
      "This is where you are right now! I created this as I was learning the content in CFG, it really helped me to see how everything fit in real use-cases, it was awesome!",
    image_url: "./images/placeholder-cfg.png"
  },
  {
    title: "My Art Website",
    description:
      "Not long after finishing CFG, I took my love for Art and decided to create a visually pleasing website to show my artwork. There's even options in there to buy my work to help support my future.",
    image_url: "./images/placeholder-cfg.png",
    link: {
      text: "Get inspired",
      url: "#"
    }
  }
];
console.log(projects);

for (let i = 0; i < projects.length; i++) {
  console.log("");
  console.log("Title: " + projects[i].title);
  console.log("Description: " + projects[i].description);
  console.log("Image URL: " + projects[i].image_url);

  if (projects[i].link) {
    console.log("Link Text: " + projects[i].link.text);
    console.log("Link URL: " + projects[i].link.url);
  } else {
    console.log("Link: Not provided");
  }
}
