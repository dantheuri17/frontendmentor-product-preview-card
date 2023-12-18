import perfumeImage from "../assets/images/image-product-desktop.jpg";
import cartIconSVG from "../assets/images/icon-cart.svg"

const PreviewCard = () => {
	return (
		<>
			<div className="flex items-center justify-center w-screen h-screen bg-cream card-container">
				<div className="card grid w-[38rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:w-[38rem]">
					<div className="h-full overflow-hidden image-container rounded-l-2xl">
						<img
							src={perfumeImage}
							alt="Perfume Image"
							className="object-contain w-full h-full"
						/>
					</div>

					<div className="flex flex-col justify-between w-full h-full px-10 py-8 bg-white rounded-r-2xl">
						<p className="tracking-[.3rem] font-montserrat text-dark-grayish-blue text-xs">
							PERFUME
						</p>
						<h3 className="text-3xl leading-[1] tracking-tight font-fraunces">
							Gabrielle Essence Eau <br />De Parfum
						</h3>
						<p className="text-sm tracking-wider text-dark-grayish-blue">
							A floral, solar and voluptuous interpretation composed by Olivier
							Polge, Perfumer-Creator for the House of CHANEL.
						</p>
						<div className="flex items-center">
							<p className="text-3xl text-dark-cyan font-fraunces">$149.99</p>

							<p className="ml-5 text-sm line-through text-dark-grayish-blue">
								$169.99
							</p>
						</div>

						<div className="flex justify-center">
							<button className="flex items-center justify-around w-full py-3 text-white rounded-lg bg-dark-cyan">
								<span className="flex">
									<img
										src={cartIconSVG}
										className="object-contain pr-3"
										alt=""
									/>
									<p>Add to Cart</p>
								</span>
							</button>
						</div>

						{/* <div className="attribution">
							Challenge by{" "}
							<a
								href="https://www.frontendmentor.io?ref=challenge"
								target="_blank"
							>
								Frontend Mentor
							</a>
							. Coded by <a href="#">Your Name Here</a>.
						</div> */}
					</div>
				</div>
			</div>

			{/* <title>Frontend Mentor | Product preview card component</title> */}
		</>
	);
};

export default PreviewCard;
