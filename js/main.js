{
/**
   * The singleton nav menu class.
   */
  const nav = {
    // nav menu state
    active: false,

    // nav elements
    moveEls: null,
    toggle: null,
    gotoEls: null,

    /**
     * Initialize the navigation.
     *
     * @return void
     */
    init() {
      // find some elements
      nav.$moveEls = document.querySelectorAll(".js-nav-move");
      nav.$toggle = document.querySelectorAll(".js-nav-toggle");
      nav.$gotoEls = document.querySelectorAll(".js-nav-goto");

      // bind some events
      nav.$toggle.forEach((el) => el.addEventListener("click", nav.toggle));
      nav.$gotoEls.forEach((el) => el.addEventListener("click", nav.gotoSection));

      window.addEventListener("scroll", nav.setActiveMenu);
      nav.setActiveMenu();
    },

    /**
     * Toggle the nav menu state. We can also force the menu to inactive
     * (hide it) by passing in true to the inactive param.
     *
     * @param Event e
     * @param bool inactive
     * @return void
     */
    toggle(e, inactive) {
      inactive = inactive || false;

      if (nav.active || inactive === true) {
        nav.$moveEls.forEach((el) => el.classList.remove("nav-active"));
        document.querySelector(".js-overlay").classList.remove("active");
        nav.active = false;
      } else {
        nav.$moveEls.forEach((el) => el.classList.add("nav-active"));
        document.querySelector(".js-overlay").classList.add("active");
        nav.active = true;
      }
    },

    /**
     * Get the section related to the link.
     *
     * @param Element el
     * @return Element
     */
    getSection(el) {
      const name = el.getAttribute("data-rel");
      return document.querySelector(`[data-section='${name}']`);
    },

    /**
     * Go to a section of the site.
     *
     * @param Event e
     * @param Element el
     * @return void
     */
    gotoSection(e, el) {
      const target = el || e.target;
      const section = nav.getSection(target);
      const sectionTop = section.offsetTop;

      setTimeout(() => {
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth"
        });
      }, 250);

      nav.toggle(null, true);
      e.preventDefault();
    },

    /**
     * Set the active menu item based on our scroll location on the page.
     *
     * @param Event e
     * @return void
     */
    setActiveMenu(e) {
      const scrollPos = window.scrollY;

      if (scrollPos === 0) {
        nav.$gotoEls.forEach((el) => el.classList.remove("active"));
        nav.$gotoEls[0].classList.add("active");
        return;
      }

      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;

      if (scrollPos + windowHeight >= bodyHeight) {
        nav.$gotoEls.forEach((el) => el.classList.remove("active"));
        nav.$gotoEls[nav.$gotoEls.length - 1].classList.add("active");
        return;
      }

      nav.$gotoEls.forEach((el) => el.classList.remove("active"));
      nav.$gotoEls.forEach((link) => {
        const section = nav.getSection(link);
        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          link.classList.add("active");
        }
      });
    }
  };

  /**
   * The site singleton class.
   */
  const site = {
    /**
     * Initialize the site.
     *
     * @return void
     */
    init() {
      site.scale();
      site.createSkillsList();

      window.addEventListener("resize", site.scale);
    },

    /**
     * Scale the site.
     *
     * @return void
     */
    scale() {
      const main = document.querySelector("main");
      main.style.minHeight = `${window.innerHeight}px`;
    },

    /**
     * Create the list of skills from the skills object.
     *
     * @return void
     */
    createSkillsList() {
      const list = document.querySelector(".js-skill-list");

      for (const category in skills) {
        if (Object.hasOwnProperty.call(skills, category)) {
          const group = skills[category];
          const groupName = document.createElement("h3");
          groupName.textContent = category;
          const skillGroup = document.createElement("div");
          skillGroup.classList.add("skill-group", "column-item");
          skillGroup.appendChild(groupName);
          const skillItems = document.createElement("div");
          skillItems.classList.add("skill-items");

          for (const skill in group) {
            if (Object.hasOwnProperty.call(group, skill)) {
              skillItems.appendChild(site.createSkillItem(skill, group[skill]));
            }
          }

          skillGroup.appendChild(skillItems);
          list.appendChild(skillGroup);
        }
      }
    },

    /**
     * Create an item for the skill list.
     *
     * @param str name
     * @param int value
     * @return Element
     */
    createSkillItem(name, value) {
      const item = document.createElement("div");
      item.classList.add("skill-item");

      const skillName = document.createElement("div");
      skillName.classList.add("skill-name");
      skillName.textContent = name;
      item.appendChild(skillName);

      return item;
    }
  };

  /**
   * My skills as an object.
   */
  const skills = {
    "Languages": {
      "PHP": 3,
      "Python": 3,
      "JavaScript": 3,
      "HTML": 3,
      "CSS": 3,
      "Ruby": 3,
      "Java": 3,
      "Objective-C": 3,
    },
    "Frameworks": {
      "REST": 3,
      "Laravel": 3,
      "Zend": 3,
      "React": 3,
      "Vue": 3,
      "Angular": 3,
      "jQuery": 3,
      "Node": 3,
      "Rails": 3,
      "Sass": 3,
      "WordPress": 3,
    },
    "Data": {
      "MySQL": 3,
      "MongoDB": 3,
      "DynamoDB": 3,
      "Redis": 3,
      "Elasticsearch": 3,
    },
    "Infrastructure": {
      "AWS": 3,
      "GCP": 3,
      "Vagrant": 3,
      "Docker": 3,
      "Kubernetes": 3,
      "Chef": 3,
    },
    "Tools": {
      "Vim": 3,
      "Git": 3,
      "Slack": 3,
      "Jira": 3,
      "Confluence": 3,
      "Adobe Suite": 3,
      "Stripe": 3,
      "Segment": 3,
      "DataDog": 3,
      "Postman": 3,
    }
  };

  // Easter egg functionality
  if (window.addEventListener) {
    const strokes = [];
    let animating = false;

    const eggs = {
      "scorpion": {
        "selector": ".js-scorpion",
        "audio": ".js-scorpion-audio",
        "keys": "37,37,66"
      },
      "raiden": {
        "selector": ".js-raiden",
        "keys": "1,2,3"
      }
    };

    window.addEventListener("keydown", function (e) {
      if (animating) {
        return true;
      }

      strokes.push(e.keyCode);

      for (const egg in eggs) {
        if (Object.hasOwnProperty.call(eggs, egg)) {
          const keys = eggs[egg]["keys"];
          if (strokes.toString().indexOf(keys) >= 0) {
            const container = document.querySelector(".js-eggs");
            const eggEl = document.querySelector(eggs[egg]["selector"]);

            setTimeout(() => {
              eggEl.setAttribute("animate", true);
              animating = true;
            }, 0);

            const audio = document.querySelector(eggs[egg]["audio"]);
            if (audio) {
              setTimeout(() => {
                audio.play();
              }, 800);
            }

            setTimeout(() => {
              eggEl.setAttribute("deanimate", true);

              setTimeout(() => {
                eggEl.removeAttribute("animate");
                eggEl.removeAttribute("deanimate");
                container.style.display = "none";
                animating = false;
                strokes.length = 0;
              }, 1000);

            }, 3200);
          }
        }
      }
    }, true);
  }

  document.addEventListener("DOMContentLoaded", () => {
    nav.init();
    site.init();
  });
}
