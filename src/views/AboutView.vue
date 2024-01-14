<template>
	<div class="page-wrapper">
		<div class="page-header">
			<!-- <div class="header-item">About me ..!</div> -->
		</div>
		<div class="page-body">
			<div class="body-wrapper">
				<div class="profile-picture">
					<!-- <img src="https://avatars.githubusercontent.com/u/1004701?v=4" alt="profile picture" /> -->
					<img src="../../public/Images/VinProfile.jpeg" alt="profile picture" />
				</div>
				<div class="contents">
					<div class="content-item name">Vinayaka Raju S</div>
					<div class="content-item quotation">“Waste no more time arguing what a good man should be. Be One.”</div>
					<div class="content-item social-media">
						<div class="media-item">
							<div class="media-icon">
								<!-- LinkedIn Logo Image -->
								<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" />
							</div>
							<div class="media-name">
								<a href="https://www.linkedin.com/in/vinayaka-raju-442895157/" target="_blank">LinkedIn</a>
							</div>
						</div>
						<div class="media-item">
							<div class="media-icon">
								<!-- Google Scholar Icon-->
								<img src="../../public/Images/googleScholar.png" alt="google scholar" />
							</div>
							<div class="media-name">
								<a href="https://scholar.google.com/citations?user=E4sRMV0AAAAJ&hl=en" target="_blank"
									>Google Scholar</a
								>
							</div>
						</div>
						<div class="media-item">
							<div class="media-icon">
								<!-- Github -->
								<img src="../../public/Images/githubLogo.png" alt="github" />
							</div>
							<div class="media-name">
								<a href="https://github.com/vinayakaraju46" target="_blank">Github</a>
							</div>
						</div>
						<div class="media-item">
							<div class="media-icon">
								<!-- Instagram -->
								<img src="../../public/Images/Instagram.png" alt="instagram" />
							</div>
							<div class="media-name">
								<a href="https://www.instagram.com/vinay_raju_s/" target="_blank">Instagram</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="page-footer">
			<div class="content-item">
				<div class="content-title">Education</div>
				<div class="content-body">
					<div class="content-item">
						<div class="info-title">
							<a href="https://www.sjpuc.in/" target="_blank"> St. Josephs' Pre-University College</a>
						</div>
						<div class="info-body">
							<ul>
								<li>Physics, Chemistry, Mathematics and Electronics</li>
								<li>2014 - 2016</li>
							</ul>
						</div>
					</div>
					<div class="content-item">
						<div class="info-title">
							<a href="https://www.bmsce.ac.in/" target="_blank"> B.M.S College of Engineering</a>
						</div>
						<div class="info-body">
							<ul>
								<li>Bachelor of Telecommunication Engineering</li>
								<li>2016 - 2020</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="content-item">
				<div class="content-title">Projects</div>
				<div class="content-body">
					<div class="content-item">
						<!-- <div class="info-title">
							<a href="https://www.finastra.com/" target="_blank"> Finastra</a>
						</div> -->
						<div class="info-body">
							<ul>
								<li>
									<span class="has-text-weight-semibold project">
										Project Proposals management system |
										<div class="tag" @click="previewProject('c3ihub')">Preview</div>
									</span>
								</li>
								<li>
									Developed a web application for managing project proposals. The frontend of this application is built
									using VueJs, backend with NodeJs and the database with mongoDB. Application supports role based access
									control.
								</li>
							</ul>
						</div>
					</div>
					<div class="content-item">
						<!-- <div class="info-title">
							<a href="https://www.finastra.com/" target="_blank"> Finastra</a>
						</div> -->
						<div class="info-body">
							<ul>
								<li>
									<span class="has-text-weight-semibold project">
										Job Hiring platform |
										<div class="tag" @click="previewProject('c3iCareers')">Preview</div>
									</span>
								</li>
								<li>
									Developed a web application for managing job hiring. The frontend of this application is built using
									VueJs, backend with NodeJs and the database with mongoDB. Application supports role based access
									control.
								</li>
							</ul>
						</div>
					</div>
					<div class="content-item">
						<!-- <div class="info-title">
							<a href="https://www.finastra.com/" target="_blank"> Finastra</a>
						</div> -->
						<div class="info-body">
							<ul>
								<li>
									<span class="has-text-weight-semibold project">
										ROS Labs |
										<div class="tag" @click="previewProject('ros')">Preview</div>
									</span>
								</li>
								<li>
									Cloud based solution to practice ROS on a browser. The frontend of this application is built using
									VueJs, backend with NodeJs and the database with mongoDB.
								</li>
							</ul>
						</div>
					</div>
					<div class="content-item">
						<!-- <div class="info-title">
							<a href="https://www.finastra.com/" target="_blank"> Finastra</a>
						</div> -->
						<div class="info-body">
							<ul>
								<li>
									<span class="has-text-weight-semibold project">
										Internet of things |
										<a href="https://github.com/ClyckIOT/clyckIOT" target="_blank">Link</a>
									</span>
								</li>
								<li>
									A web application that is capable of controlling a microcontroller through an API call. The frontend
									of this application is built using VueJs, backend with NodeJs and the database with mongoDB. APIs are
									protected using google firebase
								</li>
							</ul>
						</div>
					</div>
					<div class="content-item">
						<!-- <div class="info-title">
							<a href="https://www.finastra.com/" target="_blank"> Finastra</a>
						</div> -->
						<div class="info-body">
							<ul>
								<li>
									<span class="has-text-weight-semibold project"> Autonomous rc car </span> |
									<a href="https://arxiv.org/abs/2212.07155" target="_blank">Link</a>
								</li>
								<li>
									Navigation of scaled version of a car using LIDAR as the sensor. The Nvidia Jetson nano was used as an
									onboard computer. I was able to gain knowledge on ROS[robot operating system], Motion and path
									planning
								</li>
							</ul>
						</div>
					</div>
					<div class="content-item">
						<!-- <div class="info-title">
							<a href="https://www.finastra.com/" target="_blank"> Finastra</a>
						</div> -->
						<div class="info-body">
							<ul>
								<li>
									<span class="has-text-weight-semibold project"> EYRC-2018 </span> |
									<a href="https://clyckiotbuild.s3.ap-south-1.amazonaws.com/ERTS-2018.pdf" target="_blank">Link</a>
								</li>
								<li>
									A national level robotics competition conducted by IIT Bombay. The task was to build an autonomous
									drone that can navigate through the given waypoints. I learnt the concepts of control systems like PID
									controllers and mechanics of quadcopter
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="content-item">
				<div class="content-title">Work Experience</div>
				<div class="content-body">
					<div class="content-item">
						<div class="info-title">
							<a href="https://c3ihub.org/" target="_blank"> C3iHub | Indian Institute Of Technology, Kanpur</a>
						</div>
						<div class="info-body">
							<ul>
								<li>
									<span class="has-text-weight-semibold designation"> Project Engineer </span> (Nov 2023 - Current)
								</li>
								<li>
									Working as a fullstack engineer. I was responsible for developing the frontend of
									<span>
										<a href="https://kda-dev.c3ihub.org/login" target="_blank">Kanpur Development Authority</a>.</span
									>
									I've also worked on the backend of
									<span>
										<a href="https://c3ihub.org/careers" target="_blank">C3ihub Careers</a> functionality, which
										includes user management with various roles and privileges.
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="content-item">
						<div class="info-title">
							<a href="https://trigent.com/" target="_blank"> Trigent Software Solutions</a>
						</div>
						<div class="info-body">
							<ul>
								<li>
									<span class="has-text-weight-semibold designation"> Software Engineer </span> (April 2022 - Nov 2022)
								</li>
								<li>Worked as a frontend engineer on a resource management tool</li>
							</ul>
						</div>
					</div>
					<div class="content-item">
						<div class="info-title">
							<a href="https://www.finastra.com/" target="_blank"> Finastra</a>
						</div>
						<div class="info-body">
							<ul>
								<li>
									<span class="has-text-weight-semibold designation"> Associate Software Engineer </span> (Jan 2020 -
									April 2022)
								</li>
								<li>
									Worked on a project called UI builder where a form can be created just by drag and drop of input
									components and can be rendered using JSON. This project will be used across the organization and also
									by the customer to create a web form without any knowledge of coding
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="content-item">
				<div class="content-title">Interests</div>
				<div class="content-body">
					<div class="content-item">
						<!-- <div class="info-title">
							<a href="https://www.finastra.com/" target="_blank"> Finastra</a>
						</div> -->
						<div class="info-body">
							<ul>
								<li>
									<span class="has-text-weight-semibold project"> Books | Trekking | Boxing | Running | Cooking</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="modal-component" v-if="modalConfig.isOpen" @click="modalConfig.isOpen = false">
		<div class="close-modal">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="30"
				width="30"
				viewBox="0 0 512 512"
				@click="modalConfig.isOpen = false"
			>
				<path
					d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
				/>
			</svg>
		</div>
		<carousel class="carousal" :items-to-show="1">
			<slide v-for="(item, index) in modalConfig.items" :key="index">
				<div class="image">
					<img :src="require(`../../public/Images/${item.path}`)" :alt="item.title" />
				</div>
			</slide>

			<template #addons>
				<navigation />
				<pagination />
			</template>
		</carousel>
	</div>
</template>
<script>
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel"

export default {
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation
	},
	data() {
		return {
			name: "Vinayaka Raju S",
			quotation: "“Waste no more time arguing what a good man should be. Be One.”",
			socialMedia: [
				{
					mediaType: "LinkedIn",
					link: ""
				},
				{
					mediaType: "Google Scholar",
					link: ""
				},
				{
					mediaType: "Github",
					link: ""
				},
				{
					mediaType: "Instagram",
					link: ""
				}
			],
			educationInfo: [
				{
					name: "",
					specialization: "",
					duration: ""
				},
				{
					name: "",
					specialization: "",
					duration: ""
				}
			],
			workExperience: [
				{
					instituteName: "",
					designation: "",
					duration: "",
					description: ""
				}
			],
			modalConfig: {
				isOpen: false,
				items: []
			},
			ros: [
				{
					title: "Playground",
					path: "ros/ros1.png"
				},
				{
					title: "VSCODE",
					path: "ros/ros2.png"
				},
				{
					title: "TurtleSim",
					path: "ros/ros3.png"
				}
			],
			c3ihub: [
				{
					title: "Admin Dashboard",
					path: "c3i-main/admin_dashboard.png"
				},
				{
					title: "Admin Review",
					path: "c3i-main/admin_review.png"
				},
				{
					title: "Proposal Form",
					path: "c3i-main/proposal_form1.png"
				},
				{
					title: "Proposal Form",
					path: "c3i-main/proposal_form2.png"
				},
				{
					title: "Proposal Form",
					path: "c3i-main/proposal_form3.png"
				}
			],
			c3iCareers: [
				{
					title: "Login Screen",
					path: "c3iCareers/loginScreen.png"
				},
				{
					title: "Admin Job",
					path: "c3iCareers/customJob.png"
				},
				{
					title: "Admin View",
					path: "c3iCareers/jobAdminView.png"
				},
				{
					title: "Job Form",
					path: "c3iCareers/jobDescription.png"
				}
			]
		}
	},
	methods: {
		previewProject(type) {
			this.modalConfig.isOpen = true
			this.modalConfig.items = this[type]
			console.log(this.modalConfig, "Modal config")
		},
		getImagePath(src) {
			let href = this.$config.public?.fileServer
			let url = href + this.baseImageUrl + src
			return `url(${url})`
		}
	}
}
</script>

<style lang="scss" scoped>
.page-wrapper {
	.page-header {
		.header-item {
			font-size: 1.5rem;
			font-weight: bold;
		}
	}
	.page-body {
		.body-wrapper {
			display: flex;
			gap: calc($gap * 3);
			.profile-picture {
				img {
					min-width: 400px;
					max-width: 400px;
					min-height: 400px;
					max-height: 400px;
				}
			}
			.contents {
				display: flex;
				flex-direction: column;
				justify-content: center;
				gap: $gap;
				.content-item {
					&.name {
						font-size: calc($gap * 12);
						font-weight: bold;
					}
					&.quotation {
						font-size: 1.5rem;
						font-style: italic;
					}

					&.social-media {
						display: flex;
						gap: calc($gap * 2);
					}

					.media-item {
						display: flex;
						align-items: center;
						gap: $gap;
						.media-icon {
							width: 40px;
							height: 40px;
							img {
								width: 100%;
								height: 100%;
							}
						}
						.media-name {
							font-size: 1.5rem;
							font-weight: bold;
							a {
								text-decoration: none;
								color: hsl(0, 0%, 30%);
								&:hover {
									color: hsl(0, 0%, 35%);
									text-decoration: underline;
								}
							}
						}
					}
				}
			}
		}
	}
	.page-footer {
		.content-item {
			.content-title {
				font-size: 1.5rem;
				font-weight: bold;
				color: hsl(0, 0%, 20%);
				text-decoration: underline;
			}
			.content-body {
				font-size: 1.2rem;
				padding: $gap;
				.info-title {
					font-weight: bold;
					font-size: 1.3rem;
					a {
						text-decoration: none;
						color: hsl(0, 0%, 30%);
						&:hover {
							color: hsl(0, 0%, 35%);
							text-decoration: underline;
						}
					}
				}
				.info-body {
					padding-left: calc($gap);

					.designation {
						color: hsl(0, 0%, 50%);
					}
					.project {
						color: hsl(0, 0%, 30%);
					}
				}
			}
		}
	}
}

.modal-component {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgb(0 0 0 / 85%);
	z-index: 999;
	display: flex;
	align-items: center;
	justify-content: center;

	.close-modal {
		position: absolute;
		top: 0;
		right: 0;
		padding: $gap;
		&:hover {
			cursor: pointer;
		}
		.icon {
			color: whitesmoke;
		}
	}

	.carousal {
		display: flex;
		flex-direction: column;

		.image {
			padding: calc($gap * 10);
			img {
				object-fit: contain;
				width: 100%;
				height: 575px;
			}
		}
	}
}

@media (max-width: 768px) {
	.page-wrapper {
		.page-body {
			.body-wrapper {
				flex-direction: column;
				.profile-picture {
					display: flex;
					justify-content: center;
					img {
						min-width: 300px;
						max-width: 300px;
						min-height: 300px;
						max-height: 300px;
					}
				}
				.contents {
					.content-item {
						&.name {
							font-size: calc($gap * 6);
							text-align: center;
						}
						&.quotation {
							font-size: 1rem;
							text-align: center;
						}
						&.social-media {
							// flex-direction: column;
							justify-content: center;
							.media-item {
								flex-direction: column;
								.media-icon {
									width: 30px;
									height: 30px;
								}
								.media-name {
									font-size: 1rem;
								}
							}
						}
					}
				}
			}
		}
		.page-footer {
			.content-item {
				.content-title {
					font-size: 1rem;
				}
				.content-body {
					font-size: 1rem;
					.info-title {
						font-size: 1rem;
					}
					.info-body {
						padding: calc($gap/2);
						.designation {
							color: hsl(0, 0%, 50%);
						}
						.project {
							color: hsl(0, 0%, 30%);
						}
					}
				}
			}
		}
	}
}
@media screen and (max-width: 1024px) {
	.page-wrapper {
		.page-body {
			.body-wrapper {
				.profile-picture {
					img {
						min-width: 300px;
						max-width: 300px;
						min-height: 300px;
						max-height: 300px;
					}
				}
				.contents {
					.content-item {
						&.name {
							font-size: calc($gap * 6);
							text-align: center;
						}
						&.quotation {
							font-size: 1rem;
							text-align: center;
						}
						&.social-media {
							// flex-direction: column;
							justify-content: center;
							.media-item {
								flex-direction: column;
								.media-icon {
									width: 30px;
									height: 30px;
								}
								.media-name {
									font-size: 1rem;
								}
							}
						}
					}
				}
			}
		}
		.page-footer {
			.content-item {
				.content-title {
					font-size: 1rem;
				}
				.content-body {
					font-size: 1rem;
					.info-title {
						font-size: 1rem;
					}
					.info-body {
						padding: calc($gap/2);
						.designation {
							color: hsl(0, 0%, 50%);
						}
						.project {
							color: hsl(0, 0%, 30%);
						}
					}
				}
			}
		}
	}
}
</style>
