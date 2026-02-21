class BeeHive {
	constructor(x, y, width, height, r, g, b) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.r = r;
		this.g = g;
		this.b = b;
		this.beehive = document.createElement("div");
		this.stripes = [];
	}

	renderBeeHive() {
		this.beehive.classList.add("beehive");
		this.beehive.style.width = this.width + "px";
		this.beehive.style.height = this.height + "px";
		this.beehive.style.left = this.x + "px";
		this.beehive.style.top = this.y + "px";
		this.beehive.style.background = `rgb(${this.r},${this.g},${this.b})`;

			this.beehive.innerHTML = "";
			this.stripes = [];
			const stripeCount = 5;
			for (let i = 0; i < stripeCount; i++) {
				const stripe = document.createElement("div");
				stripe.classList.add("beehive__stripe");
				stripe.style.top = i * (this.height / stripeCount) + "px";
				this.beehive.appendChild(stripe);
				this.stripes.push(stripe);
			}

		const grass = document.querySelector(".grass");
		const sky = document.querySelector(".sky");
		(grass || sky)?.appendChild(this.beehive);
	}
}