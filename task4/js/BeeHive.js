class BeeHive {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.height = Math.round(size * 1.35);
    this.color = color;
    this.beehiveDiv = document.createElement("div");
    this.stripes = [];
    this.holeDiv = document.createElement("div");
  }

  renderBeeHive() {
    this.beehiveDiv.classList.add("beehive");
    this.beehiveDiv.style.width = this.size + "px";
    this.beehiveDiv.style.height = this.height + "px";
    this.beehiveDiv.style.left = this.x + "px";
    this.beehiveDiv.style.top = this.y + "px";
    this.beehiveDiv.style.background = `rgb(${this.color.r},${this.color.g},${this.color.b})`;

    this.beehiveDiv.innerHTML = "";
    this.stripes = [];
    const stripeCount = 5;
    for (let i = 0; i < stripeCount; i++) {
      const stripe = document.createElement("div");
      stripe.classList.add("beehive__stripe");
      stripe.style.top = i * (this.height / stripeCount) + "px";
      this.beehiveDiv.appendChild(stripe);
      this.stripes.push(stripe);
    }

    this.holeDiv.classList.add("beehive__hole");
    this.beehiveDiv.appendChild(this.holeDiv);

    const grass = document.querySelector(".grass");
    const sky = document.querySelector(".sky");
    (sky || grass)?.appendChild(this.beehiveDiv);
  }
}
